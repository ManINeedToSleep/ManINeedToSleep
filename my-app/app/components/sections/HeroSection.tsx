'use client';

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 280, friction: 60 },
  });

  const bounceIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 300, friction: 10 },
    delay: 300,
  });

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      style={{
        background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-soft-mint) 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <animated.div style={bounceIn}>
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-charcoal)',
            }}
          >
            Hey, I'm <span style={{ color: 'var(--color-deep-mint)' }}>Bryan</span>! 👋
          </h1>
        </animated.div>

        <animated.div style={fadeIn}>
          <p 
            className="text-xl sm:text-2xl md:text-3xl mb-8"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-charcoal)',
            }}
          >
            Indonesian programmer exploring the latest tech, Linux, and homelabs 🌿
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-110 active:scale-95 shadow-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                backgroundColor: 'var(--color-deep-mint)',
                color: 'white',
              }}
            >
              View My Work ✨
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-110 active:scale-95 shadow-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                backgroundColor: 'var(--color-accent-coral)',
                color: 'white',
              }}
            >
              Get In Touch 📬
            </a>
          </div>
        </animated.div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-4 opacity-30">
          {['🌿', '💚', '✨', '🚀'].map((emoji, i) => (
            <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

