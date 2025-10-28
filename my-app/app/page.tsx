'use client';

import PortfolioWrapper from './components/PortfolioWrapper';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <PortfolioWrapper>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer 
        className="py-8 text-center"
        style={{
          backgroundColor: 'var(--color-charcoal)',
          color: 'var(--color-cream)',
        }}
      >
        <p style={{ fontFamily: 'var(--font-sans)' }}>
          © 2025 Bryan Gunawan • Made with 💚 and lots of mint
        </p>
        <p className="text-sm mt-2" style={{ fontFamily: 'var(--font-sans)', opacity: 0.7 }}>
          ManINeedToSleep 🌿
        </p>
      </footer>
    </PortfolioWrapper>
  );
}
