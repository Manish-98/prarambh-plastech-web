import React from 'react';

const MissionCard = ({ 
    title, 
    description, 
    icon 
}) => {
    return (
        <div className="text-center bg-gray-50 p-8 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default MissionCard; 