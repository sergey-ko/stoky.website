import React from 'react';

const MarketOpportunitySlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
     <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        <div className="relative w-80 h-80 mb-8 md:mb-0 md:mr-12">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" fill="#1E3A8A" />
            <circle cx="50" cy="68" r="32" fill="#3B82F6" />
            <circle cx="50" cy="84" r="16" fill="#4FD1C5" />
            <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TAM</text>
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SAM</text>
            <text x="50" y="85" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SOM</text>
          </svg>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-6">
          <div>
            <h3 className="pitch-deck-h3">$60bn</h3>
            <p className="pitch-deck-paragraph">Total Addressable Market</p>
          </div>
          <div>
            <h3 className="pitch-deck-h3">$15bn</h3>
            <p className="pitch-deck-paragraph">Serviceable Available Market</p>
          </div>
          <div>
            <h3 className="pitch-deck-h3">$200m</h3>
            <p className="pitch-deck-paragraph">Serviceable Obtainable Market</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunitySlide;