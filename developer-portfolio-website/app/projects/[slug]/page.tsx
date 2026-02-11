import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Navigation from "@/components/navigation"
import AmbientParticles from "@/components/ambient-particles"
import Footer from "@/components/footer"
import { projects } from "@/lib/projects"
import { authorName, keywords, siteName, siteUrl } from "@/lib/seo"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }

  const title = `${project.title} | Bryan Gunawan`
  const description = project.description

  return {
    title,
    description,
    keywords: [...keywords, ...project.techStack, project.category, project.title],
    alternates: {
      canonical: project.href,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${project.href}`,
      siteName,
      type: "article",
      authors: [authorName],
      tags: project.techStack,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]

  return (
    <>
      <AmbientParticles />
      <Navigation />
      <main className="relative z-10">
        {/* Back link */}
        <div className="pt-28 px-6">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              All Projects
            </Link>
          </div>
        </div>

        {/* Project header */}
        <div className="pt-8 pb-12 px-6">
          <div className="mx-auto max-w-3xl">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs text-primary/60 tracking-wider">
                {project.id}
              </span>
              <span className="h-px w-6 bg-primary/30" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                {project.category}
              </span>
              <span className="h-px w-6 bg-border/30" />
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>

            {/* External links */}
            <div className="flex items-center gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-mono text-xs font-semibold tracking-wider text-primary-foreground uppercase transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  View Live
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-transparent px-4 py-2 font-mono text-xs tracking-wider text-foreground uppercase transition-all hover:border-primary/40 hover:text-primary"
                >
                  Source Code
                  <Github className="h-3 w-3" />
                </a>
              )}
            </div>

            <div className="h-px bg-border/20" />
          </div>
        </div>

        {/* Project content */}
        <div className="px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            {/* Long description */}
            <div className="mb-12">
              <h2 className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-secondary-foreground/80">
                {project.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
                Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-sm leading-relaxed text-secondary-foreground/70">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-16">
              <h2 className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/30 bg-surface-raised/50 px-3 py-1.5 font-mono text-[11px] tracking-wider text-secondary-foreground/70 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev/Next navigation */}
            <div className="h-px bg-border/20 mb-8" />
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={prevProject.href}
                className="group flex flex-col gap-1 rounded-lg border border-border/30 bg-card p-4 transition-all duration-300 hover:border-primary/30"
              >
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  Previous
                </span>
                <span className="font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {prevProject.title}
                </span>
              </Link>
              <Link
                href={nextProject.href}
                className="group flex flex-col items-end gap-1 rounded-lg border border-border/30 bg-card p-4 transition-all duration-300 hover:border-primary/30"
              >
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  Next
                </span>
                <span className="font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {nextProject.title}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
