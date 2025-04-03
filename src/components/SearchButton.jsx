// SearchButton.jsx
import React from 'react';
import {  MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const SearchButton = ({ onSearchClick }) => {
  return (
    <button
      onClick={onSearchClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2"
    >
      <MagnifyingGlassIcon className="h-5 w-5 inline-block" />
    </button>
  );
};

export default SearchButton;