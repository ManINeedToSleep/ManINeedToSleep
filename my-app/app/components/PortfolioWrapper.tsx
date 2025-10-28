'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

interface PortfolioWrapperProps {
  children: React.ReactNode;
}

export default function PortfolioWrapper({ children }: PortfolioWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBryanPortfolio');
    
    if (hasVisited === 'true') {
      // Returning visitor - skip splash screen
      setIsFirstVisit(false);
      setShowSplash(false);
    } else {
      // First-time visitor - show splash screen
      setIsFirstVisit(true);
    }
    
    setIsLoaded(true);
  }, []);

  const handleSplashComplete = () => {
    // Mark as visited
    localStorage.setItem('hasVisitedBryanPortfolio', 'true');
    setShowSplash(false);
  };

  // Don't render anything until we've checked localStorage
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-cream)]">
        <div className="text-2xl font-bold text-[var(--color-charcoal)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      {showSplash && isFirstVisit && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      {children}
    </>
  );
}

