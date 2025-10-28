'use client';

import { useSpring, animated, useTrail } from '@react-spring/web';
import { useEffect, useState, useRef } from 'react';

const experiences = [
  {
    title: 'Self-Learning Journey',
    organization: 'Independent Study',
    period: '2023 - Present',
    description: 'Diving deep into modern web development, exploring various technologies and building projects to solidify my skills.',
    highlights: ['Built multiple full-stack projects', 'Learned React ecosystem', 'Explored backend technologies'],
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub Community',
    period: '2023 - Present',
    description: 'Contributing to open source projects and sharing knowledge with the developer community.',
    highlights: ['Active on GitHub', 'Learning from real-world codebases', 'Collaborating with developers worldwide'],
  },
];

export default function ExperienceSection() {
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

  const titleAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
  });

  const trail = useTrail(experiences.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-50px)',
    config: { tension: 280, friction: 60 },
  });

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        background: 'linear-gradient(180deg, var(--color-soft-mint) 0%, var(--color-cream) 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <animated.h2 
          style={titleAnimation}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
          css={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-charcoal)',
          }}
        >
          Experience 🎯
        </animated.h2>

        <div className="space-y-8">
          {trail.map((style, index) => {
            const exp = experiences[index];
            return (
              <animated.div
                key={index}
                style={style}
                className="rounded-2xl p-8 relative"
                css={{
                  backgroundColor: 'var(--color-cream)',
                  border: '3px solid var(--color-deep-mint)',
                }}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute -left-4 top-8 w-8 h-8 rounded-full border-4"
                  style={{
                    backgroundColor: 'var(--color-primary-mint)',
                    borderColor: 'var(--color-deep-mint)',
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-charcoal)',
                    }}
                  >
                    {exp.title}
                  </h3>
                  <span 
                    className="text-sm font-medium px-3 py-1 rounded-full inline-block mt-2 sm:mt-0"
                    style={{
                      backgroundColor: 'var(--color-soft-mint)',
                      color: 'var(--color-deep-mint)',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p 
                  className="text-lg font-medium mb-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-deep-mint)',
                  }}
                >
                  {exp.organization}
                </p>

                <p 
                  className="text-base mb-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-charcoal)',
                  }}
                >
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--color-charcoal)',
                      }}
                    >
                      <span style={{ color: 'var(--color-deep-mint)' }}>▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

