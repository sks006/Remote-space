import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14'
  };

  return (
    <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200`}>
      <img 
        src={src} 
        alt={alt} 
        className="object-cover w-full h-full"
        onError={(e) => {
          // Fallback for broken images
          const target = e.target as HTMLImageElement;
          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=random`;
        }}
      />
    </div>
  );
};

export default Avatar;