import React from 'react';

const BusinessModelSlide: React.FC = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 border border-gray-600 rounded">
          <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
          <p className="text-2xl font-bold mb-2">$0</p>
          <ul className="list-disc list-inside">
            <li>Basic features</li>
            <li>Backtesting</li>
            <li>Technical analysis</li>
          </ul>
        </div>
        <div className="p-4 border border-gray-600 rounded">
          <h3 className="text-xl font-semibold mb-2">Expert Plan</h3>
          <p className="text-2xl font-bold mb-2">$90/month</p>
          <ul className="list-disc list-inside">
            <li>Strategy optimization</li>
            <li>Sector analysis</li>
            <li>Advanced features</li>
          </ul>
        </div>
        <div className="p-4 border border-gray-600 rounded bg-blue-900">
          <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
          <p className="text-2xl font-bold mb-2">$490/month</p>
          <ul className="list-disc list-inside">
            <li>Strategy finder</li>
            <li>TMS integration</li>
            <li>Background tasks</li>
          </ul>
          <p className="mt-2 font-bold">Best Value</p>
        </div>
        <div className="p-4 border border-gray-600 rounded">
          <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
          <p className="text-2xl font-bold mb-2">Custom</p>
          <ul className="list-disc list-inside">
            <li>On-premise deployment</li>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
          </ul>
        </div>
      </div>
  );
};

export default BusinessModelSlide;