import { Card, CardContent } from "@/components/ui/card"

export function AITestimonial() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-gray-800 shadow-lg">
          <CardContent className="p-8">
            <div className="relative">
              <span className="absolute top-0 left-0 text-6xl text-gray-700 -mt-8 -ml-4">"</span>
              <blockquote className="text-3xl italic text-center text-gray-200 relative z-10">
                Our experience with Stoky has proven the power of AI assistants to transform complex data into actionable insights.
              </blockquote>
              <span className="absolute bottom-0 right-0 text-6xl text-gray-700 -mb-8 -mr-4">"</span>
            </div>
            <p className="text-right mt-6 text-gray-400">
              <span className="font-bold text-gray-200">Satisfied Client</span>
              <span className="text-gray-500"> • CEO, TechCorp</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}