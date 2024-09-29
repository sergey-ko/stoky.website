import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AIPricingPlans() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Pricing</h2>
        <Card className="max-w-3xl mx-auto bg-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white">6 Months Program</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-6xl font-bold mb-4 text-blue-400">$59,000</p>
            <p className="text-xl text-gray-300 mb-8">Designed for small to mid-sized businesses</p>
            <ul className="space-y-4 text-left max-w-md mx-auto mb-8">
              {[
                "Custom AI Assistant",
                "Tailored Cognitive Architecture",
                "Process Design for Scalability",
                "Internal Team Training",
                "Ongoing support with a separate contract"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Get Started Today
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}