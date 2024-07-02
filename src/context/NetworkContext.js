import React, { createContext, useState } from 'react';

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [filters, setFilters] = useState([]); 

  return (
    <NetworkContext.Provider value={{ requests, setRequests, filters, setFilters }}>
      {children}
    </NetworkContext.Provider>
  );
};
