import React from 'react';

// Reusable Components
const MetricCard = ({ label, value }) => (
    <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xs font-medium text-gray-500 mb-2">{label}</h3>
        <p className="text-lg font-bold text-gray-800 leading-tight">{value}</p>
    </div>
 );
export default MetricCard;