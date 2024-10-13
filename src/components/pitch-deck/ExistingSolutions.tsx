import React from 'react';
import { FaChartBar, FaRobot, FaCode, FaGraduationCap, FaUserTie } from 'react-icons/fa';

const existingSolutions = [
  {
    title: "Traditional Charting Platforms",
    description: "Basic tools only, with a steep learning curve for complex indicators.",
    icon: <FaChartBar />,
    color: "#4CAF50" // Green
  },
  {
    title: "Automated Trading Bots and Signal Services",
    description: "Lack of transparency in strategies and limited customization options.",
    icon: <FaRobot />,
    color: "#2196F3" // Blue
  },
  {
    title: "Algorithmic Trading Platforms Requiring Coding",
    description: "High technical barrier and time-consuming development process.",
    icon: <FaCode />,
    color: "#FFC107" // Amber
  },
  {
    title: "Educational Content and DIY Approaches",
    description: "Information overload and gaps in practical application of knowledge.",
    icon: <FaGraduationCap />,
    color: "#FF9800" // Orange
  },
  {
    title: "Professional Portfolio Management Services",
    description: "High costs, fees, and reduced control over investment decisions.",
    icon: <FaUserTie />,
    color: "#F44336" // Red
  }
];

const ExistingSolutionsSlide: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="pitch-deck-h3">Why Current Trading Platforms Don't Meet Retail Traders' Needs</h3>
      <ul className="space-y-6">
        {existingSolutions.map((solution, index) => (
          <li key={index} className="flex items-start">
            <div className={`text-3xl mr-4 mt-1`} style={{ color: solution.color }}>{solution.icon}</div>
            <div>
              <h3 className="pitch-deck-title mb-2">{solution.title}</h3>
              <p className="pitch-deck-paragraph">{solution.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingSolutionsSlide;
