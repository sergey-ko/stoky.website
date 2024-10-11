import React from 'react';

const audienceData = [
  {
    type: "Primary",
    description: "Active traders seeking quantitative tools to generate ideas and reduce risk."
  },
  {
    type: "Secondary",
    description: "Casual traders attracted to smart, fun, and real-time market analysis."
  },
  {
    type: "Tertiary",
    description: "Quants desiring more user-friendly tools than existing platforms like QuantConnect."
  }
];

const TargetAudienceSlide: React.FC = () => {
  return (
    <div className="space-y-4  p-8">      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="space-y-6 flex-1">
          {audienceData.map((audience, index) => (
            <div key={index}>
              <h3 className="pitch-deck-h3">{audience.type}</h3>
              <p className="pitch-deck-paragraph">{audience.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex-1">
          <svg viewBox="0 0 350 350" className="w-full max-w-md mx-auto">
            <circle cx="100" cy="100" r="90" fill="rgba(178, 34, 34, 0.7)" /> {/* Red */}
            <circle cx="230" cy="100" r="90" fill="rgba(46, 139, 87, 0.7)" /> {/* Green */}
            <circle cx="160" cy="180" r="90" fill="rgba(70, 130, 180, 0.7)" /> {/* Blue */}
            
            <text x="30" y="80" fill="white" className="text-xs font-semibold">Quantitative Tools</text>
            <text x="190" y="80" fill="white" className="text-xs font-semibold">Real-time Market AI</text>
            <text x="100" y="190" fill="white" className="text-xs font-semibold">User-friendly Interface</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceSlide;