import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/common/card"
import { Users, LineChart, RefreshCw } from "lucide-react"
import { useTheme } from 'next-themes'

const practices = [
  {
    title: "Analysis",
    description: "Dive deep into your trading data to uncover trends and patterns. Our AI Assistant analyzes historical market movements, key indicators, and real-time data to give you a comprehensive understanding of market dynamics. Customize your analysis by choosing specific time frames, assets, and market conditions to align with your trading strategies.",
    icon: Users,
  },
  {
    title: "Hypothesis",
    description: "Have a hypothesis of how market operates? Put it to the test by texting with our Assistant. Whether you’re exploring new market opportunities or validating a complex strategy, our assistant simulates real-world market scenarios, providing detailed feedback and insights. Optimize your strategies with data-backed results to refine your approach and improve your success rate.",
    icon: LineChart,
  },
  {
    title: "Strategy",
    description: "Develop and fine-tune your trading strategies with ease. Our AI Assistant allows you to create complex strategies, backtest them against historical data, and optimize for maximum returns. Receive actionable insights, performance metrics, and detailed reports, helping you to mitigate risks and capitalize on market opportunities. Transform your trading with strategies tailored to your goals.",
    icon: RefreshCw,
  },
]

export function BestPractices() {
  const { theme } = useTheme()

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white drop-shadow-md">
          The 3-Step Trading Blueprint
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-16 text-gray-700 dark:text-gray-300">
          Data, ideas, action
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
              <CardHeader>
                <practice.icon className="w-20 h-20 text-blue-600 dark:text-blue-400 mb-6" />
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {practice.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {practice.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}