"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

const links = [
  {
    label: "Email",
    value: "hello@bryangunawan.dev",
    href: "mailto:hello@bryangunawan.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/bryangunawan",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bryangunawan",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export default function ContactSection() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="relative py-32 px-6" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-border/30" />
      <div className="absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-primary/3 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            Contact
          </span>
          <div
            className={`h-px bg-primary/30 transition-all duration-1000 ${
              isVisible ? "w-16" : "w-0"
            }`}
          />
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"Let's build something"}
            <br />
            <span className="text-primary">{"together."}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mb-12 leading-relaxed">
            Have a project in mind or want to discuss opportunities?
            I am always open to interesting conversations and collaborations.
          </p>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className={`group relative flex items-center gap-4 rounded-lg border border-border/30 bg-card p-5 transition-all duration-500 hover:border-primary/30 glow-gold-border ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/30 bg-surface-raised text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                <link.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase block mb-0.5">
                  {link.label}
                </span>
                <span className="text-sm text-foreground truncate block transition-colors group-hover:text-primary">
                  {link.value}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl mt-32 pt-8 border-t border-border/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground/50 tracking-wider">
              {"Bryan Gunawan"}
            </span>
            <span className="h-px w-4 bg-border/30" />
            <span className="font-mono text-xs text-muted-foreground/30 tracking-wider">
              2025
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/30 tracking-wider uppercase">
            Crafted with intention
          </span>
        </div>
      </footer>
    </section>
  )
}
