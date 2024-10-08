import React from 'react';

const GoToMarketSlide: React.FC = () => {
  return (
    <div className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-pitch-primary">Targeting Retail Traders and Hobby Quants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Phase 1</h3>
          <p>Influencer campaigns targeting QuantConnect and TradingView communities.</p>
          {/* Existing content... */}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Phase 2</h3>
          <p>Launch chat-interface demo targeting non-technical traders on eToro.</p>
          {/* Existing content... */}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Phase 3</h3>
          <p>Partnerships with trading platforms and brokerages to expand integrations.</p>
          {/* Existing content... */}
        </div>
      </div>
    </div>
  );
};

export default GoToMarketSlide;