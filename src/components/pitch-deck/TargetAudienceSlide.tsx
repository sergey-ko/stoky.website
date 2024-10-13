import React from 'react';
import { Pie } from 'react-chartjs-2';
import { FaCircle, FaSquare, FaCaretUp } from 'react-icons/fa';

const audienceData = [
  {
    type: "Primary",
    description: "Active traders (10 mln) seeking quantitative tools to generate ideas and reduce risk.",
    icon: FaCircle
  },
  {
    type: "Secondary",
    description: "Casual traders (70 mln) attracted to smart, fun, and real-time market analysis.",
    icon: FaCircle
  },
  {
    type: "Tertiary",
    description: "Quants(1 mln) desiring more user-friendly tools than existing platforms like QuantConnect.",
    icon: FaCircle
  }
];

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const label = context.label || '';
          const value = context.raw || 0;
          return `${label}: ${value}M`;
        },
      },
    },
  },
};

const traderAudiences = [
  { type: 'Casual Traders', count: 70 },
  { type: 'Active Traders', count: 10 },
  { type: 'Quantitative Traders', count: 1 },
];

const pieChartColors = {
  backgroundColor: ['#3B82F6', '#4FD1C5', '#1E3A8A'],
  hoverBackgroundColor: ['#2563EB', '#14B8A6', '#1E40AF'],
};

const pieChartData = {
  labels: traderAudiences.map(audience => `${audience.type} Traders`),
  datasets: [
    {
      data: traderAudiences.map(audience => audience.count),
      backgroundColor: pieChartColors.backgroundColor,
      hoverBackgroundColor: pieChartColors.hoverBackgroundColor,
    },
  ],
};

const TargetAudienceSlide: React.FC = () => {
  return (
    <div className="space-y-4 p-8 mb-12">      
    <h3 className="pitch-deck-h3 mb-12">Our Target: Capturing 0.3% to 1% of these audiences</h3>
      <div className="flex flex-col md:flex-row gap-8">    
        <div className="space-y-6 flex-1">
          {audienceData.map((audience, index) => (
            <div key={index} className="flex items-center">
              <audience.icon className="mr-2 text-blue-500" />
              <div>
                {/* <p className="pitch-deck-paragraph"><strong>{audience.type}</strong> </p> */}
                <p className="pitch-deck-paragraph">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
{/*         
        <div className="flex-1">
          <svg viewBox="0 0 350 350" className="w-full max-w-md mx-auto">
            <circle cx="100" cy="100" r="90" fill="rgba(178, 34, 34, 0.7)" /> 
            <circle cx="230" cy="100" r="90" fill="rgba(46, 139, 87, 0.7)" /> 
            <circle cx="160" cy="180" r="90" fill="rgba(70, 130, 180, 0.7)" />
            
            <text x="30" y="80" fill="white" className="text-xs font-semibold">Quantitative Tools</text>
            <text x="190" y="80" fill="white" className="text-xs font-semibold">Real-time Market AI</text>
            <text x="100" y="190" fill="white" className="text-xs font-semibold">User-friendly Interface</text>
          </svg>
        </div> */}

        <div className="w-full md:w-1/2">          
          {/* <h3 className="pitch-deck-h3 mb-8">Traders Audiences</h3> */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-64 h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
            {/* <div className="flex-1 flex flex-col justify-center space-y-8">
              {traderAudiences.map((audience, index) => (
                <div key={index} className="mb-2">
                  <div>
                    <p className="pitch-deck-paragraph">{audience.type}: {audience.count} mln</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>          
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceSlide;
