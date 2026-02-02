import { Project } from "../../data/projects";

type ProjectDetailPanelProps = {
  project: Project | undefined;
  onBack: () => void;
};

export default function ProjectDetailPanel({
  project,
  onBack,
}: ProjectDetailPanelProps) {
  if (!project) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Select a project from the overview to continue.
        </p>
        <button
          className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
          onClick={onBack}
          type="button"
        >
          Back to projects
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Case Study
          </p>
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            {project.languages.map((language) => (
              <span
                key={`${project.id}-${language}`}
                className="rounded-full border border-white/60 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              className="rounded-full border border-zinc-900/20 bg-zinc-900 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          )}
          {project.repoUrl && (
            <a
              className="rounded-full border border-zinc-900/20 bg-zinc-900 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 dark:border-white/10 dark:text-zinc-200 dark:hover:border-white/30"
            onClick={onBack}
            type="button"
          >
            Back
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DetailCard title="Problem context" body={project.problem} />
        <DetailCard title="System design" body={project.system} />
        <DetailCard
          title="Implementation decisions"
          body={project.decisions}
        />
        <DetailCard title="Outcome" body={project.outcome} />
      </div>
    </div>
  );
}

function DetailCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{title}</p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{body}</p>
    </div>
  );
}
