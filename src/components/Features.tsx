import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart2, Bell, BookOpen } from "lucide-react"

const features = [
  {
    title: "Analisys",
    description: "Start with analysis of your data",
    icon: BarChart2,
  },
  {
    title: "Hypothesis",
    description: "Test your hypothesis with our AI",
    icon: BookOpen,
  },
  {
    title: "Strategy",
    description: "Formulate, backtest, and optimize your trading strategies with our AI",
    icon: Bell,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50" id="features-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Let Data Drive Your Trading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="w-16 h-16 text-blue-600 mb-6" />
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}