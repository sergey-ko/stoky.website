import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Lightbulb, Code, Cog } from "lucide-react"

const processSteps = [
  {
    title: "Proof of Concept",
    description: "Lay the groundwork, assess company readiness, and establish basic architecture.",
    icon: Lightbulb,
    duration: "1 Month",
  },
  {
    title: "MVP Development",
    description: "Develop solution architecture, build knowledge base, and implement cognitive models.",
    icon: Code,
    duration: "3 Months",
  },
  {
    title: "Final Solution Setup",
    description: "Establish support processes and ensure the solution is scalable and maintainable.",
    icon: Cog,
    duration: "2 Months",
  },
]

export function AIProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our AI Development Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-1/3">
              <Card className="w-full bg-gray-50 hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="mb-6 flex justify-center">
                    <step.icon className="w-24 h-24 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{step.title}</CardTitle>
                  <p className="text-sm font-semibold text-blue-600">{step.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block w-full h-2 bg-blue-200 my-4 relative">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}