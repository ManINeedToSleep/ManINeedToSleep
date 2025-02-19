"use client";

import { useEffect, useState, useRef } from "react";
import TransitionBackground from "@/components/themes/TransitionBackground";
import CombinedText from "@/components/animation/Text/CombinedText";
import MainContent from '@/components/content/MainContent';

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [headerMoved, setHeaderMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setHeaderMoved(true);
        setTimeout(() => {
          setShowContent(true);
        }, 1000);
      }, 4000);
    }, 100);

    // Handle scroll
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        if (scrollPosition > 100 && !headerMoved) { // Trigger after 100px scroll
          setHeaderMoved(true);
          setTimeout(() => {
            setShowContent(true);
          }, 1000);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [headerMoved]);

  return (
    <TransitionBackground
      initialColors={{
        color1: "#1a237e",
        color2: "#000000",
        color3: "#4a148c"
      }}
      finalColors={{
        color1: "#000000",
        color2: "#ffffff",
        color3: "#000000"
      }}
      isVisible={isVisible}
    >
      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-auto scrollbar-none"
      >
        {/* Welcome Text Container */}
        <div 
          className={`transition-all duration-1000 ease-in-out w-full min-h-screen
            flex items-center justify-center
            ${headerMoved ? 'opacity-0' : 'opacity-100'}`}
        >
          <CombinedText
            text="Welcome to my world..."
            fontSize="4rem"
            baseIntensity={0.3}
            hoverIntensity={0.6}
            delay={1500}
            className="mb-6"
            textShadow="0 0 15px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4), 0 0 45px rgba(0,0,0,0.2)"
          />
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 ease-in-out mt-[-100vh]
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <MainContent isVisible={showContent} />
        </div>
      </div>
    </TransitionBackground>
  );
}