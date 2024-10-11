import React from 'react';
import { FaLock, FaUserAlt, FaCode, FaExclamationTriangle } from 'react-icons/fa';

const problemStatements = [
  {
    title: "Limited Access to Quantitative Tools",
    description: "Advanced analysis tools are often inaccessible or too complex.",
    icon: <FaLock />,
    color: "#4CAF50" // Green
  },
  {
    title: "Lack of Personalized Insights",
    description: "Traders struggle to receive tailored, data-driven market information for their specific preferences.",
    icon: <FaUserAlt />,
    color: "#2196F3" // Blue
  },
  {
    title: "Complex Strategy Development",
    description: "Requires extensive coding knowledge, creating a barrier for many.",
    icon: <FaCode />,
    color: "#FFC107" // Amber
  },
  {
    title: "Error Prone Trading Processes",
    description: "Portfolio management, risk management, and strategy development is error prone and time consuming.",
    icon: <FaExclamationTriangle />,
    color: "#F44336" // Red
  }
];

const ProblemPrpSlide: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-8">
        {problemStatements.map((problem, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg">
            <div className={`text-5xl mb-4`} style={{ color: problem.color }}>{problem.icon}</div>
            <h3 className="pitch-deck-title mb-3">{problem.title}</h3>
            <p className="pitch-deck-paragraph">{problem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemPrpSlide;