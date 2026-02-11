"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { projects as allProjects, type Project } from "@/lib/projects"

const projects = allProjects.filter((p) => p.featured)

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={project.href} className="block">
        <div className="relative overflow-hidden rounded-lg border border-border/30 bg-card p-6 md:p-8 transition-all duration-500 hover:border-primary/30 glow-gold-border">
          {/* Spotlight effect on hover */}
          {isHovered && (
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--gold) / 0.06), transparent 60%)`,
              }}
            />
          )}

          {/* Header row */}
          <div className="relative flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-primary/60 tracking-wider">
                {project.id}
              </span>
              <span className="h-px w-6 bg-primary/30" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-lg">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-border/30 bg-surface-raised/50 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase transition-colors duration-300 group-hover:border-primary/20 group-hover:text-secondary-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
        </div>
      </Link>
    </div>
  )
}

export default function FeaturedProjects() {
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
    <section id="projects" className="relative py-32 px-6" ref={sectionRef}>
      {/* Section header */}
      <div className="mx-auto max-w-5xl mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            Selected Work
          </span>
          <div
            className={`h-px bg-primary/30 transition-all duration-1000 ${
              isVisible ? "w-16" : "w-0"
            }`}
          />
        </div>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary group"
          >
            View All
            <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Project Grid */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mx-auto max-w-5xl mt-8 flex justify-center md:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-transparent px-5 py-2.5 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-all hover:border-primary/40 hover:text-primary"
        >
          View All Projects
          <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
    </section>
  )
}
