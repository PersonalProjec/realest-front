// SearchTabs.jsx
import React from 'react';

const SearchTabs = ({ selectedTab, onTabChange }) => {
  const tabs = ['Buy', 'Rent', 'Sell'];

  return (
    <div className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md ${
            selectedTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SearchTabs;