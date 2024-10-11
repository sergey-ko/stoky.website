import React from 'react';

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Daily Data Access",
      "Analysis of Stocks, ETFs, and Crypto",
      "Strategy backtesting",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Starter",
    price: "$99/month",
    features: [
      "All Free features",
      "Access to minute data",
      "Advanced backtesting",
      "Strategy optimization",
      "Priority support"
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$299/month",
    features: [
      "All Starter features",
      "Stoky-Studio",
    ],
    highlight: false,
    highlightText: "Coming Soon",
  },
  {
    name: "Elite",
    price: "Custom",
    features: [
      "Stoky-Studio",
      "Your datasources",
      "Customizable knowledge base",
      "Integrations",
      "On-premise deployment",
    ],
    highlight: false,
  },
];

const BusinessModelSlide: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`p-4 border border-gray-600 rounded ${plan.highlight ? 'bg-blue-900' : ''}`}>
            <h3 className="pitch-deck-h3 mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold mb-2">{plan.price}</p>
            <ul className="list-disc list-inside">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            {plan.highlight && <p className="mt-2 font-bold">{plan.highlightText}</p>}
          </div>
        ))}
      </div>
      {/* <p className="pitch-deck-paragraph">Projected User Base: Aiming for 320,000 to 850,000 users across segments.</p> */}
    </div>
  );
};

export default BusinessModelSlide;