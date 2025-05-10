import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const Avatar = ({ src, alt, size = 150, className = '' }: AvatarProps) => {
  return (
    <div className={`relative rounded-profile border-4 border-fubuki-white shadow-lg ${className}`} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-profile object-cover"
        sizes={`${size}px`}
        priority
      />
    </div>
  );
};

export default Avatar; 