import { useEffect, useRef, useState } from "react";
import Balatro from "./Balatro";

interface ColorSet {
  color1: string;
  color2: string;
  color3: string;
}

interface TransitionBackgroundProps {
  initialColors: ColorSet;
  finalColors: ColorSet;
  isVisible: boolean;
  duration?: number;
  delay?: number;
  children?: React.ReactNode;
}

function interpolateColor(start: string, end: string, progress: number) {
  const r1 = parseInt(start.slice(1, 3), 16);
  const g1 = parseInt(start.slice(3, 5), 16);
  const b1 = parseInt(start.slice(5, 7), 16);
  
  const r2 = parseInt(end.slice(1, 3), 16);
  const g2 = parseInt(end.slice(3, 5), 16);
  const b2 = parseInt(end.slice(5, 7), 16);
  
  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

const TransitionBackground: React.FC<TransitionBackgroundProps> = ({
  initialColors,
  finalColors,
  isVisible,
  duration = 2000,
  delay = 100,
  children
}) => {
  const [colors, setColors] = useState(initialColors);
  const animationRef = useRef<number>(0);
  const startTime = useRef<number>(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      setTimeout(() => {
        startTime.current = Date.now();
        hasAnimated.current = true;

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime.current) / duration, 1);

          setColors({
            color1: interpolateColor(initialColors.color1, finalColors.color1, progress),
            color2: interpolateColor(initialColors.color2, finalColors.color2, progress),
            color3: interpolateColor(initialColors.color3, finalColors.color3, progress),
          });

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };

        animationRef.current = requestAnimationFrame(animate);
      }, delay);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, initialColors, finalColors, duration, delay]);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Animation */}
      <div className={`absolute inset-0 z-0 transition-all duration-1500
        ${!isVisible ? 'scale-[10]' : 'scale-100'}`}>
        <Balatro
          color1={colors.color1}
          color2={colors.color2}
          color3={colors.color3}
          isRotate={true}
          spinSpeed={3.0}
          contrast={4.0}
          lighting={0.5}
        />
      </div>

      {/* Content Overlay */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full text-white
        transition-all duration-1500 ${!isVisible ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
        {children}
      </div>
    </main>
  );
};

export default TransitionBackground; 