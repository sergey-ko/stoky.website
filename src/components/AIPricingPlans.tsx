import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    title: "Starter",
    price: {
      original: "$1,500",
      discounted: "Free"
    },
    duration: "",
    description: "Getting started with AI",
    features: [
      "10 hours of AI Consultation",
      "Anonymous case study inclusion", // Added new feature
    ],
    cta: "Get Started",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "6 month Program",
    price: {
      original: null,
      discounted: "$6,999"
    },
    duration: "per month",
    description: "AI Assistant, Team and Processes",
    features: [
      "Custom AI Assistant",
      "Tailored Cognitive Architecture",
      "Process Design for Scalability",
      "Internal Team Training",
      "Ongoing support with a separate contract"
    ],
    negativeFeatures: [
      "No development"
    ],
    cta: "Upgrade Now",
    color: "bg-green-600 hover:bg-green-700",
    popular: false
  },
  {
    title: "Outsourcing",
    price: {
      original: null,
      discounted: "Call"
    },
    duration: "",
    description: "When Your Nees Are Very Special",
    features: [
      "Advanced AI Ecosystem",
      "Custom Cognitive Architecture",
      "Enterprise-wide Process Optimization",
      "Extensive Team Training Program",
      "24/7 Priority Support",
      "Quarterly Strategy Reviews"
    ],
    cta: "Contact Sales",
    color: "bg-purple-600 hover:bg-purple-700"
  }
]

export function AIPricingPlans() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">Choose Your Option</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`bg-gray-800 ${plan.popular ? 'ring-2 ring-blue-500' : ''} flex flex-col`}>
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">{plan.title}</CardTitle>
                {plan.popular && <Badge className="mx-auto mt-2 bg-blue-500">Most Popular</Badge>}
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <div className="flex flex-col items-center justify-center mb-2 h-24"> {/* Added fixed height */}
                  {plan.price.original && (
                    <p className="text-xl font-bold text-gray-400 line-through mb-1">{plan.price.original}</p>
                  )}
                  <p className="text-5xl font-bold text-blue-400">{plan.price.discounted}</p>
                  <p className="text-xl text-gray-400 mt-1">{plan.duration}</p>
                </div>
                <p className="text-xl text-gray-300 mb-8 h-16"> {/* Added fixed height */}
                  {plan.description}
                </p>
                <ul className="space-y-4 text-left max-w-md mx-auto mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-200">
                      <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                  {plan.negativeFeatures && plan.negativeFeatures.map((feature, fIndex) => (
                    <li key={`neg-${fIndex}`} className="flex items-center text-gray-200">
                      <svg className="w-6 h-6 mr-3 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/*<CardFooter>
                <Button className={`w-full ${plan.color} text-white text-xl py-6 transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg`}>
                  {plan.cta}
                </Button>
              </CardFooter>*/}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}