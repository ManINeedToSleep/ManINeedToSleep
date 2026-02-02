type SkillsPanelProps = {
  capabilities: { capability: string; projectNames: string[] }[];
};

export default function SkillsPanel({ capabilities }: SkillsPanelProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Capability Map
        </p>
        <h2 className="text-2xl font-semibold">What I Like Building</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Skills grouped by outcomes, with each project as proof of work.
        </p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability) => (
          <div
            key={capability.capability}
            className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold">
              {capability.capability}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {capability.projectNames.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
