import React from 'react';
import Image from 'next/image';

const TeamSlide: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid grid-cols-1 gap-10">
        <div className="text-center">
          <Image
            src="/images/sergey-kovalev.png"
            alt="Sergey Kovalev"
            width={250}
            height={250}
            className="rounded-full mx-auto mb-4"
          />
             </div>
        <div className="text-center">
        <h3 className="pitch-deck-h3">Sergey Kovalev</h3>
          <p className="text-pitch-paragraph">15+ years in enterprise and startups.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        <div className="text-center">
          <Image
            src="/images/wofo-ai.png"
            alt="gpt4 o1"
            width={250}
            height={250}
            className="rounded-full mx-auto mb-4"
          />         
        </div>
        <div className="text-center">
        <h3 className="pitch-deck-h3">GPT4-o1</h3>
        <p className="text-pitch-paragraph">All Around Expert.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;