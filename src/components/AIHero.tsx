import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function AIHero() {
  console.log("AIHero component is rendering");

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image 
          src="/background/overlay_2.jpg"
          alt="Background overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          AI Assistant
        </h1>
        <h2 className="text-4xl font-bold mb-6">
          6 Months Program
        </h2>
        <p className="text-2xl mb-10 max-w-3xl mx-auto">
          Build AI Assistant Tailored to Your Business Data
        </p>
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <a href="#contact">Start Your AI Journey Today</a>
        </Button>
      </div>
    </section>
  )
}