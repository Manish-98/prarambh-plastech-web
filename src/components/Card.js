import Image from 'next/image';

export default function Card({ 
  image, 
  title, 
  subtitle, 
  description,
  imageAlt,
  imageWidth = 300,
  imageHeight = 200,
  className = ""
}) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${className}`}
    >
      {image && (
        <div className="w-full h-48 bg-soft flex items-center justify-center p-6">
          <div className={`relative w-full h-full bg-soft`}>
            <Image
              src={image}
              alt={imageAlt || `${title} image`}
              width={imageWidth}
              height={imageHeight}
              className={`object-contain w-full h-full mix-blend-multiply`}
            />
          </div>
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-lg font-semibold text-foreground-dark mb-2">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-sm text-foreground font-medium tracking-wide mb-2">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-foreground text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
} 