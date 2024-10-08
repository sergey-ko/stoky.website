import { Button } from "@/components/ui/common/button"
import { Check } from "lucide-react"
import { useTheme } from 'next-themes'

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Daily Data Access",
      "Analysis of Stocks, ETFs, and Crypto",
      "Stratgey backtesting",
      "Email support",
    ],
    cta: "Talk to Stoky GPT Now",
    buttonColor: "bg-green-600 hover:bg-green-700",
    action: "https://chatgpt.com/g/g-pK2vbuchD-stoky",
  },
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    features: [
      "All Free features",
      "Access to minute data",
      "Advanced backtesting",
      "Strategy optimization",
      "Priority support"
    ],
    cta: "Contact Sales",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "Pro",
    price: "$299",
    period: "per month",
    features: [
      "All Starter features",
      "Stoky-Studio",
    ],
    cta: "Drop Us a Line",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    comingSoon: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Stoky-Studio",
      "Your datasources",
      "Customizable knowledge base",
      "Integrations",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
]

export function SubscriptionPlans() {
  const { theme } = useTheme()

  const handleButtonClick = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else {
      // Handle other actions if needed
      console.log(`Action: ${action}`)
    }
  }

  return (
    <section className="py-24 bg-gray-900" id="subscription-plans">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-extrabold text-center mb-4 text-white">
          Subscription Plans
        </h2>
        <h3 className="text-xl text-center mb-16 text-gray-300">
          Find the Perfect Plan for Your Trading Needs.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 flex flex-col relative">
              {plan.comingSoon && (
                <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-4 rounded-tr-lg rounded-bl-lg font-semibold">
                  Coming Soon
                </div>
              )}
              <h3 className="text-3xl font-bold mb-4 text-white">
                {plan.name}
              </h3>
              <div className="mb-6">
                <p className="text-5xl font-extrabold text-white">
                  {plan.price}
                </p>
                {plan.period && (
                  <p className="text-sm text-gray-400 mt-1">
                    {plan.period}
                  </p>
                )}
              </div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${plan.buttonColor} text-lg font-semibold`}
                onClick={() => handleButtonClick(plan.action || "https://www.linkedin.com/company/stokyai/")}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}