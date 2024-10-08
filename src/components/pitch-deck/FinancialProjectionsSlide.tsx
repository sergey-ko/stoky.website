import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FinancialProjectionsSlide: React.FC = () => {
  const chartData = {
    labels: ['2025', '2026', '2027'],
    datasets: [
      {
        label: 'Projected Revenue (in millions)',
        data: [1, 5, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue Projections'
      }
    }
  };

  return (
    <section className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Strong Revenue Growth Potential</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Revenue Projections</h3>
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Key Metrics</h3>
          <ul className="list-disc list-inside">
            <li>2025: $1 million revenue</li>
            <li>2026: $5 million revenue</li>
            <li>2027: $15 million revenue</li>
            <li>Break-even point: Year 2</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FinancialProjectionsSlide;