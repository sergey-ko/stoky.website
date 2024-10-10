import React from 'react';
import Image from 'next/image';

const ProductSlide: React.FC = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Strategy Studio</h3>
          <p className="mb-2">Create, tweak, and optimize strategies without writing code.</p>
          <div className="mt-4 bg-gray-700 h-40 flex items-center justify-center">
            <Image
              src="/images/strategy-studio-feature.png"
              alt="Strategy Studio Feature"
              width={200}
              height={160}
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Backtesting</h3>
          <p className="mb-2">Test your strategy instantly—no need to code or integrate complex systems.</p>
          <div className="mt-4 bg-gray-700 h-40 flex items-center justify-center">
            <Image
              src="/images/backtesting-feature.png"
              alt="Backtesting Feature"
              width={200}
              height={160}
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Chat Interface</h3>
          <p className="mb-2">Ask questions in natural language to get deep insights quickly.</p>
          <div className="mt-4 bg-gray-700 h-40 flex items-center justify-center">
            <Image
              src="/images/chat-interface-feature.png"
              alt="Chat Interface Feature"
              width={200}
              height={160}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
  );
};

export default ProductSlide;