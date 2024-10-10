import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface PlatformInfo {
  name: string;
  logo: string;
  pros: string[];
  cons: string[];
}

const tradingPlatforms: PlatformInfo[] = [
  {
    name: "TradingView",
    logo: "/images/tradingview-logo.png",
    pros: ["Great for Charts"],
    cons: ["Bad for Backtesting"]
  },
  {
    name: "QuantConnect",
    logo: "/images/quantconnect-logo.png",
    pros: ["Powerful"],
    cons: ["Requires Coding"]
  },
  {
    name: "eToro",
    logo: "/images/etoro-logo.png",
    pros: ["Easy to Use"],
    cons: ["Lacks Advanced Insights"]
  }
];

const PlatformCard: React.FC<PlatformInfo> = ({ name, logo, pros, cons }) => (
  <div className="flex flex-col items-center">
    <div className="h-1/3 flex items-center justify-center mb-4">
      <Image
        src={logo}
        alt={`${name} Logo`}
        width={150}
        height={150}
        objectFit="contain"
      />
    </div>
    <div className="text-center">
      <h3 className="pitch-deck-h3 mb-2">{name}</h3>
      <ul className="pitch-deck-paragraph text-lg">
        {pros.map((pro, index) => (
          <li key={`pro-${index}`} className="flex items-center justify-center">
            <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
            {pro}
          </li>
        ))}
        {cons.map((con, index) => (
          <li key={`con-${index}`} className="flex items-center justify-center">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
            {con}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProblemSlide: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tradingPlatforms.map((platform) => (
          <PlatformCard key={platform.name} {...platform} />
        ))}
      </div>
    </div>
  );
};

export default ProblemSlide;