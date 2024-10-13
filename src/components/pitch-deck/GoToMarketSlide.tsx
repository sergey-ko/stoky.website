import React from 'react';

const phaseData = [
  {
    title: 'Phase 1',
    description: "Influencer campaigns targeting QuantConnect and TradingView communities.",
    color: {
      start: "#22c55e",
      end: "#4ade80"
    }
  },
  {
    title: 'Phase 2',
    description: "Launch pro-active assistant demo targeting non-technical traders on eToro.",
    color: {
      start: "#3b82f6",
      end: "#60a5fa"
    }
  },
  {
    title: 'Phase 3',
    description: "Partnerships with trading platforms and brokerages to expand integrations.",
    color: {
      start: "#8b5cf6",
      end: "#a78bfa"
    }
  }
];

const additionalStrategies = [
  "Influencer Partnerships: Collaborate with top TradingView influencers to showcase Stoky's capabilities.",
  "Targeted Advertising: Deploy ads on financial platforms frequented by our target audience.",
  "Referral Program: Incentivize users to invite peers, accelerating growth through word-of-mouth."
];

const GoToMarketSlide: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8">      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-12">
        {phaseData.map((phase, index) => (
          <div key={phase.title} className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <svg className="w-full h-24" viewBox="0 0 100 50">
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={phase.color.start} />
                  <stop offset="100%" stopColor={phase.color.end} />
                </linearGradient>
              </defs>
              <path d="M0,0 H80 L100,25 L80,50 H0 V0 Z" fill={`url(#gradient-${index})`} />
              <text x="40" y="32" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">{phase.title.toUpperCase()}</text>
              <path d="M80,0 L100,25 L80,50" fill="none" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <div className="p-4 mt-12">
              <p className="pitch-deck-paragraph">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-8">
        <h3 className="pitch-deck-h3">Additional Strategies</h3>
        <ul className="space-y-2">
          {additionalStrategies.map((strategy, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <p className="pitch-deck-paragraph">{strategy}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default GoToMarketSlide;