import React from 'react';

const GoToMarketSlide: React.FC = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Targeting Retail Traders and Hobby Quants</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Phase 1</h3>
          <p>Target active TradingView users and QuantConnect users through targeted ads, influencer campaigns, and partnerships with quant communities.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Phase 2</h3>
          <p>Expand to eToro-like users by showcasing deeper insights via our chat interface.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Phase 3</h3>
          <p>Partner with trading influencers and forums like TradingView to promote our app.</p>
        </div>
      </div>
    </section>
  );
};

export default GoToMarketSlide;