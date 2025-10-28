'use client';

import { useSpring, animated, useTrail } from '@react-spring/web';
import { useEffect, useState, useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Spring'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'FastAPI'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Linux', 'VS Code'],
  },
  {
    title: 'Currently Exploring',
    skills: ['Homelabs', 'System Administration', 'DevOps', 'Cloud Services'],
  },
];

export default function SkillsSection() {
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

  const trail = useTrail(skillCategories.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
  });

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        backgroundColor: 'var(--color-cream)',
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <animated.h2 
          style={titleAnimation}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
          css={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-charcoal)',
          }}
        >
          Skills & Technologies 💻
        </animated.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {trail.map((style, index) => {
            const category = skillCategories[index];
            return (
              <animated.div
                key={index}
                style={style}
                className="rounded-2xl p-8"
                css={{
                  backgroundColor: 'var(--color-soft-mint)',
                  border: '2px solid var(--color-deep-mint)',
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-deep-mint)',
                  }}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full font-medium transition-all hover:scale-110 cursor-default shadow-sm"
                      style={{
                        backgroundColor: 'var(--color-cream)',
                        color: 'var(--color-charcoal)',
                        border: '2px solid var(--color-primary-mint)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </animated.div>
            );
          })}
        </div>

        {/* Education Section */}
        <animated.div 
          style={titleAnimation}
          className="mt-16 text-center"
        >
          <h3 
            className="text-3xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-charcoal)',
            }}
          >
            Education 📚
          </h3>
          <div 
            className="inline-block rounded-2xl p-8"
            style={{
              backgroundColor: 'var(--color-soft-mint)',
              border: '2px solid var(--color-deep-mint)',
            }}
          >
            <p 
              className="text-xl font-semibold mb-2"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal)',
              }}
            >
              Self-Taught Developer 🌱
            </p>
            <p 
              className="text-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal)',
              }}
            >
              Officially coding since 2023 • Continuously learning & growing
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
}

