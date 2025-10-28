'use client';

import { useSpring, animated, useTrail } from '@react-spring/web';
import { useEffect, useState, useRef } from 'react';

const placeholderProjects = [
  {
    title: 'Awesome Project 1',
    description: 'A cool project showcasing my skills in web development and modern frameworks. Built with passion and lots of coffee!',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Amazing Project 2',
    description: 'An innovative solution to a complex problem, featuring elegant design and efficient code architecture.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Fantastic Project 3',
    description: 'A full-stack application demonstrating proficiency in both frontend and backend technologies.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Vue.js'],
    liveLink: '#',
    githubLink: '#',
  },
];

export default function ProjectsSection() {
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

  const trail = useTrail(placeholderProjects.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.9)',
    config: { tension: 280, friction: 60 },
  });

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-soft-mint) 100%)',
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
          Featured Projects 🚀
        </animated.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => {
            const project = placeholderProjects[index];
            return (
              <animated.div
                key={index}
                style={style}
                className="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                css={{
                  backgroundColor: 'var(--color-cream)',
                  border: '2px solid var(--color-deep-mint)',
                }}
              >
                {/* Placeholder Image */}
                <div 
                  className="w-full h-48 rounded-lg mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--color-soft-mint)',
                  }}
                >
                  <span className="text-6xl">🎨</span>
                </div>

                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-charcoal)',
                  }}
                >
                  {project.title}
                </h3>

                <p 
                  className="text-base mb-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-charcoal)',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: 'var(--color-primary-mint)',
                        color: 'var(--color-charcoal)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    className="flex-1 py-2 px-4 rounded-lg text-center font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-deep-mint)',
                      color: 'white',
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 py-2 px-4 rounded-lg text-center font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-charcoal)',
                      color: 'white',
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </animated.div>
            );
          })}
        </div>

        {/* Coming Soon Note */}
        <div className="text-center mt-12">
          <p 
            className="text-lg italic"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-charcoal)',
            }}
          >
            More amazing projects coming soon! 🌟
          </p>
        </div>
      </div>
    </section>
  );
}

