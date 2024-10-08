import React from 'react';

const ProblemSlide: React.FC = () => {
  return (
    <section className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-pitch-primary">Current Trading Platforms Lack Flexibility</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">TradingView</h3>
          <p>Great for Charts, Bad for Backtesting</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">QuantConnect</h3>
          <p>Powerful but Requires Coding</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">eToro</h3>
          <p>Easy to Use, but Lacks Advanced Insights</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSlide;