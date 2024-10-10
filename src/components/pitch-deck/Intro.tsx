import React from 'react';

const IntroSlide: React.FC = () => {
  return (
    <div className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      {/* Add logo and app name */}
      <div className="flex items-center justify-center mb-8">
        <img src="/images/stoky-logo.png" alt="Stoky Logo" className="w-40 h-40 mr-6" />
      </div>
      <div className="mt-8 space-y-4">
        <h1 className="text-4xl font-bold text-pitch-secondary">Welcome to the Future of Retail Trading</h1>
        <p className="pitch-deck-paragraph">
          We're on a mission to revolutionize the way people trade by bridging the gap between Graph and Quant platforms.
        </p>
      </div>
    </div>
  );
};

export default IntroSlide;