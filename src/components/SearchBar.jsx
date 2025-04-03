// SearchBar.jsx
import React, { useState } from 'react';
import SearchTabs from './SearchTabs';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import MapComponent from './MapComponent';

const SearchBar = () => {
  const [selectedTab, setSelectedTab] = useState('Buy');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Searching for:', searchTerm, 'in', selectedTab);
    // Here you would implement your search logic, potentially using the searchTerm and selectedTab
  };

  return (
    <div className=" p-4 rounded-lg shadow-md  w-full">
      <SearchTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <div className="flex mt-4">
        <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <SearchButton onSearchClick={handleSearchClick} />
      </div>
        <div className="mt-4">
            <MapComponent searchTerm={searchTerm}/>
        </div>
    </div>
  );
};

export default SearchBar;







