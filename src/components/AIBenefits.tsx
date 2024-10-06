import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Sliders, LineChart, Scale, Zap, Database, Target, Lightbulb, TrendingUp, Users } from "lucide-react"

const expertise = [
  {
    title: "AI",
    description: "AI tailored to fit specific business needs.",
    icon: Sliders,
    bulletPoints: [
      { text: "Not a one-size-fits-all solution.", icon: Zap },
      { text: "Identify the right AI tools and models.", icon: Lightbulb },
      { text: "Deliver actionable insights.", icon: Target },
      { text: "Maximize return on investment.", icon: TrendingUp }
    ],
  },
  {
    title: "Big Data",
    description: "Expertise in managing complex data environments.",
    icon: LineChart,
    bulletPoints: [
      { text: "Handle marketing, IIoT, financial data, and more.", icon: Database },
      { text: "Process and analyze large-scale datasets.", icon: Sliders },
      { text: "Use advanced data processing techniques.", icon: Zap },
      { text: "Transform raw data into business intelligence.", icon: Lightbulb }
    ],
  },
  {
    title: "Business Requirements",
    description: "Solutions built to fit your business.",
    icon: Scale,
    bulletPoints: [
      { text: "Understand your specific business goals.", icon: Target },
      { text: "Collaborate closely with your team.", icon: Users },
      { text: "Scalable and adaptable for future growth.", icon: TrendingUp },
      { text: "Drive tangible value for long-term strategy.", icon: Lightbulb }
    ],
  },
];

export function AIWhyUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-white">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 shadow-md hover:shadow-lg hover:border-blue-600 transition-all duration-300"
            >
              <CardHeader className="p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-900 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-semibold text-center mb-2 text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-xl text-gray-300 text-center mb-4">{benefit.description}</p>
                <ul className="space-y-3 text-gray-300">
                  {benefit.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center">
                      <point.icon className="w-5 h-5 mr-2 text-blue-400" />
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}