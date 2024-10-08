import React from 'react';
import Image from 'next/image';

const SolutionSlide: React.FC = () => {
  return (
    <section className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-pitch-primary">Bridging the Gap Between Graphic and Quant Platforms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Strategy Studio</h3>
          <p className="mb-2">No code, no hassle. Get started with automation easily.</p>
          <div className="mt-4 bg-gray-700 h-40 flex items-center justify-center">
            <Image
              src="/images/strategy-studio-mockup.png"
              alt="Strategy Studio Interface Mockup"
              width={300}
              height={160}
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Chat Interface</h3>
          <p className="mb-2">Non-tech users get access to pro-level insights without learning complex tools.</p>
          <div className="mt-4 bg-gray-700 h-40 flex items-center justify-center">
            <Image
              src="/images/chat-interface-mockup.png"
              alt="Chat Interface Mockup"
              width={300}
              height={160}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSlide;