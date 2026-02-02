import { ViewConfig } from "../view-config";

type AppSidebarProps = {
  activeView: ViewConfig["id"] | "project_detail";
  viewConfigs: ViewConfig[];
};

export default function AppSidebar({ activeView, viewConfigs }: AppSidebarProps) {
  const currentView =
    activeView === "project_detail"
      ? {
          label: "Project Detail",
          description: "Focused case study.",
          emoji: "🧩",
          accent: "from-fuchsia-400/20 via-rose-400/10 to-transparent",
        }
      : viewConfigs.find((config) => config.id === activeView);

  return (
    <aside className="flex flex-col gap-6">
      <section className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        <span
          className={`absolute inset-0 bg-gradient-to-br opacity-70 ${
            currentView?.accent ?? ""
          }`}
        />
        <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Current State
        </p>
        <h2 className="mt-3 text-xl font-semibold">{currentView?.label}</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {currentView?.description}
        </p>
        <p className="mt-4 text-2xl">{currentView?.emoji}</p>
        </div>
      </section>
      <section className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Currently Into
        </p>
        <div className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <p>Anime arcs with messy friendships.</p>
          <p>Cozy RPGs and story-rich indies.</p>
          <p>UI motion with intent and restraint.</p>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Availability
        </p>
        <div className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
          <p>Open to frontend roles.</p>
          <p>Remote-first, UTC-5.</p>
        </div>
      </section>
    </aside>
  );
}
