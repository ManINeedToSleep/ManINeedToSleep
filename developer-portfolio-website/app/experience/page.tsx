import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import AmbientParticles from "@/components/ambient-particles"
import PageHeader from "@/components/page-header"
import Footer from "@/components/footer"
import ExperienceContent from "@/components/experience-content"
import { keywords, siteName, siteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and education of Bryan Gunawan. A timeline of growth in software engineering.",
  keywords: [...keywords, "experience", "resume", "work history", "education"],
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience | Bryan Gunawan",
    description:
      "Professional experience and education of Bryan Gunawan. A timeline of growth in software engineering.",
    url: `${siteUrl}/experience`,
    siteName,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Bryan Gunawan",
    description:
      "Professional experience and education of Bryan Gunawan. A timeline of growth in software engineering.",
  },
}

export default function ExperiencePage() {
  return (
    <>
      <AmbientParticles />
      <Navigation />
      <main className="relative z-10">
        <PageHeader
          label="Experience"
          title="Where I have worked."
          description="A timeline of professional experience and education. Each role shaped how I think about software, design, and collaboration."
        />
        <ExperienceContent />
        <Footer />
      </main>
    </>
  )
}
