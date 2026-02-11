"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "D3.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Vercel", "AWS", "CI/CD", "Git"],
  },
  {
    category: "Design",
    items: ["Figma", "Design Systems", "UI/UX", "Prototyping"],
  },
]

const values = [
  {
    title: "Craft over speed",
    description:
      "I believe in taking the time to build things right. Clean architecture, thoughtful naming, and well-tested code compound over time.",
  },
  {
    title: "Design is engineering",
    description:
      "Great interfaces are not decoration -- they are systems. I approach visual design with the same rigor I bring to backend architecture.",
  },
  {
    title: "Accessibility first",
    description:
      "Building for everyone is not optional. Semantic HTML, proper ARIA attributes, and keyboard navigation are part of every project.",
  },
  {
    title: "Continuous learning",
    description:
      "The best engineers stay curious. I regularly explore new tools, contribute to open source, and share what I learn.",
  },
]

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function AboutContent() {
  const narrative = useScrollReveal()
  const skillsSection = useScrollReveal()
  const valuesSection = useScrollReveal()
  const inspirations = useScrollReveal()

  return (
    <div className="px-6 pb-32">
      <div className="mx-auto max-w-5xl">
        {/* Deep narrative */}
        <div
          ref={narrative.ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24 transition-all duration-700 ${
            narrative.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-3 space-y-6 text-base leading-relaxed text-secondary-foreground/70">
            <p>
              I am a developer who sees software as a medium for creative expression.
              Not in a loose, unstructured way -- but in the way a well-designed interface
              can communicate care, or a clean API can make another developer smile.
            </p>
            <p>
              My path into development started with curiosity about how the things I loved
              were built. Anime interfaces that felt alive. Game menus that rewarded
              exploration. Websites that made you slow down and notice the details. I wanted
              to build things that created those same moments of recognition.
            </p>
            <p>
              Today, my work sits at the intersection of engineering and design. I build
              full-stack applications with a focus on frontend craft -- performance-conscious,
              accessible, and visually intentional. I care deeply about the developer experience
              of the code I write and the user experience of the products I ship.
            </p>
            <p>
              When I am not writing code, I am probably studying game UI design patterns,
              exploring new animation techniques, or thinking about how to make documentation
              less painful.
            </p>
          </div>

          {/* Quick facts sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border/30 bg-card p-6 glow-gold-border">
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Location", value: "Available Worldwide" },
                  { label: "Focus", value: "Full-Stack / Frontend" },
                  { label: "Experience", value: "5+ Years" },
                  { label: "Education", value: "Computer Science" },
                  { label: "Status", value: "Open to Opportunities" },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase whitespace-nowrap">
                      {fact.label}
                    </span>
                    <span className="text-sm text-foreground text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack - full */}
        <div ref={skillsSection.ref} className="mb-24">
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              skillsSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Tech Stack
            </h2>
            <div
              className={`h-px bg-primary/30 transition-all duration-1000 ${
                skillsSection.isVisible ? "w-16" : "w-0"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <div
                key={group.category}
                className={`rounded-lg border border-border/30 bg-card p-5 transition-all duration-700 hover:border-primary/20 ${
                  skillsSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase block mb-3">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-border/30 bg-surface-raised/50 px-2.5 py-1 font-mono text-[11px] tracking-wider text-secondary-foreground/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div ref={valuesSection.ref} className="mb-24">
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              valuesSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Principles
            </h2>
            <div
              className={`h-px bg-primary/30 transition-all duration-1000 ${
                valuesSection.isVisible ? "w-16" : "w-0"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`group rounded-lg border border-border/30 bg-card p-6 transition-all duration-700 hover:border-primary/20 ${
                  valuesSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <h3 className="font-display text-base font-semibold text-foreground mb-2 transition-colors group-hover:text-primary">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirations */}
        <div ref={inspirations.ref}>
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              inspirations.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Inspirations
            </h2>
            <div
              className={`h-px bg-primary/30 transition-all duration-1000 ${
                inspirations.isVisible ? "w-16" : "w-0"
              }`}
            />
          </div>
          {/* CTA to contact */}
          <div className="mt-12 flex items-center justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-border/50 bg-transparent px-6 py-3 font-display text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary glow-gold-border"
            >
              {"Let's work together"}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
