import React from 'react';
import Image from 'next/image';

const ProductSlide: React.FC = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Simplified Yet Powerful Trading Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Strategy Studio</h3>
          <p>Flexible, no-code strategy builder</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Backtesting</h3>
          <p>Instant backtesting without writing a line of code</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Chat Interface</h3>
          <p>Natural language access to market insights for non-tech users</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Strategy Studio Interface</h3>
          <Image 
            src="/images/strategy-studio-mockup.png" 
            alt="Strategy Studio Interface" 
            width={500} 
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Backtesting Results</h3>
          <Image 
            src="/images/strategy-backtest-results.png" 
            alt="Backtesting Results" 
            width={500} 
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;