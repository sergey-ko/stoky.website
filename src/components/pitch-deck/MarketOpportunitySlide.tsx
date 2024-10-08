import React from 'react';

const MarketOpportunitySlide: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">TAM</h3>
        <p className="text-2xl font-bold">$50 billion</p>
        <p>Total global trading platform market</p>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">SAM</h3>
        <p className="text-2xl font-bold">$15 billion</p>
        <p>Market for advanced trading tools and automation</p>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">SOM</h3>
        <p className="text-2xl font-bold">$200 million</p>
        <p>Immediate target market of hobby quants and retail traders</p>
      </div>
    </div>
  );
};

export default MarketOpportunitySlide;