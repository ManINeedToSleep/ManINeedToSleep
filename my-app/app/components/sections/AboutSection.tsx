'use client';

import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
  });

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        backgroundColor: 'var(--color-cream)',
      }}
    >
      <animated.div style={fadeIn} className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-charcoal)',
          }}
        >
          About Me 🌟
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl"
              style={{
                border: '6px solid var(--color-deep-mint)',
              }}
            >
              <Image
                src="/images/BryanProfilePicture.png"
                alt="Bryan Gunawan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p 
              className="text-lg sm:text-xl mb-6 leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal)',
              }}
            >
              Hello~! My name is <strong>Bryan Gunawan</strong>, or known through my Github Username as{' '}
              <strong style={{ color: 'var(--color-deep-mint)' }}>ManINeedToSleep</strong>!
            </p>
            <p 
              className="text-lg sm:text-xl mb-6 leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal)',
              }}
            >
              I'm an Indonesian Programmer that has been coding since 2023! Well, more officially, that is! 
              I've made a lot of progress, keeping up with the latest tech, and now, I'm exploring the next 
              step of every programmer!
            </p>
            <p 
              className="text-lg sm:text-xl font-semibold"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-deep-mint)',
              }}
            >
              Linux... and Homelabs! 🐧🖥️
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div 
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: 'var(--color-soft-mint)',
                }}
              >
                <div className="text-3xl font-bold" style={{ color: 'var(--color-deep-mint)' }}>2+</div>
                <div className="text-sm" style={{ color: 'var(--color-charcoal)' }}>Years Coding</div>
              </div>
              <div 
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: 'var(--color-soft-mint)',
                }}
              >
                <div className="text-3xl font-bold" style={{ color: 'var(--color-deep-mint)' }}>∞</div>
                <div className="text-sm" style={{ color: 'var(--color-charcoal)' }}>Learning Mode</div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}

