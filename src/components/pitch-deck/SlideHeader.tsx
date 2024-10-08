import React from 'react';

interface SlideHeaderProps {
  title: string;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold mb-6 text-pitch-primary border-b-2 border-pitch-primary pb-2">
      {title}
    </h2>
  );
};

export default SlideHeader;