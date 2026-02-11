"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ChevronRight } from "lucide-react"
import Link from "next/link"

function TypewriterText({
  text,
  delay = 0,
}: {
  text: string
  delay?: number
}) {
  const [displayText, setDisplayText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-text-bottom ${
          displayText.length === text.length
            ? "animate-pulse"
            : "opacity-100"
        }`}
      />
    </span>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--gold)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] animate-drift" />
      <div
        className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/3 blur-[100px] animate-drift"
        style={{ animationDelay: "-4s" }}
      />

      {/* Corner decorative elements */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <div className="flex flex-col gap-1.5 opacity-30">
          <div className="h-px w-12 bg-primary" />
          <div className="h-px w-8 bg-primary" />
          <div className="h-px w-4 bg-primary" />
        </div>
      </div>
      <div className="absolute bottom-24 right-8 hidden lg:block">
        <div className="flex flex-col items-end gap-1.5 opacity-30">
          <div className="h-px w-4 bg-primary" />
          <div className="h-px w-8 bg-primary" />
          <div className="h-px w-12 bg-primary" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface-raised/50 px-4 py-1.5 mb-8 backdrop-blur-sm transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
          <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            Open to opportunities
          </span>
        </div>

        {/* Name - large display */}
        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-balance">Bryan</span>
          <br />
          <span className="text-primary glow-gold-text text-balance">Gunawan</span>
        </h1>

        {/* Subtitle with typewriter */}
        <div
          className={`mb-8 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-wide">
            {mounted && (
              <TypewriterText
                text="Building digital experiences with precision and soul."
                delay={800}
              />
            )}
          </p>
        </div>

        {/* Description */}
        <p
          className={`mx-auto max-w-xl text-base md:text-lg leading-relaxed text-secondary-foreground/80 mb-12 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A developer who crafts polished software and web experiences.
          Blending thoughtful design with robust engineering to create
          things that feel intentional.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 rounded-lg border border-border/50 bg-transparent px-6 py-3 font-display text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary glow-gold-border"
          >
            About Me
          </Link>
        </div>

        {/* Tech tags */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/30 bg-surface/50 px-3 py-1 font-mono text-[11px] tracking-wider text-muted-foreground uppercase"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-muted-foreground/30 animate-float" />
      </div>

      {/* Decorative panel lines */}
      <div className="absolute top-0 left-0 h-full w-px bg-border/20 ml-[10%] hidden lg:block" />
      <div className="absolute top-0 right-0 h-full w-px bg-border/20 mr-[10%] hidden lg:block" />
    </section>
  )
}
