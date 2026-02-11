import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import AmbientParticles from "@/components/ambient-particles"
import PageHeader from "@/components/page-header"
import ProjectsGrid from "@/components/projects-grid"
import Footer from "@/components/footer"
import { keywords, siteName, siteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected works and projects by Bryan Gunawan. Full-stack applications, open source tools, and creative experiments.",
  keywords: [...keywords, "projects", "portfolio", "case studies"],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Bryan Gunawan",
    description:
      "Selected works and projects by Bryan Gunawan. Full-stack applications, open source tools, and creative experiments.",
    url: `${siteUrl}/projects`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Bryan Gunawan",
    description:
      "Selected works and projects by Bryan Gunawan. Full-stack applications, open source tools, and creative experiments.",
  },
}

export default function ProjectsPage() {
  return (
    <>
      <AmbientParticles />
      <Navigation />
      <main className="relative z-10">
        <PageHeader
          label="Selected Work"
          title="Projects"
          description="A collection of things I have built -- from production applications and open source tools to creative side projects. Each one reflects a different challenge and a particular way of solving it."
        />
        <ProjectsGrid />
        <Footer />
      </main>
    </>
  )
}
