import React, { useEffect, useState } from 'react';
import FuzzyText from './FuzzyText';

interface CombinedTextProps {
    text: string;
    fontSize?: string;
    baseIntensity?: number;
    hoverIntensity?: number;
    className?: string;
    delay?: number;
    textShadow?: string;
}

const CombinedText: React.FC<CombinedTextProps> = ({
    text,
    fontSize = "2rem",
    baseIntensity = 0.2,
    hoverIntensity = 0.4,
    className = "",
    delay = 0,
    textShadow = "0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3), 0 0 30px rgba(0,0,0,0.2)"
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div 
            className={`transition-opacity duration-500 flex justify-center items-center ${className}`} 
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <FuzzyText
                fontSize={fontSize}
                baseIntensity={baseIntensity}
                hoverIntensity={hoverIntensity}
                color="#ffffff"
                fontWeight={700}
                textShadow={textShadow}
            >
                {text}
            </FuzzyText>
        </div>
    );
};

export default CombinedText; 