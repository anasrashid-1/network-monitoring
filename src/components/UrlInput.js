import React, { useState, useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const UrlInput = () => {
  const { setRequests } = useContext(NetworkContext);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBt9Ne6CAziUfeI9_6TOgKqmfSl2EPbIxw&cx=f15922fb151b94950&q=${inputValue}`);
      const data = await response.json();
      const request = {
        url: inputValue,
        method: 'GET',
        type: 'custom_search',
        status: response.status,
        response: JSON.stringify(data, null, 2), // Convert JSON to string for display
      };
      setRequests(prevRequests => [...prevRequests, request]);
    } catch (error) {
      console.error('Custom Search API error:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter URL"
          className="flex-1 p-2 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="p-2 bg-blue-600 rounded">
          Fetch
        </button>
      </form>
    </div>
  );
};

export default UrlInput;
