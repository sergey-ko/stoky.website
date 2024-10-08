import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import SlideHeader from './SlideHeader';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TractionSlide: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Growth',
        data: [100, 300, 600, 1200, 2000, 3500],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
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
        text: 'User Growth Over Time',
        color: '#ffffff'
      }
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' }
      },
      y: {
        ticks: { color: '#ffffff' }
      }
    }
  };

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">User Growth</h3>
          <Line data={chartData} options={chartOptions} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pitch-secondary">User Testimonials</h3>
          <blockquote className="italic border-l-4 border-pitch-primary pl-4 mb-4">
            "This platform has revolutionized my trading strategy!" - John D.
          </blockquote>
          <blockquote className="italic border-l-4 border-pitch-primary pl-4">
            "Finally, a tool that combines ease of use with powerful analytics." - Sarah M.
          </blockquote>
        </div>
      </div>
  );
};

export default TractionSlide;