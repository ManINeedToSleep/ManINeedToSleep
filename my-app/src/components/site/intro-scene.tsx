"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/** Types **/
interface TypingWaveProps {
  text: string;
  delay?: number; // seconds before the first letter animates
  waveGap?: number; // seconds between each letter's start time
  onDone?: () => void; // called when the line has fully animated
}

interface DialogueSequenceProps {
  lines: string[];
  waveGap?: number;
  onComplete?: () => void; // called after the last line finishes
}

interface IntroOverlayProps {
  lines?: string[];
  showBall?: boolean;
  gradientFrom?: string; // Tailwind class for gradient start
  gradientTo?: string;   // Tailwind class for gradient end
  forceAnimations?: boolean;        // ignore prefers-reduced-motion
  respectReducedMotion?: boolean;   // honor prefers-reduced-motion (default true)
  enterDuration?: number;           // overlay fade-in duration
  exitDuration?: number;            // overlay fade-out duration
  waveGap?: number;                 // seconds between letter animations
  onFinish?: () => void;            // called after overlay fade-out completes
}

/**
 * TypingWave: per‑letter bounce with left‑to‑right stagger.
 */
function TypingWave({ text, delay = 0, waveGap = 0.06, onDone }: TypingWaveProps): React.ReactElement {
  const shouldReduceMotion: boolean = !!useReducedMotion();
  const letters = useMemo(() => Array.from(text), [text]);

  // crude timing to know when the line is done
  useEffect(() => {
    const settle = 0.6; // seconds
    const total = delay + letters.length * waveGap + settle;
    const t = setTimeout(() => onDone && onDone(), total * 1000);
    return () => clearTimeout(t);
  }, [delay, letters.length, waveGap, onDone]);

  return (
    <span aria-label={text} role="text" className="inline-flex">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: ch === " " ? "pre" : "normal" } as React.CSSProperties}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -18, scale: 0.92 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [0, -12, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            delay: delay + i * waveGap,
            duration: 0.6,
            ease: "easeOut",
            type: "tween",
          }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * DialogueSequence: shows lines one after another and calls onComplete() at the end.
 */
function DialogueSequence({ lines, waveGap = 0.06, onComplete }: DialogueSequenceProps): React.ReactElement {
  const [index, setIndex] = useState<number>(0);

  // Reset when the lines prop changes
  useEffect(() => {
    setIndex(0);
  }, [lines.join(" ")]);

  return (
    <div className="relative z-10">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-5xl font-bold text-[#22c7b6] drop-shadow-sm leading-tight tracking-tight text-center"
        >
          <TypingWave
            text={lines[index]}
            waveGap={waveGap}
            onDone={() => {
              if (index < lines.length - 1) setIndex((i) => i + 1);
              else onComplete && onComplete();
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * IntroOverlay
 * A copy‑paste friendly intro scene for portfolios/landing pages.
 */
export default function IntroOverlay({
  lines = ["Oh? Hey there!", "Welcome to my portfolio — take a look around!"],
  showBall = true,
  gradientFrom = "from-[#e6fff7]",
  gradientTo = "to-white",
  forceAnimations = false,
  respectReducedMotion = true,
  enterDuration = 0.0,
  exitDuration = 0.6,
  waveGap = 0.06,
  onFinish,
}: IntroOverlayProps): React.ReactElement {
  const prefersReduced: boolean = !!useReducedMotion();
  const allowMotion: boolean = forceAnimations || !(respectReducedMotion && prefersReduced);

  // local phases: 'intro' (dialogue playing) -> 'fading' (overlay fades out) -> done
  const [phase, setPhase] = useState<"intro" | "fading" | "done">(allowMotion ? "intro" : "fading");

  // Skip straight to fade if motion is disabled after mount
  useEffect(() => {
    if (!allowMotion) setPhase("fading");
  }, [allowMotion]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="intro-overlay"
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b ${gradientFrom} ${gradientTo}`}
          initial={{ opacity: enterDuration ? 0 : 1 }}
          animate={{ opacity: phase === "fading" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "fading" ? exitDuration : enterDuration, ease: "easeInOut" }}
          onAnimationComplete={() => {
            // When fade‑out completes, notify parent and mark done so AnimatePresence unmounts
            if (phase === "fading") {
              onFinish && onFinish();
              setPhase("done");
            }
          }}
          role="dialog"
          aria-label="Intro overlay"
        >
          <DialogueSequence lines={lines} waveGap={waveGap} onComplete={() => setPhase("fading")} />

          {showBall && (
            <motion.div
              className="w-16 h-16 mt-8 rounded-full bg-[#2ed7c4]"
              animate={allowMotion ? { scale: [1, 1.08], y: [0, -6] } : {}}
              transition={
                allowMotion
                  ? {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 2,
                      ease: "easeInOut",
                      type: "tween",
                    }
                  : {}
              }
              aria-hidden
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** OPTIONAL: Quick demo harness (safe to delete in production) **/
export function IntroOverlayDemo(): React.ReactElement {
  const [done, setDone] = useState<boolean>(false);
  return (
    <div className="relative min-h-screen bg-white">
      {!done && (
        <IntroOverlay onFinish={() => setDone(true)} />
      )}
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-2xl font-bold">Main Page Content</h2>
        <p className="text-gray-600 mt-2">This is where your actual app goes. The intro fades out, then this becomes visible.</p>
      </div>
    </div>
  );
}
