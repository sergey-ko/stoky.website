import React from 'react';
import Image from 'next/image';

const TeamSlide: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      bio: "15+ years in financial markets, previously at XYZ",
      image: "/images/john-doe.jpg"
    },
    {
      name: "Jane Smith",
      role: "CTO & Co-Founder",
      bio: "10+ years in fintech, ex-Google engineer",
      image: "/images/jane-smith.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Head of Product",
      bio: "8+ years in product management, previously at Robinhood",
      image: "/images/mike-johnson.jpg"
    }
  ];

  return (
    <section className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Experienced Team with Deep Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image 
              src={member.image} 
              alt={member.name} 
              width={128} 
              height={128} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
            <p className="text-xs mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSlide;