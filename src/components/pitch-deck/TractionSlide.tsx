import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const testimonials = [
  {
    quote: "Testing hypothesis is a game-changer. I can now test all my ideas by myself. I used to pay $1000+ for this.",
    author: "Andrey B.",
    role: "SnP 500 Follower",
  },
  {
    quote: "Backtesting complex strategy on all universe of stocks was impossible before. Now it takes only few words.",
    author: "Kate R.",
    role: "NASDAQ Trader",
  },
  // {
  //   quote: "My custom indicators and dynamic list of stocks to watch for let me have edge over the market. I feel confident that I am on top of things.",
  //   author: "Vlad M.",
  //   role: "Ichimoku Fan",
  // },
];

const TractionSlide: React.FC = () => {
  const chartData = {
    labels: ['Q4 24', 'Q1 25', 'Q2 25', 'Q3 25', 'Q4 25',],
    datasets: [
      {
        label: 'User Growth',
        data: [100, 1100, 3100, 6000, 10000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
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
          {/* <h3 className="pitch-deck-h3 mb-4">User Growth Projection</h3> */}
          <Line data={chartData} options={chartOptions} />
        </div>
        <div>
          {/* <h3 className="pitch-deck-h3 mb-4">Early User Testimonials</h3> */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-pitch-primary pl-4">
                <blockquote className="pitch-deck-paragraph italic mb-2 text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <p className="pitch-deck-paragraph text-sm text-right">
                  <strong>{testimonial.author}</strong> ({testimonial.role})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default TractionSlide;
