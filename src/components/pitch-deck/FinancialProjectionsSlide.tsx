import React from 'react';
import { Chart } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  LogarithmicScale,
  LineElement,
  PointElement,
  BarController
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  LogarithmicScale,
  LineElement,
  PointElement,
  BarController
);

const FinancialProjectionsSlide: React.FC = () => {
  const chartData = {
    labels: ['2024', '2025', '2026', '2027'],
    datasets: [
      {
        type: 'bar' as const,
        label: 'Projected Revenue (in millions)',
        data: [0.01, 5, 50, 250],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        label: 'Projected Users',
        data: [100, 5000, 30000, 100000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        yAxisID: 'y1',
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 3,
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
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Revenue (in millions)',
        },
      },
      y1: {
        // type: 'logarithmic' as const,
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: 'Users (log scale)',
        },
        ticks: {
          callback: function(tickValue: number | string, index: number, ticks: any[]): string {
            return Number(tickValue).toLocaleString();
          },
          maxTicksLimit: 5, // Limit the number of ticks
        },
        min: 0, // Set the minimum value
        max: 150000, // Set the maximum value
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="flex-1 flex flex-col">
        <h3 className="pitch-deck-h3 mb-4">Revenue Projections</h3>
        <div className="flex-grow relative">
          <div className="absolute inset-0">
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="pitch-deck-h3 mb-4">Key Metrics</h3>
        <div className="space-y-2 flex-grow flex flex-col">
          <p className="pitch-deck-paragraph">2025: $5 million revenue (5,000 users)</p>
          <p className="pitch-deck-paragraph">2026: $50 million revenue (30,000 users)</p>
          <p className="pitch-deck-paragraph">2027: $250 million revenue (100,000 users)</p>            
          <p className="pitch-deck-paragraph"><strong>Break-even point:</strong> 2025 Q1-Q2</p>
        </div>
        <h3 className="pitch-deck-h3 mb-4">Unit Economy</h3>
        <div className="space-y-2 flex-grow flex flex-col">
          <p className="pitch-deck-paragraph"><strong>Infrastructure:</strong> 20-30% of subscription price</p>
          <p className="pitch-deck-paragraph"><strong>User Acquisition:</strong> One monthly subscription price</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjectionsSlide;
