"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { projects, categories, type Project } from "@/lib/projects"

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
      { threshold: 0.1 }
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
      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-lg border border-border/30 bg-card p-6 md:p-8 transition-all duration-500 hover:border-primary/30 glow-gold-border flex flex-col">
        {/* Spotlight effect */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--gold) / 0.06), transparent 60%)`,
            }}
          />
        )}

        {/* Header */}
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
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <Link href={project.href}>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border/30 bg-surface-raised/50 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase transition-colors duration-300 group-hover:border-primary/20 group-hover:text-secondary-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 relative">
          <Link
            href={project.href}
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            Details
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              Live
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              Code
              <Github className="h-3 w-3" />
            </a>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  )
}

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="px-6 pb-32">
      <div className="mx-auto max-w-5xl">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/30 bg-transparent text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {category}
              <span className="ml-1.5 text-[10px] opacity-60">
                {category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              No projects in this category yet
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
