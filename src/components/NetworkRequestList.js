import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const NetworkRequestList = ({ setSelectedRequest }) => {
  const { requests } = useContext(NetworkContext);

  const handleClick = (request) => {
    setSelectedRequest(request);
  };

  // Function to get minimized response for display
  const getMinimizedResponse = (response) => {
    const maxLength = 100; // Maximum characters to display
    if (response.length > maxLength) {
      return response.substring(0, maxLength) + '...'; // Truncate if longer than maxLength
    }
    return response;
  };

  return (
    <div className="p-4 bg-gray-100 flex-1 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Network Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">URL</th>
              <th className="p-2">Method</th>
              <th className="p-2">Type</th>
              <th className="p-2">Status</th>
              <th className="p-2">Response</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index} className="cursor-pointer hover:bg-gray-200" onClick={() => handleClick(req)}>
                <td className="p-2">{req.url}</td>
                <td className="p-2">{req.method}</td>
                <td className="p-2">{req.type}</td>
                <td className="p-2">{req.status}</td>
                <td className="p-2">{getMinimizedResponse(req.response)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NetworkRequestList;
