// src/app/(site)/page.tsx
import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { ExperiencesSection } from "@/components/site/experiences-section";
import { HeroSection } from "@/components/site/hero-section";
import { MainNav } from "@/components/site/main-nav";
import { ProjectsSection } from "@/components/site/projects-section";
import site from "@/config/site";

export default async function HomePage() {
  const { getAllProjects } = await import("@/lib/mdx");
  const projects = (await getAllProjects()).slice(0, 3);

  const experiences = [
    {
      role: "Senior Full-stack Engineer",
      organization: "Mint Labs",
      timeframe: "2023 — Present",
      summary: "Leading rapid experiments and production-ready builds across web and spatial prototypes.",
      details: [
        "Shipped a composable design system that powers marketing sites and prototypes alike.",
        "Guided a cross-functional squad to launch a spatial storytelling experience in under six weeks.",
      ],
    },
    {
      role: "Product Engineer",
      organization: "Studio Bloom",
      timeframe: "2021 — 2023",
      summary: "Partnered with designers to ship polished digital experiences with accessibility at the core.",
      details: [
        "Co-led accessibility audits that improved Lighthouse scores to 98+ across flagship properties.",
        "Prototyped the minty intro experience that inspired this portfolio’s welcome flow.",
      ],
    },
    {
      role: "Creative Technologist",
      organization: "Freelance",
      timeframe: "2019 — 2021",
      summary: "Crafted bespoke interactive work for artists, educators, and local businesses.",
      details: [
        "Built interactive exhibits blending projection, Arduino, and web technology.",
        "Mentored junior creatives on combining narrative design with modern web tooling.",
      ],
    },
  ];

  return (
    <div className="bg-white text-[#1C2A27]">
      <MainNav brand={site.author ?? "Neo"} />

      <main>
        <HeroSection
          name={site.author ?? "Neo"}
          title="Full-stack artisan blending code, care, and minty motion."
          tagline="Building experiences that feel like a warm welcome: bright, breathable, and quietly delightful. The intro has already greeted our visitors; now the page unfolds with clarity."
        />

        <ProjectsSection projects={projects} />

        <AboutSection
          heading="A developer who designs with feeling."
          body="I think of software as a living space. Every component should feel intentional, a little playful, and mindful of the people exploring it. When I’m not building, I’m sketching motion studies, collecting foliage inspirations, or refining the mint aesthetic you see here."
          highlights={[
            "Hybrid thinker: product strategy, UX voice, and systems engineering.",
            "Obsessed with delightful micro-interactions and accessible defaults.",
            "Making the most of Next.js, TypeScript, and a splash of Framer Motion.",
          ]}
          images={[
            { src: "/images/about-about1.jpg", alt: "Neo sketching motion studies surrounded by mint leaves" },
            { src: "/images/about-about2.jpg", alt: "Desk with minty palette and creative tools" },
          ]}
        />

        <ExperiencesSection items={experiences} />

        <ContactSection
          heading="Let’s build something gently bold."
          description="Reach out with collaborations, mentorship opportunities, or just to say hello. I’m always curious about thoughtful projects and people."
        />

        <section
          id="other"
          className="bg-white py-24 sm:py-28 lg:py-32"
          aria-labelledby="other-heading"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
            <h2
              id="other-heading"
              className="text-3xl font-semibold text-[#1C2A27]"
            >
              Other Minty Corners
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#4D6B65]">
              Space reserved for future additions — maybe a newsletter, a zine shelf, or an interactive garden. For now, enjoy the calm breeze and stay tuned.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
