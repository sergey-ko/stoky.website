import React from 'react';


interface Competitor {
  name: string;
  description: string[];
  icon: string;
  features: Record<string, string>;
}

const competitorData: Competitor[] = [
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
      "AI": "⭐",
      "Strategy": "⭐⭐⭐",
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
      "AI": "⭐⭐",
      "Strategy": "⭐⭐⭐⭐⭐",
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
      "AI": "⭐⭐",
      "Strategy": "⭐",
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
      "AI": "⭐⭐⭐⭐⭐",
      "Strategy": "⭐⭐⭐⭐⭐",
    }
  }
];

// const featureOrder = ["Graphical Analysis", "Usability", "AI", "Strategy"];
const featureOrder = ["Graphical Analysis", "AI", "Strategy"];

// Updated component
const CompetitiveLandscapePrpSlide: React.FC = () => {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-6 gap-2 items-center bg-gray-700 p-2 rounded-t-lg">
        <div className="pitch-deck-paragraph font-semibold">Competitor</div>
        <div className="pitch-deck-paragraph font-semibold col-span-2">Description</div>
        {featureOrder.map((feature, index) => (
          <div key={index} className="pitch-deck-paragraph font-semibold  text-center">{feature}</div>
        ))}
      </div>

      {competitorData.map((competitor: Competitor, index) => (
        <div key={index} className="grid grid-cols-6 gap-2 items-center bg-gray-800 p-2">
          <div className="flex items-center space-x-2">
            {/* <img src={competitor.icon} alt={`${competitor.name} icon`} className="w-8 h-8 object-contain" /> */}
            <p className="pitch-deck-paragraph">{competitor.name}</p>
          </div>
          <div className="col-span-2">
            {competitor.description.map((line, lineIndex) => (
              <p key={lineIndex} className="pitch-deck-paragraph">{line}</p>
            ))}
          </div>
          {featureOrder.map((feature, featureIndex) => (
            <div key={featureIndex} className="pitch-deck-paragraph text-center">
              <span className="text-xs">{competitor.features[feature]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CompetitiveLandscapePrpSlide;
