import { ProjectCard } from "@/components/site/project-card";
import type { ProjectFM } from "@/lib/content";

interface ProjectsSectionProps {
  projects: Array<{ slug: string; frontmatter: ProjectFM }>;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="py-24 sm:py-28 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <header className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2ED7C4]">
            Featured Projects
          </p>
          <h2
            id="projects-heading"
            className="text-3xl font-semibold text-[#1C2A27] md:text-4xl"
          >
            Showing the work before the words.
          </h2>
          <p className="max-w-2xl text-base text-[#4D6B65]">
            A snapshot of the builds that best capture your minty craft. Each card links to a full breakdown with context, visuals, and stack notes.
          </p>
        </header>

        <div className="relative">
          <div className="pointer-events-none absolute -left-10 top-1/3 h-36 w-36 rounded-full bg-[#d6fcf3]/60 blur-3xl sm:-left-16" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-[#c9f8ed]/60 blur-3xl sm:-right-20" />

          <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  project={project.frontmatter}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[#d6f7ef] bg-white/80 p-8 text-center text-[#4D6B65] shadow-sm backdrop-blur">
                Project entries will bloom here soon. Add MDX files under{" "}
                <code className="rounded bg-[#E6FFF7] px-2 py-1 text-sm font-semibold text-[#1C2A27]">
                  src/content/projects
                </code>
                .
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

