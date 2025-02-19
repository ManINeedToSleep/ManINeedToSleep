"use client";

import Balatro from "@/components/animation/Balatro";
import CombinedText from "@/components/animation/CombinedText";
import { useState } from "react";

export default function Home() {
  const [stage, setStage] = useState<'confused' | 'welcoming' | 'enter'>('confused');

  const handleGuestResponse = () => {
    if (stage === 'confused') {
      setStage('welcoming');
    } else if (stage === 'welcoming') {
      setStage('enter');
    }
  };

  return (
    <main className="relative w-full h-screen">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Balatro
          color1="#1a237e"
          color2="#000000"
          color3="#4a148c"
          isRotate={true}
          spinSpeed={3.0}
          contrast={4.0}
          lighting={0.5}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <div className="max-w-4xl px-6 text-center">
          {stage === 'confused' && (
            <>
              <CombinedText
                text="Hello...?"
                fontSize="4rem"
                baseIntensity={0.3}
                hoverIntensity={0.6}
                decryptSpeed={70}
                className="mb-6"
              />
              <CombinedText
                text="Who are you..."
                fontSize="2rem"
                baseIntensity={0.2}
                hoverIntensity={0.4}
                decryptSpeed={50}
                className="mb-8"
              />
              <button 
                onClick={handleGuestResponse}
                className="px-8 py-3 text-lg font-semibold transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black"
              >
                I am a guest
              </button>
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
                  decryptSpeed={50}
                  className="mb-4"
                />
                <CombinedText
                  text="Most precious guest."
                  fontSize="2rem"
                  baseIntensity={0.15}
                  hoverIntensity={0.35}
                  decryptSpeed={40}
                  className="mb-4"
                />
                <CombinedText
                  text="Welcome to my portfolio."
                  fontSize="3rem"
                  baseIntensity={0.25}
                  hoverIntensity={0.45}
                  decryptSpeed={60}
                />
              </div>
              <button 
                onClick={handleGuestResponse}
                className="px-8 py-3 text-lg font-semibold transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black animate-pulse"
              >
                Enter
              </button>
            </>
          )}

          {stage === 'enter' && (
            <div className="transition-opacity duration-500 opacity-0">
              <CombinedText
                text="Loading..."
                fontSize="2rem"
                baseIntensity={0.3}
                hoverIntensity={0.5}
                decryptSpeed={30}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
