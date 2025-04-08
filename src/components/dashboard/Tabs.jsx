import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Client'); // Default active tab

  return (
    <div className="flex flex-col items-center w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-4 bg-white p-2 rounded-lg shadow-md">
        <button
          onClick={() => setActiveTab('Client')}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === 'Client' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
          }`}
        >
          Client
        </button>
        <button
          onClick={() => setActiveTab('Agents')}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === 'Agents' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
          }`}
        >
          Agents
        </button>
        <button
          onClick={() => setActiveTab('Owners')}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === 'Owners' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
          }`}
        >
          Owners
        </button>
      </div>

      {/* Tab Content */}
      {/* <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md w-full">
        {activeTab === 'Client' && <p>Client Content</p>}
        {activeTab === 'Agents' && <p>Agents Content</p>}
        {activeTab === 'Owners' && <p>Owners Content</p>}
      </div> */}
    </div>
  );
};

export default Tabs;