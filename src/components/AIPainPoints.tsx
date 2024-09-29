import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  "Do your teams struggle to extract actionable insights from data?",
  "Are you looking for an AI assistant but lack the technical expertise?",
  "Do you need to scale data analysis across your organization without hiring more analysts?"
]

export function AIPainPoints() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Common Challenges with Internal Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
              <CardContent className="p-6">
                <p className="text-lg text-gray-300">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}