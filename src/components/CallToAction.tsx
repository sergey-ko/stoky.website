import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'

export function CallToAction() {
  const { theme } = useTheme()

  return (
    <section className="bg-blue-600 dark:bg-blue-800 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Ready to Take Control of Your Trading?</h2>
        <Button 
          size="lg" 
          variant="secondary" 
          className={`${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-blue-600 hover:bg-blue-100'} transform hover:scale-105 transition-all duration-200 shadow-lg`}
        >
          Start Free Trial
        </Button>
      </div>
    </section>
  )
}