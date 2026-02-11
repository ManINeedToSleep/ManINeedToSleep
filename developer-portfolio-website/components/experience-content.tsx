"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface Experience {
  period: string
  role: string
  company: string
  companyUrl?: string
  description: string
  achievements: string[]
  tech: string[]
  type: "work" | "education"
}

const experiences: Experience[] = [
  {
    period: "Sep 2023 -- Present",
    role: "Full-Stack Engineer & Technical Consultant",
    company: "Launchpad Philly",
    companyUrl: "https://www.launchpadphilly.com/",
    description:
      "Building and maintaining scalable web applications across frontend and backend systems. I contribute to architecture, ship production features, and collaborate with teams to deliver reliable, user-centered products.",
    achievements: [
      "Implemented authentication flows, real-time features, and backend integrations",
      "Built reusable UI components and frontend architecture for long-term scale",
      "Partnered with product and engineering teams to guide technical decisions",
      "Delivered production-ready features for client-facing applications",
    ],
    tech: ["React", "Next.js", "TypeScript", "Firebase", "PostgreSQL"],
    type: "work",
  },
  {
    period: "Jul 2024 -- Aug 2024",
    role: "Software Engineering Intern",
    company: "Bentley Systems",
    companyUrl: "https://www.bentley.com/",
    description:
      "Worked on the Data Interactive Element Selector (D.I.E.S.), an internal tool for interacting with complex data elements. Built React and TypeScript components that supported selection, highlighting, and data manipulation with a focus on clarity and performance.",
    achievements: [
      "Built interactive UI components for selecting and highlighting data elements",
      "Improved feedback and usability for complex, data-heavy interfaces",
      "Prioritized performance and clarity within a large engineering environment",
    ],
    tech: ["React", "TypeScript", "UI Engineering", "Performance"],
    type: "work",
  },
]

function useScrollReveal(threshold = 0.1) {
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

function ExperienceCard({
  experience,
  index,
  isVisible,
}: {
  experience: Experience
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      {/* Left - Timeline info */}
      <div className="relative">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {experience.period}
        </span>
        <div className="mt-1.5">
          <span
            className={`inline-block rounded-sm px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase ${
              experience.type === "work"
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-surface-raised text-muted-foreground border border-border/30"
            }`}
          >
            {experience.type === "work" ? "Professional" : "Education"}
          </span>
        </div>
        {/* Timeline dot */}
        <div className="absolute -left-[25px] top-1.5 hidden md:block">
          <div className="h-2.5 w-2.5 rounded-full border-2 border-primary/40 bg-background transition-all duration-300 group-hover:bg-primary/60 group-hover:border-primary group-hover:shadow-[0_0_8px_hsl(40_55%_55%/0.4)]" />
        </div>
      </div>

      {/* Right - Content */}
      <div className="pb-12 rounded-lg border border-border/30 bg-card p-6 transition-all duration-300 hover:border-primary/20 glow-gold-border">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {experience.role}
            </h3>
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {experience.company}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">
                {experience.company}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-5">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mb-5">
          <span className="font-mono text-[10px] tracking-wider text-primary/60 uppercase block mb-2">
            Key Achievements
          </span>
          <ul className="space-y-2">
            {experience.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2.5">
                <span className="mt-2 h-1 w-1 rounded-full bg-primary/50 flex-shrink-0" />
                <span className="text-sm leading-relaxed text-secondary-foreground/70">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border/30 bg-surface-raised/50 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase transition-colors group-hover:border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceContent() {
  const timeline = useScrollReveal()

  return (
    <div className="px-6 pb-32">
      <div className="mx-auto max-w-5xl">
        {/* Timeline */}
        <div ref={timeline.ref} className="relative md:ml-6">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20 hidden md:block -ml-[22px]" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.period}
                experience={exp}
                index={i}
                isVisible={timeline.isVisible}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground max-w-md">
            Interested in working together? I am always open to discussing new opportunities.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
