import React from 'react';

const AskSlide: React.FC = () => {
  return (
    <div className="bg-slide-bg p-8 rounded-lg h-full flex flex-col justify-center">
      <div className="mt-8 space-y-4">
        <p className="pitch-deck-paragraph"><strong className="text-pitch-secondary">40% Product Development:</strong> Expand our development team to add [feature] by [date].</p>
        <p className="pitch-deck-paragraph"><strong className="text-pitch-secondary">30% Marketing:</strong> Drive targeted acquisition via influencer campaigns and partnerships.</p>
        <p className="pitch-deck-paragraph"><strong className="text-pitch-secondary">20% Hiring:</strong> Onboard additional engineers and marketing specialists.</p>
        <p className="pitch-deck-paragraph"><strong className="text-pitch-secondary">10% Miscellaneous:</strong> Reserve for legal, operational expenses.</p>
      </div>
    </div>
  );
};

export default AskSlide;