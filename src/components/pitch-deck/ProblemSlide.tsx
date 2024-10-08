import React from 'react';
import SlideHeader from './SlideHeader';

const ProblemSlide: React.FC = () => {
  return (
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
  );
};

export default ProblemSlide;