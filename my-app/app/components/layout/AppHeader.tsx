import { ViewConfig } from "../view-config";

type AppHeaderProps = {
  activeView: ViewConfig["id"];
  onSelect: (view: ViewConfig["id"]) => void;
  viewConfigs: ViewConfig[];
};

export default function AppHeader({
  activeView,
  onSelect,
  viewConfigs,
}: AppHeaderProps) {
  return (
    <header className="rounded-3xl border border-white/40 bg-white/85 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.7)] backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
        <p>© Designed by Bryan</p>
        <div className="flex flex-wrap items-center gap-3">
          {viewConfigs.map((config) => (
            <button
              key={config.id}
              className={`group relative flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.2em] transition ${
                activeView === config.id
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                  : "border-zinc-300 text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
              }`}
              onClick={() => onSelect(config.id)}
              type="button"
            >
              <span
                className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${
                  config.accent
                } ${activeView === config.id ? "opacity-100" : ""}`}
              />
              <span className="text-sm">{config.emoji}</span>
              {config.label}
            </button>
          ))}
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
            type="button"
          >
            Theme: Lavender
          </button>
        </div>
      </div>
    </header>
  );
}
