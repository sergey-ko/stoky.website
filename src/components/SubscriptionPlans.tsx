import { Button } from "@/components/ui/button"
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
    color: "bg-green-100",
    buttonColor: "bg-green-600 hover:bg-gray-700",
    action: "https://chatgpt.com/g/g-pK2vbuchD-stoky",
  },
  {
    name: "Starter",
    price: "$99",
    features: [
      "All Free features",
      "Access to minute data",
      "Advanced backtesting",
      "Strategy optimization",
      "Priority support"
    ],
    cta: "Drop Us a Line",
    color: "bg-gray-100",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    popular: false,
    comingSoon: true,
  },
  {
    name: "Pro",
    price: "$299",
    features: [
      "All Starter features",
      "Stoky-Studio",
    ],
    cta: "Drop Us a Line",
    color: "bg-gray-100",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    comingSoon: true,
  },
//  {
//     name: "Pro",
//     price: "$599*",
//     features: [
//       "Advanced backtesting",
//       "Unlimited real-time alerts",
//       "Priority support",
//       "Custom indicators",
//     ],
//     cta: "Start 14-Day Trial",
//     color: "bg-blue-100",
//     buttonColor: "bg-blue-600 hover:bg-blue-700",
//   },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Private Cloud / On-Prem Deployment",
      "Custom integrations",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    color: "bg-purple-100",
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
    <section className="py-24 bg-white dark:bg-gray-900" id="subscription-plans">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white drop-shadow-md">
          Subscription Plans
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-16 text-gray-700 dark:text-gray-300">
          Find the Perfect Plan for Your Trading Needs.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-lg p-8 ${theme === 'dark' ? 'bg-gray-800' : plan.color} flex flex-col relative ${plan.popular ? 'transform scale-105 z-10' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 py-1 px-4 rounded-tr-lg rounded-bl-lg font-semibold">
                  Most Popular
                </div>
              )}
              {plan.comingSoon && (
                <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-4 rounded-tr-lg rounded-bl-lg font-semibold">
                  Coming Soon
                </div>
              )}
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
                {plan.price}
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className={`${feature === "Private Cloud / On-Prem Deployment" ? "font-semibold" : ""} text-gray-700 dark:text-gray-300`}>
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