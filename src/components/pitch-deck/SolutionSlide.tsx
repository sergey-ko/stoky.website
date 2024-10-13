import React from 'react';
import Image from 'next/image';

const solutionItems = [
  {
    title: "AI-Powered Strategy Development and Optimization",
    description: "Enhance and backtest trading strategies using AI."
  },
  {
    title: "Real-Time Market Analysis",
    description: "Instant insights on both stock and crypto markets."
  },
  {
    title: "User-Friendly Interfaces",
    description: "Accessible via a Telegram bot for convenience; Stoky Studio for advanced users coming soon."
  },
  {
    title: "Pro-Active Assistant",
    description: "Pro-actively monitors the market and takes actions according to best practices."
  },
  {
    title: "Chat Interface",
    description: "Non-tech users get access to pro-level insights without learning complex tools."
  }
];

const SolutionSlide: React.FC = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
    <div>
      {/* <div className="md:col-span-3"> */}
      <h3 className="pitch-deck-h3 mb-8">Make Best Trading Practices and Portfolio Management Accessible to Retail Traders.</h3>
        {solutionItems.slice(0, 4).map((item, index) => (
          <div key={index} className="mb-4 flex items-start">
            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="mb-2 pitch-deck-title">{item.title}</h3>
              <p className="pitch-deck-paragraph">{item.description}</p>
            </div>
          </div>
        ))}
      {/* </div> */}
      {/* <div className="md:col-span-3">
        <h3 className="pitch-deck-h3">{solutionItems[4].title}</h3>        
        <div className="mt-6 mb-6 bg-gray-700 w-full h-auto relative" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/chat-interface-mockup.png"
            alt="Chat Interface Mockup"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="pitch-deck-paragraph mt-6">{solutionItems[4].description}</p>
      </div> */}
    </div>
  );
};

export default SolutionSlide;