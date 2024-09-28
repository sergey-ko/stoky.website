import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaChartBar, FaCog, FaClock } from 'react-icons/fa'

export function AIShowcase() {
  const challenges = [
    { icon: FaChartBar, text: "Data Analysis and Interpretation" },
    { icon: FaCog, text: "Complex Technical Implementation" },
    { icon: FaClock, text: "Time-Consuming Strategy Development" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              Video Placeholder
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <Button size="lg" variant="outline" className="w-full">
              Test Stoky Now
            </Button>
            <Button size="lg" className="w-full">
              Watch a Video Demo
            </Button>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center">Common Challenges in AI Trading</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <challenge.icon className="w-12 h-12 text-blue-500 mb-4" />
              <p className="text-lg leading-relaxed">{challenge.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}