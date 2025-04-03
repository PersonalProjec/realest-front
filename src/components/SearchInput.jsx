// SearchInput.jsx
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative flex-grow">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        placeholder="City, neighborhood, or address"
        value={searchTerm}
        onChange={onSearchChange}
        className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default SearchInput;