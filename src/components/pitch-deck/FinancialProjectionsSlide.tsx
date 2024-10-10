import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FinancialProjectionsSlide: React.FC = () => {
  const chartData = {
    labels: ['2024','2025', '2026', '2027'],
    datasets: [
      {
        label: 'Projected Revenue (in millions)',
        data: [0.01, 5, 50, 250],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="flex-1 flex flex-col">
        <h3 className="pitch-deck-h3 mb-4">Revenue Projections</h3>
        <div className="flex-grow relative">
          <div className="absolute inset-0">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="pitch-deck-h3 mb-4">Key Metrics</h3>
        <div className="space-y-2 flex-grow flex flex-col">
          <p className="pitch-deck-paragraph">2025: $5 million revenue</p>
          <p className="pitch-deck-paragraph">2026: $50 million revenue</p>
          <p className="pitch-deck-paragraph">2027: $250 million revenue</p>            
          <p className="pitch-deck-paragraph"><strong>Break-even point:</strong> 2025 Q1</p>
        </div>
        <h3 className="pitch-deck-h3 mb-4">Unit Economy</h3>
        <div className="space-y-2 flex-grow flex flex-col">
          <p className="pitch-deck-paragraph"><strong>Infrastructure:</strong> 20-30% of subscription price</p>
          <p className="pitch-deck-paragraph"><strong>User Acquisition:</strong> 100% of monthly subscription price</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjectionsSlide;