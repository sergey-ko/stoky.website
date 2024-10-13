import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Strategy Studio",
    description: "An intuitive platform to build, test, and optimize complex trading strategies without coding.",
    comingSoon: true
  },
  {
    title: "Telegram Bot",
    description: "Instant alerts and market insights right at your fingertips.",
    imageSrc: "/images/telegram-bot.png",
    imageAlt: "Telegram Bot Feature"
  },
  {
    title: "StokyGPT",
    description: "Our AI assistant interprets natural language inputs to deliver personalized trading strategies.",
    imageSrc: "/images/chat-interface-mockup.png",
    imageAlt: "Chat Interface Feature"
  }
];

const additionalProducts = [
  "StokyGPT: AI-driven analysis and backtesting for smarter trading decisions.",
  "Telegram Bot: Instant alerts and market insights right at your fingertips.",
  "Stoky Studio (Coming Soon): Advanced platform for quants to build and test sophisticated strategies."
];

const ProductSlide: React.FC = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col h-full">
            <h3 className="pitch-deck-h3 mb-6">{feature.title}</h3>
            <p className="pitch-deck-paragraph mb-8">{feature.description}</p>
            <div className="mt-auto h-64 w-full relative">
              {feature.comingSoon ? (
                <div className="bg-purple-600 h-full w-full flex flex-col items-center justify-center text-white">
                  <h2 className="text-3xl font-bold mb-3">Coming Soon</h2>
                  <p className="text-lg mb-5">Get ready for something amazing!</p>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              ) : (
                <Image
                  src={feature.imageSrc || ""}
                  alt={feature.imageAlt || ""}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              )}
            </div>
          </div>
        ))}
      </div>      
    </div>
  );
};

export default ProductSlide;