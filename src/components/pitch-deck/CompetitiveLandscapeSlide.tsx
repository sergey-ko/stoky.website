import React from 'react';


const competitorData = [
  {
    name: "TradingView",
    description: [
      "Great for charting",
      "Lacks AI-driven insights"
    ],
    icon: "/images/tradingview-logo.png",
    features: {
      "Graphical Analysis": "⭐⭐⭐⭐⭐",
      Usability: "⭐⭐⭐",
      "AI Integration": "⭐",
      "Strategy Tools": "⭐⭐⭐",
    }
  },
  {
    name: "QuantConnect",
    description: [
      "Powerful yet complex",
      "Steep learning curve"
    ],
    icon: "/images/quantconnect-logo.png",
    features: {
      "Graphical Analysis": "⭐⭐⭐",
      Usability: "⭐",
      "AI Integration": "⭐⭐",
      "Strategy Tools": "⭐⭐⭐⭐⭐",
    }
  },
  {
    name: "eToro",
    description: [
      "Popular for social trading",
      "Limited in advanced analysis tools"
    ],
    icon: "/images/etoro-logo.png",
    features: {
      "Graphical Analysis": "⭐⭐⭐⭐",
      Usability: "⭐⭐⭐⭐⭐",
      "AI Integration": "⭐⭐",
      "Strategy Tools": "⭐",
    }
  },
  {
    name: "Stoky",
    description: [
      "Combines advanced AI",
      "with ease of use for both",
      "novice and expert traders"
    ],
    icon: "/images/stoky-logo.png",
    features: {
      "Graphical Analysis": "⭐⭐",
      Usability: "⭐⭐⭐⭐⭐",
      "AI Integration": "⭐⭐⭐⭐⭐",
      "Strategy Tools": "⭐⭐⭐⭐⭐",
    }
  }
];

const featureOrder = ["Graphical Analysis", "Usability", "AI Integration", "Strategy Tools"];

// Updated component
const CompetitiveLandscapePrpSlide: React.FC = () => {
  return (
    <div className="space-y-6">     
      
      <div className="grid grid-cols-4 gap-2">
        {competitorData.map((competitor, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img src={competitor.icon} alt={`${competitor.name} icon`} className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="pitch-deck-h3 text-sm mb-2">{competitor.name}</h3>
            {competitor.description.map((line, lineIndex) => (
              <p key={lineIndex} className="pitch-deck-paragraph">{line}</p>
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Competitive Matrix</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-600 p-2">Feature</th>
              {competitorData.map((competitor, index) => (
                <th key={index} className="border border-gray-600 p-2">{competitor.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureOrder.map((feature, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-600 p-2">{feature}</td>
                {competitorData.map((competitor, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-600 p-2">
                    {Object.entries(competitor.features).find(([key]) => 
                      key.toLowerCase() === feature.toLowerCase()
                    )?.[1] || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitiveLandscapePrpSlide;