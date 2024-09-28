import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useTheme } from 'next-themes'

const faqs = [
  {
    question: "What is an AI trading assistant?",
    answer: "An AI trading assistant is a sophisticated software tool that uses artificial intelligence to help traders analyze markets, identify opportunities, and make informed decisions. It can provide real-time data analysis, strategy backtesting, and personalized alerts based on your trading preferences.",
  },
  {
    question: "How does the backtesting feature work?",
    answer: "Our backtesting feature allows you to test your trading strategies against historical market data. You can input your strategy parameters, and the system will simulate how your strategy would have performed in past market conditions. This helps you refine your approach before risking real capital.",
  },
  {
    question: "Is this platform suitable for beginners?",
    answer: "Yes, our platform is designed to cater to traders of all experience levels. For beginners, we offer educational resources, a user-friendly interface, and access to community-driven best practices. As you grow more experienced, you can leverage more advanced features to enhance your trading strategies.",
  },
  {
    question: "Can I customize the real-time alerts?",
    answer: "Absolutely! Our real-time alert system is highly customizable. You can set specific criteria for price movements, technical indicators, or market events that you want to be notified about. This ensures you receive alerts that are most relevant to your trading style and goals.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer multiple levels of support depending on your subscription plan. All users have access to our comprehensive knowledge base and community forum. Pro and Enterprise users receive priority email support, while Enterprise clients also benefit from a dedicated account manager for personalized assistance.",
  },
]

export function FAQ() {
  const { theme } = useTheme()

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white drop-shadow-md">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <span className="flex items-center">
                  <HelpCircle className="w-7 h-7 mr-3 text-blue-500 dark:text-blue-400" />
                  <span className="text-gray-900 dark:text-white">{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 dark:text-gray-300 mt-2 pl-10">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}