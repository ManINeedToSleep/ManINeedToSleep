import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedProjects from "@/components/featured-projects"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import AmbientParticles from "@/components/ambient-particles"
import SectionDivider from "@/components/section-divider"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <AmbientParticles />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
