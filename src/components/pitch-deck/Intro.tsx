import React from 'react';
import SlideHeader from './SlideHeader';

const IntroSlide: React.FC = () => {
  return (
    <div className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      <div className="mt-8 space-y-4">
        <h1 className="text-4xl font-bold text-pitch-secondary">Welcome to the Future of Retail Trading</h1>
        <p className="text-lg text-pitch-secondary">
          We're on a mission to revolutionize the way people trade by bridging the gap between Graph and Quant platforms.
        </p>
      </div>
    </div>
  );
};

export default IntroSlide;