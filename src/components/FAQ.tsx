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
      "question": "What is Stoky, the AI trading assistant?",
      "answer": "Stoky is your personal AI trading assistant, designed to help you step into the world of quantitative trading without needing coding or statistical knowledge. It provides advanced market analysis, helps you formulate trading hypotheses, and backtests strategies to give you data-driven insights and personalized alerts tailored to your trading style."
    },
    {
      "question": "How does Stoky's backtesting feature work?",
      "answer": "Stoky's backtesting feature allows you to test your trading strategies against historical market data. By inputting your strategy parameters, Stoky simulates how your strategy would have performed in various market conditions. This helps you refine your approach, identify strengths and weaknesses, and make informed adjustments before risking real capital."
    },
    {
      "question": "How can Stoky assist in formulating trading hypotheses?",
      "answer": "Stoky helps you move beyond visual patterns by utilizing popular technical analysis techniques and extensive market data to identify trends and formulate hypotheses. Whether you’re curious about the effectiveness of certain strategies or want to explore new trading ideas, Stoky guides you through data-backed hypothesis testing."
    },
    {
      "question": "Can I customize the real-time alerts with Stoky?",
      "answer": "Yes! Stoky's real-time alert system is highly customizable. You can set specific criteria for price movements, technical indicators, or market events, ensuring you receive alerts relevant to your trading style and goals. Stoky keeps you informed and ready to act on opportunities as they arise."
    },
    {
      "question": "What support does Stoky offer?",
      "answer": "Stoky provides multiple levels of support depending on your subscription plan. All users can access our comprehensive knowledge base and community forum. Pro and Enterprise users receive priority email support, while Enterprise clients benefit from a dedicated account manager for personalized assistance."
    },
    {
      "question": "Is Stoky suitable for beginners?",
      "answer": "Absolutely! Stoky is designed for traders of all experience levels. Beginners can benefit from its user-friendly interface, educational resources, and guided analysis to explore quantitative trading. As you gain experience, you can leverage advanced features to enhance your strategies and trading decisions."
    }
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