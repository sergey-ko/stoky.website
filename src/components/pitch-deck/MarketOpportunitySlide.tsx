import React from 'react';

const MarketOpportunitySlide: React.FC = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Tapping into a Multi-Billion-Dollar Market</h2>
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
    </section>
  );
};

export default MarketOpportunitySlide;