import React from 'react';
import Image from 'next/image';

const GridImage = ({ src, alt }) => (
    <div className="rounded-lg overflow-hidden shadow-lg relative">
        <Image
            src={src}
            alt={alt}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
            quality={80}
            placeholder="blur"
            blurDataURL="/placeholder.svg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
        />
        <div className="absolute inset-0 bg-accent opacity-20"></div>
    </div>
);

export default GridImage;