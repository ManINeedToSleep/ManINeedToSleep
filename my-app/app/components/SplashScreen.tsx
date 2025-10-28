'use client';

import { useEffect, useState, useRef } from 'react';
import { useTrail, animated, useSpring } from '@react-spring/web';
import { SoundEffects } from '../utils/soundEffects';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isSkipped, setIsSkipped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const soundEffectsRef = useRef<SoundEffects | null>(null);
  const hasPlayedSoundsRef = useRef<boolean[]>([false, false, false, false]);
  
  // Welcome phrases that pop in one by one!
  const phrases = [
    "Hey, Stranger! 👋",
    "Never seen you around here before!",
    "Welcome to my minty corner of the web~",
    "Let me show you around! 🌿"
  ];

  // Initialize sound effects
  useEffect(() => {
    soundEffectsRef.current = new SoundEffects();
  }, []);

  // Update mute state
  useEffect(() => {
    if (soundEffectsRef.current) {
      soundEffectsRef.current.setMuted(isMuted);
    }
  }, [isMuted]);

  // Track which sounds have been played
  const playSound = (index: number) => {
    if (!hasPlayedSoundsRef.current[index] && soundEffectsRef.current) {
      hasPlayedSoundsRef.current[index] = true;
      
      // Play different sounds for different phrases
      if (index === 0) {
        soundEffectsRef.current.playPop(800);
      } else if (index === phrases.length - 1) {
        soundEffectsRef.current.playWelcome();
      } else {
        soundEffectsRef.current.playBounce(1 + index * 0.2);
      }
    }
  };

  // Staggered animation for each phrase - bouncy and fun!
  const trail = useTrail(phrases.length, {
    from: { 
      opacity: 0, 
      transform: 'scale(0.3) translateY(20px)',
    },
    to: { 
      opacity: isSkipped ? 0 : 1, 
      transform: isSkipped ? 'scale(0.3) translateY(20px)' : 'scale(1) translateY(0px)',
    },
    config: { 
      tension: 300, 
      friction: 10,
      mass: 1,
    },
    delay: isSkipped ? 0 : undefined,
  });

  // Fade out the entire splash screen
  const fadeOut = useSpring({
    from: { opacity: 1 },
    to: { opacity: isSkipped ? 0 : 1 },
    config: { duration: 500 },
    onRest: () => {
      if (isSkipped) {
        onComplete();
      }
    }
  });

  // Auto-complete after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSkipped(true);
    }, 5500); // 5.5 seconds to let animations complete

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    if (soundEffectsRef.current) {
      soundEffectsRef.current.playClick();
    }
    setIsSkipped(true);
  };

  const toggleMute = () => {
    if (soundEffectsRef.current) {
      soundEffectsRef.current.playClick();
    }
    setIsMuted(!isMuted);
  };

  return (
    <animated.div 
      style={fadeOut}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Minty gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-soft-mint) 0%, var(--color-cream) 50%, var(--color-primary-mint) 100%)',
        }}
      />
      
      {/* Animated phrases container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
        {trail.map((style, index) => {
          // Play sound when opacity reaches 0.5
          const opacity = style.opacity.get();
          if (opacity > 0.5) {
            playSound(index);
          }

          return (
            <animated.div
              key={index}
              style={{
                ...style,
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-charcoal)',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              {phrases[index]}
            </animated.div>
          );
        })}
      </div>

      {/* Mute toggle - top right */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: 'var(--color-charcoal)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
        aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Skip button - bottom right */}
      <animated.button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          fontFamily: 'var(--font-sans)',
          backgroundColor: 'var(--color-accent-coral)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(255, 155, 155, 0.3)',
        }}
        aria-label="Skip intro"
      >
        Skip intro →
      </animated.button>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? 'var(--color-deep-mint)' : 'var(--color-primary-mint)',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
      `}</style>
    </animated.div>
  );
}

