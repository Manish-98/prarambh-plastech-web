import React from 'react';
import IconGenerator from './IconGenerator';

const MissionCard = ({ title, description, iconType }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <IconGenerator 
                        type={iconType} 
                        className="w-6 h-6"
                        color="text-accent"
                    />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default MissionCard; 