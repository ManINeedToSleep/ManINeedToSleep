"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import IntroOverlay from "@/components/site/intro-scene";

const INTRO_STORAGE_KEY = "mint-intro-played";

interface IntroGateProps {
  children: ReactNode;
}

export default function IntroGate({ children }: IntroGateProps) {
  const [visit, setVisit] = useState<"checking" | "first" | "returning">(
    "checking",
  );
  const [introDone, setIntroDone] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storage = window.localStorage ?? window.sessionStorage;
    const hasSeen = storage.getItem(INTRO_STORAGE_KEY);
    if (hasSeen) {
      setVisit("returning");
      setIntroDone(true);
    } else {
      setVisit("first");
      setIntroDone(false);
    }
  }, []);

  const dialogue = useMemo(() => {
    if (visit === "returning") {
      return [
        "Oh? It’s you?!",
        "Back again already?",
        "You’re always welcome back here!",
        "Take your time and wander as you like…",
        "It’s good to see you again, friend.",
      ];
    }
    return [
      "Oh? A visitor?!",
      "I didn’t even hear you come in!",
      "Welcome! Feel free to take a look around."
    ];
  }, [visit]);

  const handleFinish = () => {
    if (typeof window !== "undefined") {
      const storage = window.localStorage ?? window.sessionStorage;
      storage.setItem(INTRO_STORAGE_KEY, "1");
    }
    setIntroDone(true);
  };

  const showIntro = visit !== "checking" && !introDone;

  return (
    <>
      {showIntro && (
        <IntroOverlay
          lines={dialogue}
          onFinish={handleFinish}
          gradientFrom="from-[#e6fff7]"
          gradientTo="to-white"
        />
      )}
      <div
        className={`transition-opacity duration-700 ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

