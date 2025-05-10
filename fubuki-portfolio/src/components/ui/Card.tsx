import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-fubuki-white rounded-xl shadow-lg p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card; 