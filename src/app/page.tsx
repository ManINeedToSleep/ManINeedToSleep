"use client";

import Balatro from "@/components/themes/Balatro";
import { useState } from "react";
import CombinedText from "@/components/animation/Text/CombinedText";
import FuzzyButton from "@/components/animation/FuzzyButton";
import { useRouter } from 'next/navigation';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  const router = useRouter();
  const [stage, setStage] = useState<'confused' | 'welcoming' | 'enter'>('confused');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleGuestResponse = () => {
    if (stage === 'confused') {
      setStage('welcoming');
    } else if (stage === 'welcoming') {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push('/introduction');
      }, 1500); // Match this with the animation duration
    }
  };

  return (
    <main className={`relative w-full h-screen overflow-hidden ${isTransitioning ? 'zoom-transition' : ''}`}>
      {/* Background Animation */}
      <div className={`absolute inset-0 z-0 transition-transform duration-1500 ${isTransitioning ? 'scale-[10]' : ''}`}>
        <ErrorBoundary>
          <Balatro
            color1="#1a237e"
            color2="#000000"
            color3="#4a148c"
            isRotate={true}
            spinSpeed={3.0}
            contrast={4.0}
            lighting={0.5}
          />
        </ErrorBoundary>
      </div>

      {/* Content Overlay */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full text-white
        transition-all duration-1500 ${isTransitioning ? 'opacity-0 scale-50' : ''}`}>
        <div className="max-w-4xl px-6 text-center">
          {stage === 'confused' && (
            <>
              <CombinedText
                text="Hello...?"
                fontSize="4rem"
                baseIntensity={0.3}
                hoverIntensity={0.6}
                delay={0}
                className="mb-6 min-h-[4rem]"
              />
              <CombinedText
                text="Who are you..."
                fontSize="2rem"
                baseIntensity={0.2}
                hoverIntensity={0.4}
                delay={500}
                className="mb-8"
              />
              <FuzzyButton onClick={handleGuestResponse}>
                I am a guest
              </FuzzyButton>
            </>
          )}

          {stage === 'welcoming' && (
            <>
              <div className="mb-8">
                <CombinedText
                  text="Oh! Yes, I've been waiting for you..."
                  fontSize="4rem"
                  baseIntensity={0.2}
                  hoverIntensity={0.4}
                  delay={0}
                  className="mb-4"
                />
                <CombinedText
                  text="Most precious guest."
                  fontSize="2rem"
                  baseIntensity={0.15}
                  hoverIntensity={0.35}
                  delay={500}
                  className="mb-4"
                />
                <CombinedText
                  text="Welcome to my portfolio."
                  fontSize="3rem"
                  baseIntensity={0.25}
                  hoverIntensity={0.45}
                  delay={1000}
                />
              </div>
              <FuzzyButton onClick={handleGuestResponse}>
                Enter
              </FuzzyButton>
            </>
          )}

          {stage === 'enter' && (
            <div className="transition-opacity duration-500 opacity-0">
              <CombinedText
                text="Loading..."
                fontSize="2rem"
                baseIntensity={0.3}
                hoverIntensity={0.5}
                delay={30}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
