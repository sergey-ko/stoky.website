import { Button } from "@/components/ui/button"

export function AIHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Add a background SVG or image here */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          AI Assistant
        </h1>
        <h2 className="text-4xl font-bold mb-6">
          6 Months Program
        </h2>
        <p className="text-2xl mb-10 max-w-3xl mx-auto">
          To Build AI Assistants Tailored to Your Business
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <a href="#contact">Start Your AI Journey Today</a>
        </Button>
      </div>
    </section>
  )
}