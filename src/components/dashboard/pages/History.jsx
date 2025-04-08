import React, { useState } from 'react';

const History = () => {
  const [history, setHistory] = useState([
    {
      id: 1,
      type: 'Login',
      description: 'Logged in from Chrome on Windows',
      date: '2025-04-01 10:00 AM',
    },
    {
      id: 2,
      type: 'Search',
      description: 'Searched for apartments in New York',
      date: '2025-04-02 02:30 PM',
    },
    {
      id: 3,
      type: 'Transaction',
      description: 'Paid $2,500 for apartment rent',
      date: '2025-04-03 09:15 AM',
    },
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">History</h2>

      {/* History List */}
      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.type}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
            <span className="text-sm text-gray-400">{item.date}</span>
          </div>
        ))}
      </div>

      {/* No History Message */}
      {history.length === 0 && (
        <p className="text-gray-500 text-center mt-6">No history available.</p>
      )}
    </div>
  );
};

export default History;