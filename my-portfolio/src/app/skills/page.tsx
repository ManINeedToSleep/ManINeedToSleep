import { ThemeToggle } from "@/components/moonlight-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SkillIcons } from "@/components/skill-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bryan Gunawan's Technical Skills - Full-Stack Developer",
  description:
    "Discover Bryan Gunawan's technical expertise in React, Next.js, TypeScript, Node.js, and modern web development technologies. View skill levels and certifications.",
  openGraph: {
    title: "Bryan Gunawan's Technical Skills - Full-Stack Developer",
    description:
      "Discover Bryan Gunawan's technical expertise in React, Next.js, TypeScript, Node.js, and modern web development technologies.",
    url: "https://bryangunawan.dev/skills",
  },
  alternates: {
    canonical: "https://bryangunawan.dev/skills",
  },
}

export default function SkillsPage() {
  return (
    <main className="container relative px-4 py-16 mx-auto">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-purple-300/70 hover:text-purple-200 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return to Portfolio</span>
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-400">
          Technical Skills & Expertise
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-500 mt-2"></div>
        <p className="text-purple-100/80 mt-4 max-w-2xl">
          My technical arsenal spans frontend and backend technologies, with expertise in modern web development
          frameworks and tools.
        </p>
      </div>

      <SkillIcons />

      <div className="mt-12 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg">
        <h2 className="font-serif text-2xl text-purple-200 mb-6">Core Competencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-black/30 border border-purple-500/20 rounded-lg p-4">
            <h3 className="font-serif text-lg text-purple-200 mb-2">Responsive Web Design</h3>
            <p className="text-purple-100/80 text-sm">
              Creating adaptive interfaces that work seamlessly across all devices and screen sizes.
            </p>
          </div>
          <div className="bg-black/30 border border-purple-500/20 rounded-lg p-4">
            <h3 className="font-serif text-lg text-purple-200 mb-2">Performance Optimization</h3>
            <p className="text-purple-100/80 text-sm">
              Implementing best practices for fast loading times and optimal user experience.
            </p>
          </div>
          <div className="bg-black/30 border border-purple-500/20 rounded-lg p-4">
            <h3 className="font-serif text-lg text-purple-200 mb-2">Accessibility Standards</h3>
            <p className="text-purple-100/80 text-sm">
              Ensuring web applications are accessible to users with diverse abilities and needs.
            </p>
          </div>
          <div className="bg-black/30 border border-purple-500/20 rounded-lg p-4">
            <h3 className="font-serif text-lg text-purple-200 mb-2">Modern Development Practices</h3>
            <p className="text-purple-100/80 text-sm">
              Following industry best practices for clean code, testing, and deployment workflows.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
