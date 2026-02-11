"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

interface Experience {
  period: string
  role: string
  company: string
  companyUrl?: string
  description: string
  tech: string[]
}

const experiences: Experience[] = [
  {
    period: "2024 -- Present",
    role: "Senior Frontend Engineer",
    company: "Company Name",
    companyUrl: "#",
    description:
      "Building and maintaining core product interfaces. Working across the full frontend stack to deliver performant, accessible user experiences at scale.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    period: "2022 -- 2024",
    role: "Full-Stack Developer",
    company: "Previous Company",
    companyUrl: "#",
    description:
      "Developed client-facing applications and internal tools. Contributed to architecture decisions and mentored junior developers on best practices.",
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    period: "2020 -- 2022",
    role: "Frontend Developer",
    company: "Earlier Company",
    companyUrl: "#",
    description:
      "Built responsive web applications and design systems. Collaborated closely with design teams to translate Figma prototypes into polished interfaces.",
    tech: ["React", "JavaScript", "Sass", "REST APIs"],
  },
]

function ExperienceItem({
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
      className={`group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      {/* Timeline */}
      <div className="relative">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {experience.period}
        </span>
        {/* Timeline dot */}
        <div className="absolute -left-[25px] top-1.5 hidden md:block">
          <div className="h-2 w-2 rounded-full border border-primary/40 bg-background transition-colors group-hover:bg-primary/60 group-hover:border-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary">
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

        <p className="text-sm leading-relaxed text-muted-foreground mb-4 max-w-lg">
          {experience.description}
        </p>

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

export default function ExperienceSection() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-32 px-6" ref={sectionRef}>
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            Experience
          </span>
          <div
            className={`h-px bg-primary/30 transition-all duration-1000 ${
              isVisible ? "w-16" : "w-0"
            }`}
          />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16">
          Where I have worked.
        </h2>

        {/* Timeline */}
        <div className="relative md:ml-6">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20 hidden md:block -ml-[22px]" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceItem
                key={exp.period}
                experience={exp}
                index={i}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
