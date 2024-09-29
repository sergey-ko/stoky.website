import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from 'lucide-react'

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
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg">
              <AccordionTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-800 text-white">
                <span className="font-semibold text-left">{item.question}</span>               
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}