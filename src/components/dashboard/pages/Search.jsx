import React, { useState } from 'react';
import { luxury1, luxury2 } from '../../../assets/images';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulate a search operation (replace with API call)
    const dummyResults = [
      {
        id: 1,
        name: 'Luxury Apartment',
        location: 'New York, NY',
        price: '$2,500/month',
        bedrooms: 2,
        bathrooms: 2,
        image: {luxury2},
      },
      {
        id: 2,
        name: 'Cozy Studio',
        location: 'San Francisco, CA',
        price: '$1,800/month',
        bedrooms: 1,
        bathrooms: 1,
        image: {luxury1},
      },
    ];
    setResults(dummyResults);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Search Apartments</h2>

      {/* Search Bar */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by location, name, etc."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
          <option value="">Price Range</option>
          <option value="0-1000">$0 - $1,000</option>
          <option value="1000-2000">$1,000 - $2,000</option>
          <option value="2000-3000">$2,000 - $3,000</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
          <option value="">Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
          <option value="">Bathrooms</option>
          <option value="1">1 Bathroom</option>
          <option value="2">2 Bathrooms</option>
          <option value="3">3 Bathrooms</option>
        </select>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <div key={result.id} className="border rounded-lg shadow-md overflow-hidden">
            <img src={result.image} alt={result.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{result.name}</h3>
              <p className="text-gray-500">{result.location}</p>
              <p className="text-blue-500 font-semibold">{result.price}</p>
              <p className="text-sm text-gray-600">
                {result.bedrooms} Bedrooms • {result.bathrooms} Bathrooms
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {results.length === 0 && (
        <p className="text-gray-500 text-center mt-6">No apartments found. Try a different search.</p>
      )}
    </div>
  );
};

export default Search;