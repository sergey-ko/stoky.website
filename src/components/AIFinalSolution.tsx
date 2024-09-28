import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bot, Brain, Workflow, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutionFeatures = [
  {
    title: "Custom AI Assistant",
    description: "Developed to analyze your specific data.",
    icon: Bot,
  },
  {
    title: "Tailored Cognitive Architecture",
    description: "Fit to your business needs.",
    icon: Brain,
  },
  {
    title: "Process Design",
    description: "For long-term scalability and maintainability.",
    icon: Workflow,
  },
  {
    title: "Internal Team Training",
    description: "For handling and growing the AI solution.",
    icon: Users,
  },
]

export function AIFinalSolution() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Your Final AI Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutionFeatures.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-6">
                <feature.icon className="w-16 h-16 text-blue-600 mb-6" />
                <CardTitle className="text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300"
          >
            <a href="#pricing">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}