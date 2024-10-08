import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/common/card"
import { Bot, Brain, Workflow, Users } from "lucide-react"
import { Button } from "@/components/ui/common/button"

const solutionFeatures = [
  {
    title: "Custom AI Assistant",
    description: "By the end of the 6-month program, you will have a fully functional AI Assistant developed specifically for your business. This assistant will be capable of analyzing your unique datasets, automating routine tasks, and providing actionable insights to drive informed decision-making. It will become an invaluable asset, streamlining operations and enhancing productivity across your organization.",
    icon: Bot,
  },
  {
    title: "Tailored Cognitive Architecture",
    description: "Your custom AI solution will be built on a robust cognitive architecture tailored to suit your business model. This architecture is designed for flexibility, allowing it to adapt as your business evolves. The system’s foundation will include advanced algorithms and data processing capabilities that fit your specific needs, ensuring it continues to provide relevant insights as market conditions and data sources change.",
    icon: Brain,
  },
  {
    title: "Process Design",
    description: "We will establish a scalable and maintainable process design for your AI implementation. This includes workflows, data pipelines, and integrations that seamlessly fit within your existing operations. Our process design is built with a long-term vision, ensuring that the AI assistant can handle growing data volumes and complexity as your business scales. It will be structured to adapt to new challenges and opportunities without compromising performance.",
    icon: Workflow,
  },
  {
    title: "Internal Team Training",
    description: "Your team will be trained to operate and expand the AI solution effectively. By the end of the program, your staff will have the skills and knowledge to manage the AI assistant, interpret its outputs, and refine its functionalities to meet evolving business needs. This training ensures the long-term success of the AI implementation, empowering your team to harness the AI’s full potential for ongoing business growth.",
    icon: Users,
  },
];


export function AIFinalSolution() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Results in 6 months</h2>
        <p className="text-2xl text-center mb-16 text-gray-100">MVP, Team, Processes</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionFeatures.map((feature, index) => (
            <Card key={index} className="bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-6">
                <feature.icon className="w-16 h-16 text-blue-400 mb-6" />
                <CardTitle className="text-2xl font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg">{feature.description}</p>
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