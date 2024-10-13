import React from 'react';
import { FaLock, FaCode, FaDatabase, FaExclamationTriangle, FaClock } from 'react-icons/fa';

const problemStatements = [
  {
    title: "Limited Access to Advanced Trading Tools",
    description: "Retail traders lack availability to sophisticated quantitative tools and best practices used by professionals.",
    icon: <FaLock />,
    color: "#4CAF50" // Green
  },
  {
    title: "High Technical Barriers",
    description: "Advanced trading platforms often require coding skills, making them inaccessible to non-technical traders.",
    icon: <FaCode />,
    color: "#2196F3" // Blue
  },
  {
    title: "Information Overload and Complexity",
    description: "The sheer volume of market data and conflicting information overwhelms traders, hindering effective decision-making.",
    icon: <FaDatabase />,
    color: "#FFC107" // Amber
  },
  {
    title: "Emotion-Driven and Inconsistent Decision-Making",
    description: "Without objective, data-driven insights, traders are prone to impulsive decisions based on emotions rather than facts.",
    icon: <FaExclamationTriangle />,
    color: "#F44336" // Red
  },
  {
    title: "Time-Consuming Strategy Development",
    description: "Manually analyzing markets and developing strategies is labor-intensive and inefficient, especially without automated tools.",
    icon: <FaClock />,
    color: "#9C27B0" // Purple
  }
];

const ProblemPrpSlide: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="pitch-deck-h3">Common Obstacles Preventing Retail Traders from Achieving Consistent Results</h3>
      <ul className="space-y-6">
        {problemStatements.map((problem, index) => (
          <li key={index} className="flex items-start">
            <div className={`text-3xl mr-4 mt-1`} style={{ color: problem.color }}>{problem.icon}</div>
            <div>
              <h3 className="pitch-deck-title mb-2">{problem.title}</h3>
              <p className="pitch-deck-paragraph">{problem.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemPrpSlide;
