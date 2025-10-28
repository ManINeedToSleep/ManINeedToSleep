'use client';

import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation for mobile menu
  const menuAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Navigation Header */}
      <nav 
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(255, 254, 247, 0.9)',
          borderBottom: '1px solid rgba(94, 215, 138, 0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-2xl font-bold transition-transform hover:scale-105"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-charcoal)',
            }}
          >
            Bryan <span style={{ color: 'var(--color-deep-mint)' }}>🌿</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-medium transition-all hover:scale-110"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-charcoal)',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-transform hover:scale-110"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--color-charcoal)' }}
            />
            <span 
              className={`w-6 h-0.5 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              style={{ backgroundColor: 'var(--color-charcoal)' }}
            />
            <span 
              className={`w-6 h-0.5 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--color-charcoal)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <animated.div
        style={{
          ...menuAnimation,
          backgroundColor: 'var(--color-cream)',
        }}
        className="fixed top-0 right-0 bottom-0 w-64 z-30 md:hidden shadow-2xl"
      >
        <div className="flex flex-col gap-2 px-6 py-24">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="py-3 px-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-charcoal)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-soft-mint)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </animated.div>
    </>
  );
}

