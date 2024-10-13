import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const marketSizes = [
  { name: 'Total Addressable Market', abbreviation: 'TAM', value: 60, unit: 'bn' },
  { name: 'Serviceable Available Market', abbreviation: 'SAM', value: 15, unit: 'bn' },
  { name: 'Serviceable Obtainable Market', abbreviation: 'SOM', value: 200, unit: 'm' },
];

const traderAudiences = [
  { type: 'Casual Traders', count: 70 },
  { type: 'Active Traders', count: 10 },
  { type: 'Quantitative Traders', count: 1 },
];

const pieChartColors = {
  backgroundColor: ['#3B82F6', '#4FD1C5', '#1E3A8A'],
  hoverBackgroundColor: ['#2563EB', '#14B8A6', '#1E40AF'],
};

const tamSamSomColors = ['#1E3A8A', '#3B82F6', '#4FD1C5'];

const MarketOpportunitySlide: React.FC = () => {
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

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      {/* <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl space-y-16 md:space-y-0 md:space-x-12">         */}
        {/* Left Column */}
        {/* <div className="w-full md:w-1/2"> */}
          {/* <h3 className="pitch-deck-h3 mb-8">Market</h3> */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill={tamSamSomColors[0]} />
                <circle cx="50" cy="68" r="32" fill={tamSamSomColors[1]} />
                <circle cx="50" cy="84" r="16" fill={tamSamSomColors[2]} />
                <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TAM</text>
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SAM</text>
                <text x="50" y="85" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SOM</text>
              </svg>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-8">
              {marketSizes.map((size, index) => (
                <div key={index}>
                  <h3 className="pitch-deck-h3">${size.value}{size.unit}</h3>
                  <p className="pitch-deck-paragraph">{size.name}</p>
                </div>
              ))}
            </div>
          </div>
        {/* </div> */}

        {/* Right Column */}
        {/* <div className="w-full md:w-1/2">          
          <h3 className="pitch-deck-h3 mb-8">Audiences</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-64 h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-8">
              {traderAudiences.map((audience, index) => (
                <div key={index} className="mb-4">
                  <div>
                    <h3 className="pitch-deck-h3">{audience.count} mln</h3>
                    <p className="pitch-deck-paragraph">{audience.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="pitch-deck-paragraph mt-8 text-center md:text-left">Our Target: Capturing 0.5% to 5% of this audience</p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default MarketOpportunitySlide;
