import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    onComplete?: () => void;
    style?: React.CSSProperties;
}

const SplitText: React.FC<SplitTextProps> = ({
    text = '',
    className = '',
    delay = 50,
    textAlign = 'center',
    onComplete,
    style = {},
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                        onComplete?.();
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [onComplete]);

    const words = text.split(' ').map(word => word.split(''));

    return (
        <p
            ref={ref}
            className={`overflow-hidden inline ${className}`}
            style={{ textAlign, ...style }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((letter, letterIndex) => (
                        <span
                            key={letterIndex}
                            className="inline-block transition-all duration-300"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: `${(wordIndex * word.length + letterIndex) * delay}ms`
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                    <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
                </span>
            ))}
        </p>
    );
};

export default SplitText;