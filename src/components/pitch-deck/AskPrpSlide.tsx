import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const AskPrpSlide: React.FC = () => {
  const data = {
    labels: ['Marketing', 'Product', 'Operations'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="slide-container" style={{ display: 'flex' }}>
      <div className="left-column" style={{ flex: 1, padding: '20px' }}>
        <h3 className="pitch-deck-h3">Seeking: $250.000 in pre-seed funding through convertible debt.</h3>
        <p className="pitch-deck-paragraph">Allocation of Funds:</p>
        <ul className="pitch-deck-list">
          <p className="pitch-deck-paragraph">Marketing & Customer Acquisition: <strong>50%</strong></p>
          <p className="pitch-deck-paragraph">Product Development: <strong>30%</strong></p>
          <p className="pitch-deck-paragraph">Operations & Scaling: <strong>20%</strong></p>
        </ul>
      </div>
      <div className="right-column" style={{ flex: 1, padding: '20px' }}>
        <div style={{ height: '400px', width: '100%', position: 'relative' }}>
          <Pie data={data} options={options} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}>
            {data.labels.map((label, index) => (
              <div key={label} style={{
                position: 'absolute',
                color: '#fff',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                ...getLabelPosition(index),
              }}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getLabelPosition = (index: number) => {
  const positions = [
    { top: '50%', right: '25%' },  // Marketing
    { bottom: '30%', left: '25%' },  // Product
    { top: '25%', left: '25%' },  // Operations
  ];
  return positions[index];
};

export default AskPrpSlide;