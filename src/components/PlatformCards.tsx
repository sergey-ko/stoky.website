import React from 'react';
import Image from 'next/image';
import { PlatformButton } from './PlatformButton';
import { useTheme } from 'next-themes';

const platforms = [
  {
    name: "StokyGPT",
    description: "AI trading assistant offering backtesting and market insights",
    imageSrc: "/images/stoky-gpt.png",
    features: [
      "Basic backtesting",
      "Market insights",
      "AI-powered analysis",
    ],
    cta: "Try Stoky-GPT",
    ctaLink: "https://chatgpt.com/g/g-pK2vbuchD-stoky",
    color: "bg-blue-100",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Telegram Bot",
    description: "Real-time alerts and backtesting via Telegram",
    imageSrc: "/images/telegram-bot.png",
    features: [
      "Real-time alerts",
      "Advanced backtesting",
      "Telegram integration",
    ],
    cta: "View Subscription Plans",
    ctaLink: "#subscription-plans",
    color: "bg-green-100",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    name: "Studio",
    description: "Build and optimize your trading strategies",
    imageSrc: "/images/stoky-studio.png",
    features: [
      "Custom strategy builder",
      "Optimization tools",
      "Performance analytics",
    ],
    comingSoon: true,
    cta: "Join Waitlist",
    ctaLink: "https://www.linkedin.com/company/stokyai/",
    color: "bg-purple-100",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
];

export function PlatformCards() {
  const { theme } = useTheme();

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white drop-shadow-md">
          Explore Ways to Use Our AI
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-16 text-gray-700 dark:text-gray-300">
          Choose the one that best fits your needs
        </h3>
        <div className="space-y-16">
          {platforms.map((platform, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${theme === 'dark' ? 'bg-gray-800' : platform.color} rounded-lg overflow-hidden shadow-lg`}>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                  {platform.name === "Strategy Studio" && (
                    <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {platform.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {platform.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="w-48"> {/* Add this wrapper div with a fixed width */}
                  <PlatformButton
                    cta={platform.cta}
                    ctaLink={platform.ctaLink}
                    buttonColor={platform.buttonColor}
                  />
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                {platform.name === "Studio" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-600 dark:to-indigo-800">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-white mb-4 block animate-pulse">
                        Coming Soon
                      </span>
                      <span className="text-xl text-purple-100 dark:text-purple-200 block">
                        Get ready for something amazing!
                      </span>
                      <div className="mt-6 animate-bounce">
                        <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={platform.imageSrc}
                    alt={platform.name}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
