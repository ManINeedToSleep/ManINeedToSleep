import { ViewConfig } from "../view-config";

type OverviewPanelProps = {
  viewConfigs: ViewConfig[];
  onSelectView: (view: ViewConfig["id"]) => void;
};

export default function OverviewPanel({
  viewConfigs,
  onSelectView,
}: OverviewPanelProps) {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl font-[Riffic]">
          Bryan Gunawan
        </h2>
        <p className="text-lg font-semibold text-indigo-500">
          I like building playful UI systems.
        </p>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300 font-[Halogen]">
          I&apos;m a frontend engineer who loves anime, games, and tiny details.
          I build interfaces that feel alive, but still ship cleanly. This
          notebook is where I show the thinking behind the fun.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm text-zinc-700 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            type="button"
          >
            Download my resume
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 dark:border-white/10 dark:text-zinc-200"
            onClick={() => onSelectView("projects_overview")}
            type="button"
          >
            See projects
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {viewConfigs.map((config) => (
          <div
            key={config.id}
            className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-4 text-sm text-zinc-600 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
          >
            <span
              className={`absolute inset-0 bg-gradient-to-br opacity-70 ${config.accent}`}
            />
            <span className="relative z-10 mb-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              <span className="text-base">{config.emoji}</span>
              {config.label}
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {config.description}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Design Notes
        </p>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li>Anime, games, and UI motion are part of the flavor.</li>
          <li>Reduced motion still honors OS preference.</li>
          <li>Focus stays within the active panel.</li>
          <li>Transitions avoid layout shift.</li>
          <li>Details live here, not behind routes.</li>
        </ul>
      </section>
    </div>
  );
}
