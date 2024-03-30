import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Perform search logic here
  };

  return (
    <div className="relative mx-auto w-1277">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by directory..."
        className="block px-4 py-2 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
        style={{width: 400}}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
         <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
