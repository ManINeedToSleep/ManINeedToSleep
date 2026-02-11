import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import AmbientParticles from "@/components/ambient-particles"
import PageHeader from "@/components/page-header"
import Footer from "@/components/footer"
import ContactContent from "@/components/contact-content"
import { keywords, siteName, siteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bryan Gunawan for project inquiries, collaboration, or career opportunities.",
  keywords: [...keywords, "contact", "hire", "collaboration", "inquiries"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Bryan Gunawan",
    description:
      "Get in touch with Bryan Gunawan for project inquiries, collaboration, or career opportunities.",
    url: `${siteUrl}/contact`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Bryan Gunawan",
    description:
      "Get in touch with Bryan Gunawan for project inquiries, collaboration, or career opportunities.",
  },
}

export default function ContactPage() {
  return (
    <>
      <AmbientParticles />
      <Navigation />
      <main className="relative z-10">
        <PageHeader
          label="Contact"
          title="Let's build something."
          description="Whether it's a project idea, a job opportunity, or just wanting to talk shop -- I'm always open to the conversation."
        />
        <ContactContent />
        <Footer />
      </main>
    </>
  )
}
