import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketOpportunitySlide: React.FC = () => {
  const pieChartData = {
    labels: ['Active Traders', 'Casual Traders', 'Quant Traders'],
    datasets: [
      {
        data: [10, 70, 1],
        backgroundColor: ['#3B82F6', '#4FD1C5', '#1E3A8A'],
        hoverBackgroundColor: ['#2563EB', '#14B8A6', '#1E40AF'],
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
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl space-y-16 md:space-y-0 md:space-x-12">        
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h3 className="pitch-deck-h3 mb-8">Market Opportunity</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill="#1E3A8A" />
                <circle cx="50" cy="68" r="32" fill="#3B82F6" />
                <circle cx="50" cy="84" r="16" fill="#4FD1C5" />
                <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TAM</text>
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SAM</text>
                <text x="50" y="85" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SOM</text>
              </svg>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-8">
              <div>
                <h3 className="pitch-deck-h3">$60bn</h3>
                <p className="pitch-deck-paragraph">Total Addressable Market</p>
              </div>
              <div>
                <h3 className="pitch-deck-h3">$15bn</h3>
                <p className="pitch-deck-paragraph">Serviceable Available Market</p>
              </div>
              <div>
                <h3 className="pitch-deck-h3">$200m</h3>
                <p className="pitch-deck-paragraph">Serviceable Obtainable Market</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">          
          <h3 className="pitch-deck-h3 mb-8">Traders Audiences</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-64 h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-8">
              <div className="mb-4">
                <div>
                  <h3 className="pitch-deck-h3">70 mln</h3>
                  <p className="pitch-deck-paragraph">Casual</p>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <h3 className="pitch-deck-h3">10 mln</h3>
                  <p className="pitch-deck-paragraph">Active</p>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <h3 className="pitch-deck-h3">1 mln</h3>
                  <p className="pitch-deck-paragraph">Quant</p>
                </div>
              </div>
            </div>
          </div>
          <p className="pitch-deck-paragraph mt-8 text-center md:text-left">Our Target: Capturing 0.5% to 5% of this audience</p>
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunitySlide;