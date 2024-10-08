import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/common/card"
import { Lightbulb, Code, Cog, ChevronRight, Check } from "lucide-react"

const processSteps = [
  {
    title: "Assessment",
    stageDescription: "Laying the Foundation",
    description: [
      "Assess business and team readiness",
      "Define scope & goals",
      "Identify stakeholders",
      "Build proof of concept",
      "Integrate systems"
    ],
    icon: Lightbulb,
    duration: "1 Month",
    color: "bg-blue-900 hover:bg-blue-800",
    number: "01",
  },
  {
    title: "MVP",
    stageDescription: "Building the Core",
    description: [
      "Choose optimal conginitive architecture",
      "Build knowledge base",
      "Implement cognitive models",
      "Integrate with existing systems"
    ],
    icon: Code,
    duration: "3 Months",
    color: "bg-green-500 hover:bg-green-700",
    number: "02",
  },
  {
    title: "Final Setup",
    stageDescription: "Refining and Scaling",
    description: [
      "Establish support processes",
      "Ensure scalability",
      "Implement maintainability measures"
    ],
    icon: Cog,
    duration: "2 Months",
    color: "bg-purple-500 hover:bg-purple-700",
    number: "03",
  },
]

export function AIProcess() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100">Program Stages</h2>
        <p className="text-2xl text-center mb-16 text-gray-100">We will go through the following stages to build your AI assistant.</p>
        <div className="flex flex-col md:flex-row justify-between items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-1/3 relative">
              <Card className={`w-full h-full ${step.color} bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-700`}>
                <CardHeader className="text-center relative pt-12">
                  <div className="absolute top-4 left-4 text-3xl font-bold text-gray-500">{step.number}</div>
                  <div className="absolute top-4 right-4 text-3xl font-bold text-gray-500">{step.duration}</div>
                  <div className="mb-4 flex justify-center">
                    <step.icon className="w-16 h-16 text-gray-300" />
                  </div>
                  <CardTitle className="text-3xl font-extrabold mb-2 text-gray-100 uppercase tracking-wide">{step.title}</CardTitle>
                  <p className="text-xl font-light text-gray-300 italic">{step.stageDescription}</p>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
                    {step.description.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                        <span className="text-xl">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-600" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center items-center space-x-4">
          {processSteps.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
          ))}
        </div>
      </div>
    </section>
  )
}