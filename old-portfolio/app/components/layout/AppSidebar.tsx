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
          accent: "from-fuchsia-400/20 via-rose-400/10 to-transparent",
        }
      : viewConfigs.find((config) => config.id === activeView);

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start">
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
        </div>
      </section>
      <section className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Currently Into
        </p>
        <div className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <p>Revamping my portfolio and resume.</p>
          <p>Applying and improving my project storytelling.</p>
          <p>Sharpening fundamentals and system design.</p>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Availability
        </p>
        <div className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
          <p>Available: Yes.</p>
          <p>Open to frontend roles.</p>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
          Connect
        </p>
        <div className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
          <a
            className="block hover:text-zinc-900 dark:hover:text-white"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bryangunawan.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
          <a
            className="block hover:text-zinc-900 dark:hover:text-white"
            href="https://www.linkedin.com/in/bryan-gunawan-a537132b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="block hover:text-zinc-900 dark:hover:text-white"
            href="https://github.com/manineedtosleep"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </aside>
  );
}
