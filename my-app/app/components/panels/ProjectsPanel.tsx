import { Project } from "../../data/projects";

type ProjectsPanelProps = {
  projects: Project[];
  onOpen: (id: string) => void;
};

export default function ProjectsPanel({ projects, onOpen }: ProjectsPanelProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Quest Log
        </p>
        <h2 className="text-2xl font-semibold">Projects with Personality</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Each project is a small system story: what broke, what got designed,
          and what changed because of it.
        </p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <span className="absolute right-4 top-4 text-lg">🎯</span>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
              {project.capabilities.slice(0, 3).map((capability) => (
                <span
                  key={`${project.id}-${capability}`}
                  className="rounded-full border border-white/60 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
                >
                  {capability}
                </span>
              ))}
            </div>
            <button
              className="mt-5 rounded-full border border-zinc-900/20 bg-zinc-900 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              onClick={() => onOpen(project.id)}
              type="button"
            >
              Open case study
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
