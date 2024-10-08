import { Button } from "@/components/ui/common/button"
import { useTheme } from 'next-themes'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export function CallToAction() {
  const { theme } = useTheme()

  return (
    <section className="bg-blue-600 dark:bg-blue-800 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white drop-shadow-md">
          Get Data-Driven Insights Now!
        </h2>
        <Button 
            size="lg" 
            className={`bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-yellow-500 to-orange-600 text-gray-900 hover:from-yellow-600 hover:to-orange-700' 
                : 'from-yellow-400 to-orange-500 text-blue-900 hover:from-yellow-500 hover:to-orange-600'
            } transform hover:scale-105 transition-all duration-200 shadow-lg text-xl py-6 px-8`}
            onClick={() => window.open('https://chatgpt.com/g/g-pK2vbuchD-stoky', '_blank')}
          >
            <ArrowTopRightOnSquareIcon className="w-6 h-6 mr-3" />
            Ask Stoky GPT*
          </Button>
      </div>
      <p className="text-sm text-center mt-4">*You need to have OpenAI subscription to use Stoky</p>
    </section>
  )
}
