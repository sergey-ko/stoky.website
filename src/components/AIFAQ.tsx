import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useTheme } from 'next-themes'

const faqItems = [
  {
    question: "What tools do you use?",
    answer: "We utilize a range of cutting-edge AI and data analysis tools, including machine learning frameworks, natural language processing libraries, and custom-built algorithms tailored to your specific needs."
  },
  {
    question: "What happens after the 6-month program?",
    answer: "After the program, we provide ongoing support and maintenance to ensure your AI assistant continues to perform optimally. We also offer options for further development and scaling of your solution."
  },
  {
    question: "Can the AI assistant be customized for our industry?",
    answer: "Absolutely! Our AI assistants are designed to be highly customizable. We work closely with you to understand your industry-specific needs and tailor the solution accordingly."
  },
  {
    question: "What kind of support is offered after the project?",
    answer: "We offer comprehensive post-project support, including technical assistance, regular check-ins, and updates to keep your AI assistant running smoothly and up-to-date with the latest advancements."
  }
]

export function AIFAQ() {
  const { theme } = useTheme()

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white drop-shadow-md">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <span className="flex items-center">
                  <HelpCircle className="w-7 h-7 mr-3 text-blue-500 dark:text-blue-400" />
                  <span className="text-gray-900 dark:text-white">{item.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 dark:text-gray-300 mt-2 pl-10">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}