"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Firebase", "PostgreSQL", "Prisma", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Vercel"] },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-32 px-6" ref={sectionRef}>
      {/* Background decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/3 blur-[150px]" />

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            About
          </span>
          <div
            className={`h-px bg-primary/30 transition-all duration-1000 ${
              isVisible ? "w-16" : "w-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column - Narrative */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              A developer who builds with{" "}
              <span className="text-primary">intention</span>.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-secondary-foreground/70">
              <p>
                I am a full-stack developer based in the United States with roots in
                Indonesia. Moving to America with my parents' support shaped my work
                ethic and focus on building a stable future through meaningful software.
              </p>
              <p>
                I specialize in full-stack development with a strong focus on frontend
                architecture, state management, and user-centered systems. My goal is
                to build products that are reliable, fast, and clear to use.
              </p>
              <p>
                I work with modern stacks including Next.js, React, TypeScript, Tailwind
                CSS, Firebase, PostgreSQL, and Prisma, building dashboards, interactive
                systems, and AI-assisted tools.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 mt-8">
              <div className="h-px flex-1 bg-border/30" />
              <div className="h-1 w-1 rounded-full bg-primary/40" />
              <div className="h-px w-8 bg-primary/40" />
              <div className="h-1 w-1 rounded-full bg-primary/40" />
              <div className="h-px flex-1 bg-border/30" />
            </div>
          </div>

          {/* Right column - Skills */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-lg border border-border/30 bg-card p-6 glow-gold-border">
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-6">
                Tech Stack
              </h3>

              <div className="space-y-6">
                {skills.map((group, i) => (
                  <div key={group.category}>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {group.category}
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-sm border border-border/30 bg-surface-raised/50 px-2.5 py-1 font-mono text-[11px] tracking-wider text-secondary-foreground/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {i < skills.length - 1 && (
                      <div className="mt-4 h-px bg-border/20" />
                    )}
                  </div>
                ))}
              </div>

              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 h-3 w-px bg-primary/30" />
              <div className="absolute top-0 left-0 h-px w-3 bg-primary/30" />
              <div className="absolute bottom-0 right-0 h-3 w-px bg-primary/30" />
              <div className="absolute bottom-0 right-0 h-px w-3 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
