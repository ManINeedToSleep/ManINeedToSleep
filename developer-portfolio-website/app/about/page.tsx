import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import AmbientParticles from "@/components/ambient-particles"
import PageHeader from "@/components/page-header"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import { keywords, siteName, siteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bryan Gunawan -- a developer who builds with intention, blending engineering precision with creative soul.",
  keywords: [...keywords, "about", "bio", "professional background"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Bryan Gunawan",
    description:
      "About Bryan Gunawan -- a developer who builds with intention, blending engineering precision with creative soul.",
    url: `${siteUrl}/about`,
    siteName,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Bryan Gunawan",
    description:
      "About Bryan Gunawan -- a developer who builds with intention, blending engineering precision with creative soul.",
  },
}

export default function AboutPage() {
  return (
    <>
      <AmbientParticles />
      <Navigation />
      <main className="relative z-10">
        <PageHeader
          label="About"
          title="A developer who builds with intention."
          description="I approach development as a craft -- a balance of technical precision and creative expression. Every detail matters."
        />
        <AboutContent />
        <Footer />
      </main>
    </>
  )
}
