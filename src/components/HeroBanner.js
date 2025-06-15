import React from 'react';
import Image from 'next/image';

const HeroBanner = ({ 
    title, 
    description, 
    backgroundImage,
    minHeight = "400px"
}) => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden" style={{ minHeight }}>
            {/* Optimized background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Hero banner background"
                    fill
                    className="object-cover object-center"
                    quality={80}
                    priority={true}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg" 
                />
                {/* Overlay for darkening */}
                <div className="absolute inset-0 bg-foreground/80" />
            </div>
            <div className="relative z-10 text-center text-white px-5 py-20 w-full">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">{description}</p>
            </div>
        </div>
    );
};

export default HeroBanner; 