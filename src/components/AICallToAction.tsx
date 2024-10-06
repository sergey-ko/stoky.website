import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { FaEnvelope, FaTelegram } from 'react-icons/fa'

export default function AICombinedSection() {
  const { theme } = useTheme()

  const handleEmailClick = () => {
    window.location.href = "mailto:sk@stoky.pro"
  }

  const handleTelegramClick = () => {
    window.open("https://t.me/Sergey0Kovalev", "_blank")
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg">
          AI Assistant in Action!
        </h2>
        <p className="text-xl text-center mb-10 text-gray-200">Experience how our 'Stoky' simplifies data access and analysis for stock and crypto traders.</p>
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
        <p className="text-sm text-center mt-6 mb-16 text-gray-400">You need to have an OpenAI subscription to use Stoky GPT.</p>

        {/* Contact section */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white">Drop Us a Line</h2>
        <div className="flex justify-center space-x-8">
          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 ease-in-out hover:shadow-lg"
            aria-label="Send email"
          >
            <FaEnvelope size={24} />
          </button>
          <button
            onClick={handleTelegramClick}
            className="flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200 ease-in-out hover:shadow-lg"
            aria-label="Send Telegram message"
          >
            <FaTelegram size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
