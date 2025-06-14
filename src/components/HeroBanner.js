import React from 'react';

const HeroBanner = ({ 
    title, 
    description, 
    backgroundImage,
    minHeight = "400px"
}) => {
    return (
        <div
            className="relative bg-cover bg-center bg-fixed flex items-center justify-center"
            style={{
                backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url('${backgroundImage}')`,
                minHeight: minHeight
            }}
        >
            <div className="text-center text-white px-5 py-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HeroBanner; 