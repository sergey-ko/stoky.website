import React from 'react';
import Image from 'next/image';

const TeamSlide: React.FC = () => {
  return (
    <div className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-pitch-primary">Experienced Team with Deep Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Image
            src="/images/john-doe.jpg"
            alt="John Doe"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">John Doe</h3>
          <p>15+ years in trading and fintech. Former CTO at [Company].</p>
        </div>
        <div className="text-center">
          <Image
            src="/images/jane-smith.jpg"
            alt="Jane Smith"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Jane Smith</h3>
          <p>Built scalable financial systems. Ex-Lead Developer at [Fintech].</p>
        </div>
        <div className="text-center">
          <Image
            src="/images/mike-johnson.jpg"
            alt="Mike Johnson"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">Mike Johnson</h3>
          <p>Managed multi-million dollar portfolios. Quant expert.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;