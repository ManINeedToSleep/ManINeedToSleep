import { ProjectCard } from "@/components/site/project-card";
import type { ProjectFM } from "@/lib/content";

interface ProjectsSectionProps {
  projects: Array<{ slug: string; frontmatter: ProjectFM }>;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-12 h-52 w-52 rounded-full bg-mint-100/40 blur-3xl dark:bg-forest-600/40" />
        <div className="absolute right-[-12%] top-24 h-64 w-64 rounded-full bg-blush-50/45 blur-[140px] dark:bg-forest-700/45" />
        <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sand-100/40 blur-[160px] dark:bg-[#1a3531]/50" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <header className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2ED7C4]">
            Featured Projects
          </p>
          <h2
            id="projects-heading"
            className="text-3xl font-semibold text-[#1C2A27] dark:text-white md:text-4xl"
          >
            Showing the work before the words.
          </h2>
          <p className="max-w-2xl text-base text-[#4D6B65] dark:text-[#CDE9E3]">
            A snapshot of the builds that best capture your minty craft. Each card links to a full breakdown with context, visuals, and stack notes.
          </p>
        </header>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-[-8%] top-1/3 h-36 w-36 rounded-full bg-mint-50/50 blur-3xl sm:left-[-6%]" />
            <div className="absolute right-[-6%] bottom-4 h-44 w-44 rounded-full bg-blush-50/60 blur-[120px]" />
          </div>

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
              <div className="rounded-2xl border border-dashed border-[#d6f7ef] bg-white/80 p-8 text-center text-[#4D6B65] shadow-sm backdrop-blur dark:border-[#274f49] dark:bg-forest-700/70 dark:text-[#CDE9E3]">
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

