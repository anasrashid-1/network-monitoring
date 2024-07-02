
import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const FilterBar = () => {
  const { filters, setFilters } = useContext(NetworkContext);

  if (filters === undefined) {
    return null; 
  }

  const availableFilters = ['All', 'fetch', 'xhr', 'doc', 'css', 'js'];

  const handleFilterChange = (filter) => {
    if (filter === 'All') {
      setFilters([]);
    } else {
      const updatedFilters = filters.includes(filter)
        ? filters.filter((f) => f !== filter)
        : [...filters, filter];
      setFilters(updatedFilters);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white flex space-x-4">
      {availableFilters.map((filter) => (
        <label key={filter} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.includes(filter)}
            onChange={() => handleFilterChange(filter)}
            className="appearance-none rounded cursor-pointer"
          />
          <span
            className={`px-4 py-2 rounded ${
              filters.includes(filter) ? 'bg-blue-600 text-white' : 'bg-gray-600'
            }`}
          >
            {filter.toUpperCase()} {filters.includes(filter) && '✔'}
          </span>
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
