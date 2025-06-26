import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsPreview } from "@/components/skills-preview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bryan Gunawan - Full-Stack Developer & Digital Architect",
  description:
    "Welcome to Bryan Gunawan's portfolio. Discover innovative web applications and digital experiences crafted with React, Next.js, TypeScript, and cutting-edge technologies.",
  openGraph: {
    title: "Bryan Gunawan - Full-Stack Developer & Digital Architect",
    description:
      "Welcome to Bryan Gunawan's portfolio. Discover innovative web applications and digital experiences crafted with React, Next.js, TypeScript, and cutting-edge technologies.",
    url: "https://bryangunawan.dev",
  },
  twitter: {
    title: "Bryan Gunawan - Full-Stack Developer & Digital Architect",
    description:
      "Welcome to Bryan Gunawan's portfolio. Discover innovative web applications and digital experiences crafted with React, Next.js, TypeScript, and cutting-edge technologies.",
  },
  alternates: {
    canonical: "https://bryangunawan.dev",
  },
}

export default function Home() {
  return (
    <>
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsPreview />
      </main>
    </>
  )
}
