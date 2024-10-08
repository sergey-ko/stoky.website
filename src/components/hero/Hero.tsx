import { Button } from "@/components/ui/common/button"
import { useTheme } from 'next-themes'
import YouTube from 'react-youtube'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export function Hero() {
  const { theme } = useTheme()

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Background pattern (unchanged) */}
      </div>
      <div className="container mx-auto text-center px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          TRADING ASSISTANT
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl mb-8">
         YOUR PERSONAL QUANT EXPERT
        </h2>
        
        {/* Video preview */}
        <div className="mb-8 mx-auto max-w-4xl aspect-video">
          <YouTube
            videoId="_kA04En9CdA"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
              },
            }}
            className="w-full h-full rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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
            Try Stoky-GPT*
          </Button>
        </div> 
        <p className="text-sm text-center mt-4">*You need OpenAI account to use this</p>
      </div>
    </section>
  )
}