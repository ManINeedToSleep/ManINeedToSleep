"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react"

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
      { threshold },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

const contactLinks = [
  {
    label: "Email",
    value: "hello@bryangunawan.dev",
    href: "mailto:hello@bryangunawan.dev",
    icon: Mail,
    description: "Best for project inquiries and formal communication.",
  },
  {
    label: "GitHub",
    value: "github.com/bryangunawan",
    href: "https://github.com",
    icon: Github,
    description: "Open source work and code samples.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bryangunawan",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Professional profile and network.",
  },
]

export default function ContactContent() {
  const formSection = useScrollReveal()
  const linksSection = useScrollReveal()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <div className="px-6 pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          {/* Left -- Contact Form */}
          <div ref={formSection.ref}>
            <div
              className={`mb-8 transition-all duration-700 ${
                formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary/60 uppercase">
                Send a Message
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email row */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${
                  formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="group relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-0 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                      focusedField === "name" || formState.name
                        ? "-top-5 text-primary"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full border-0 border-b border-border/30 bg-transparent py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-transparent focus:border-primary/60"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                      focusedField === "name" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                <div className="group relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-0 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                      focusedField === "email" || formState.email
                        ? "-top-5 text-primary"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full border-0 border-b border-border/30 bg-transparent py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-transparent focus:border-primary/60"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                      focusedField === "email" ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="group relative">
                  <label
                    htmlFor="subject"
                    className={`absolute left-0 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                      focusedField === "subject" || formState.subject
                        ? "-top-5 text-primary"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full appearance-none border-0 border-b border-border/30 bg-transparent py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary/60 cursor-pointer"
                  >
                    <option value="" className="bg-card text-muted-foreground">
                      Select a topic...
                    </option>
                    <option value="project" className="bg-card text-foreground">
                      Project Inquiry
                    </option>
                    <option value="freelance" className="bg-card text-foreground">
                      Freelance Opportunity
                    </option>
                    <option value="fulltime" className="bg-card text-foreground">
                      Full-Time Role
                    </option>
                    <option value="collab" className="bg-card text-foreground">
                      Collaboration
                    </option>
                    <option value="other" className="bg-card text-foreground">
                      Something Else
                    </option>
                  </select>
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                      focusedField === "subject" ? "w-full" : "w-0"
                    }`}
                  />
                  {/* Custom select arrow */}
                  <div className="absolute right-0 top-3 pointer-events-none">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-muted-foreground"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="group relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-0 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                      focusedField === "message" || formState.message
                        ? "-top-5 text-primary"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full resize-none border-0 border-b border-border/30 bg-transparent py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-transparent focus:border-primary/60 leading-relaxed"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                      focusedField === "message" ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Submit */}
              <div
                className={`pt-4 transition-all duration-700 delay-[400ms] ${
                  formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full skew-x-12" />
                </button>
              </div>
            </form>
          </div>

          {/* Right -- Contact Info & Links */}
          <div ref={linksSection.ref} className="lg:pt-8">
            <div
              className={`mb-8 transition-all duration-700 ${
                linksSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary/60 uppercase">
                Other Ways to Connect
              </span>
            </div>

            {/* Contact link cards */}
            <div className="space-y-4 mb-10">
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block rounded-lg border border-border/30 bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:bg-surface-raised glow-gold-border ${
                    linksSection.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${150 + i * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <link.icon className="h-4 w-4 text-primary/60 transition-colors group-hover:text-primary" />
                      <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm text-foreground font-medium mb-1">{link.value}</p>
                  <p className="text-xs text-muted-foreground/60 leading-relaxed">{link.description}</p>
                </a>
              ))}
            </div>

            {/* Status panel */}
            <div
              className={`rounded-lg border border-border/20 bg-card/50 p-5 transition-all duration-700 delay-500 ${
                linksSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 h-2 w-2 rounded-full bg-emerald-400 animate-ping opacity-40" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400/80 uppercase">
                  Available for Work
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground/40" />
                  <span className="text-xs text-muted-foreground">Open to Remote & Hybrid</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground/40" />
                  <span className="text-xs text-muted-foreground">Typical response within 24 hours</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/10">
                <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
                  Currently interested in full-time roles, freelance projects, and open source collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
