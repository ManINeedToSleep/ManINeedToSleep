import { ProjectCard } from "@/components/project-card"
import { ThemeToggle } from "@/components/moonlight-toggle"
import { projects } from "@/data/projects"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects by Bryan Gunawan - Web Development Portfolio",
  description:
    "Explore Bryan Gunawan's portfolio of innovative web applications and digital projects. Built with React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Projects by Bryan Gunawan - Web Development Portfolio",
    description:
      "Explore Bryan Gunawan's portfolio of innovative web applications and digital projects. Built with React, Next.js, TypeScript, and modern web technologies.",
    url: "https://bryangunawan.dev/projects",
  },
  alternates: {
    canonical: "https://bryangunawan.dev/projects",
  },
}

export default function ProjectsPage() {
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
          Bryan's Projects
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-500 mt-2"></div>
        <p className="text-purple-100/80 mt-4 max-w-2xl">
          A collection of web applications and digital experiences I've crafted using modern technologies like React,
          Next.js, and TypeScript.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
