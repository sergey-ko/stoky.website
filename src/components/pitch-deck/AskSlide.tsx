import React from 'react';

const AskSlide: React.FC = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Join Us in Revolutionizing Trading</h2>
      <div className="space-y-4">
        <p className="text-xl">We're raising $X million to accelerate growth and reach Y users.</p>
        <div>
          <h3 className="text-xl font-semibold mb-2">Fund Allocation</h3>
          <ul className="list-disc list-inside">
            <li>40% Product development</li>
            <li>30% Marketing</li>
            <li>20% Hiring</li>
            <li>10% Miscellaneous</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AskSlide;