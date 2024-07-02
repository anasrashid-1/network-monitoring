import React from 'react';

const RequestDetailsPanel = ({ request, onClose }) => {
  if (!request) return null;

  return (
    <div className="p-4 bg-white shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Request Details</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mb-2">
        <strong>URL:</strong> {request.url}
      </div>
      <div className="mb-2">
        <strong>Method:</strong> {request.method}
      </div>
      <div className="mb-2">
        <strong>Type:</strong> {request.type}
      </div>
      <div className="mb-2">
        <strong>Status:</strong> {request.status}
      </div>
      <div className="mb-2">
        <strong>Response:</strong> <pre>{request.response}</pre>
      </div>
    </div>
  );
};

export default RequestDetailsPanel;
