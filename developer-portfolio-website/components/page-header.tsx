"use client"

import { useEffect, useState } from "react"

interface PageHeaderProps {
  label: string
  title: string
  description: string
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative pt-32 pb-16 px-6">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative">
        {/* Label */}
        <div
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            {label}
          </span>
          <div
            className={`h-px bg-primary/30 transition-all duration-1000 delay-300 ${
              mounted ? "w-16" : "w-0"
            }`}
          />
        </div>

        {/* Title */}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className={`text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>

        {/* Decorative bottom line */}
        <div
          className={`mt-12 h-px bg-border/20 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  )
}
