import React from 'react';

interface FuzzyButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const FuzzyButton: React.FC<FuzzyButtonProps> = ({
    onClick,
    children,
    className = ""
}) => {
    return (
        <button 
            onClick={onClick}
            className={`
                px-8 py-3 
                text-lg font-semibold 
                transition-all duration-300 
                border-2 border-white rounded-full 
                hover:bg-white hover:text-black
                animate-float
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default FuzzyButton; 