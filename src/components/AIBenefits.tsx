import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, LineChart, Scale, Sliders, DollarSign } from "lucide-react"

const benefits = [
  {
    title: "Time Efficiency",
    description: "Automate data analysis tasks, reducing time spent on manual efforts.",
    icon: Clock,
  },
  {
    title: "Actionable Insights",
    description: "Provide insights to non-technical team members with easy-to-understand outputs.",
    icon: LineChart,
  },
  {
    title: "Scalability",
    description: "The solution is designed to scale as your company grows, both in data volume and complexity.",
    icon: Scale,
  },
  {
    title: "Customization",
    description: "Tailored to fit your specific data sources and business requirements.",
    icon: Sliders,
  },
  {
    title: "Cost-Effective",
    description: "Reduce dependency on large analytics teams by empowering internal teams with AI.",
    icon: DollarSign,
  },
]

export function AIBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Benefits of Our AI Assistant</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <CardHeader className="p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-semibold text-center mb-2">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}