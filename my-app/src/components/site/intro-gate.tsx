"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import IntroOverlay from "@/components/site/intro-scene";

const INTRO_STORAGE_KEY = "mint-intro-played"; // legacy flag
const INTRO_LAST_SEEN_COOKIE = "mint-last-seen"; // timestamp (ms)
const INTRO_THEME_KEY = "mint-intro-theme"; // remember theme at start

interface IntroGateProps {
  children: ReactNode;
}

export default function IntroGate({ children }: IntroGateProps) {
  const [visit, setVisit] = useState<"checking" | "first" | "returning">(
    "checking",
  );
  const [introDone, setIntroDone] = useState<boolean>(false);

  // Simple cookie helpers (no external deps)
  const readCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  };
  const writeCookie = (name: string, value: string, maxAgeDays = 365) => {
    if (typeof document === "undefined") return;
    const maxAge = maxAgeDays * 24 * 60 * 60;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; sameSite=lax`;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storage = window.localStorage ?? window.sessionStorage;
    const now = Date.now();
    const DAY = 24 * 60 * 60 * 1000;

    // Prefer cookie timestamp; fall back to legacy flag in storage
    const cookieVal = readCookie(INTRO_LAST_SEEN_COOKIE);
    const lastSeen = cookieVal ? Number(cookieVal) : null;
    const legacySeen = storage.getItem(INTRO_STORAGE_KEY);

    if (!lastSeen && !legacySeen) {
      // First-time visitor → play first-time dialogue
      setVisit("first");
      setIntroDone(false);
      return;
    }

    // Returning visitor
    setVisit("returning");
    const shouldReplay = !lastSeen ? true : now - lastSeen > DAY;
    setIntroDone(!shouldReplay); // If >24h (or no timestamp), replay returning intro; else skip
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
      "Welcome! Feel free to take a look around.",
      "I hope you find something interesting."
    ];
  }, [visit]);

  const handleFinish = () => {
    if (typeof window !== "undefined") {
      const storage = window.localStorage ?? window.sessionStorage;
      // Mark as seen (legacy flag) and write last-seen timestamp cookie
      storage.setItem(INTRO_STORAGE_KEY, "1");
      writeCookie(INTRO_LAST_SEEN_COOKIE, String(Date.now()));
      const currentTheme =
        document.documentElement.dataset.theme ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
      writeCookie(INTRO_THEME_KEY, currentTheme);
    }
    setIntroDone(true);
  };

  const showIntro = visit !== "checking" && !introDone;

  const themePrefix =
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

  return (
    <>
      {showIntro && (
        <IntroOverlay
          lines={dialogue}
          onFinish={handleFinish}
          gradientFrom={
            themePrefix === "dark" ? "from-[#1a3834]" : "from-[#e6fff7]"
          }
          gradientTo={
            themePrefix === "dark" ? "to-[#0f1f1d]" : "to-white"
          }
          showBall={themePrefix !== "dark"}
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

