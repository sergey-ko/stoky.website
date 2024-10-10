import React from 'react';

const GoToMarketSlide: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Phase 1', 'Phase 2', 'Phase 3'].map((phase, index) => (
          <div key={phase} className="flex flex-col">
            
            <svg className="w-full h-24 mb-4" viewBox="0 0 100 50">
              <path d="M0,0 H80 L100,25 L80,50 H0 V0 Z" fill="#1e293b" />
              <text x="40" y="32" textAnchor="middle" fill="#4ade80" fontSize="18" fontWeight="bold">PHASE {index + 1}</text>
              <path d="M80,0 L100,25 L80,50" fill="none" stroke="#4ade80" strokeWidth="2" />
            </svg>
            <p className="pitch-deck-paragraph">
              {index === 0 && "Influencer campaigns targeting QuantConnect and TradingView communities."}
              {index === 1 && "Launch pro-active assistant demo targeting non-technical traders on eToro."}
              {index === 2 && "Partnerships with trading platforms and brokerages to expand integrations."}
            </p>
          </div>
        ))}
      </div>    
  );
};

export default GoToMarketSlide;