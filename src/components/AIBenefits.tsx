import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, LineChart, Scale, Sliders, DollarSign } from "lucide-react"

const benefits = [
  {
    title: "AI",
    description: "While building Stoky we have learned that AI is not a one-size-fits-all solution. We have the expertise to choose the right AI for the right job.",
    icon: Sliders,
  },
  {
    title: "Big Data",
    description: "Marketing data, IIoT data, financial data, etc. we have the expertise to handle it.",
    icon: LineChart,
  },
  {
    title: "Business Requirements",
    description: "Understand your business requirements and build a solution that fits.",
    icon: Scale,
  },
  // {
  //   title: "Customization",
  //   description: "Tailored to fit your specific data sources and business requirements.",
  //   icon: Sliders,
  // },
  // {
  //   title: "Cost-Effective",
  //   description: "Reduce dependency on large analytics teams by empowering internal teams with AI.",
  //   icon: DollarSign,
  // },
]

export function AIWhyUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-white">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 shadow-md hover:shadow-lg hover:border-blue-600 transition-all duration-300"
            >
              <CardHeader className="p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-900 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-semibold text-center mb-2 text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-300 text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}