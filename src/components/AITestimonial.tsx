import { Card, CardContent } from "@/components/ui/card"

export function AITestimonial() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <div className="relative">
              <span className="absolute top-0 left-0 text-6xl text-gray-300 -mt-8 -ml-4">"</span>
              <blockquote className="text-3xl italic text-center text-gray-700 relative z-10">
                Our experience with Stoky has proven the power of AI assistants to transform complex data into actionable insights.
              </blockquote>
              <span className="absolute bottom-0 right-0 text-6xl text-gray-300 -mb-8 -mr-4">"</span>
            </div>
            <p className="text-right mt-6 text-gray-600">
              <span className="font-bold">Satisfied Client</span>
              <span className="text-gray-400"> • CEO, TechCorp</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}