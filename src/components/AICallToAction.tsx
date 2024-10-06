import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function AICallToAction() {
  const { theme } = useTheme()

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg">
          Explore Our AI Assistant in Action!
        </h2>
        <p className="text-xl text-center mb-10 text-gray-200">Experience how 'Stoky' simplifies data access and analysis.</p>
        <Button 
          size="lg" 
          className={`bg-gradient-to-r ${
            theme === 'dark' 
              ? 'from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600' 
              : 'from-blue-400 to-green-400 text-white hover:from-blue-500 hover:to-green-500'
          } transform hover:scale-105 transition-all duration-200 shadow-lg text-xl py-6 px-10 rounded-full`}
          onClick={() => window.open('https://chatgpt.com/g/g-pK2vbuchD-stoky', '_blank')}
        >
          <ArrowTopRightOnSquareIcon className="w-6 h-6 mr-3" />
          Try Stoky GPT Now
        </Button>
        <p className="text-sm text-center mt-6 text-gray-400">You need to have an OpenAI subscription to use Stoky GPT.</p>
      </div>
    </section>
  )
}
