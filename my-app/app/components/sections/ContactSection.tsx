'use client';

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState, useRef } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ManINeedToSleep',
      icon: '💻',
      color: 'var(--color-charcoal)',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bryan-gunawan-a537132b9/',
      icon: '👔',
      color: 'var(--color-deep-mint)',
    },
    {
      name: 'Email',
      url: 'mailto:bryanwillsonbwg@gmail.com',
      icon: '📧',
      color: 'var(--color-accent-coral)',
    },
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        backgroundColor: 'var(--color-cream)',
      }}
    >
      <animated.div style={fadeIn} className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-charcoal)',
          }}
        >
          Let's Connect! 🌿
        </h2>

        <p 
          className="text-xl sm:text-2xl mb-12"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-charcoal)',
          }}
        >
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech!
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-6 rounded-2xl transition-all hover:scale-110 hover:-translate-y-2 shadow-lg"
              style={{
                backgroundColor: 'var(--color-soft-mint)',
                border: `2px solid ${link.color}`,
                minWidth: '150px',
              }}
            >
              <span className="text-5xl">{link.icon}</span>
              <span 
                className="font-semibold"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-charcoal)',
                }}
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Direct Email */}
        <div 
          className="inline-block rounded-2xl p-8"
          style={{
            backgroundColor: 'var(--color-soft-mint)',
            border: '2px solid var(--color-deep-mint)',
          }}
        >
          <p 
            className="text-lg mb-2"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-charcoal)',
            }}
          >
            Prefer email? Reach me at:
          </p>
          <a
            href="mailto:bryanwillsonbwg@gmail.com"
            className="text-xl font-semibold hover:underline"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-deep-mint)',
            }}
          >
            bryanwillsonbwg@gmail.com
          </a>
        </div>

        {/* Fun CTA */}
        <p 
          className="mt-12 text-lg italic"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-charcoal)',
          }}
        >
          Thanks for stopping by my minty corner of the web! 🌿✨
        </p>
      </animated.div>
    </section>
  );
}

