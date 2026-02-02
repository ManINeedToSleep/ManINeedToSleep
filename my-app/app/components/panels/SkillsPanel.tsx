type SkillsPanelProps = {
  capabilities: { capability: string; projectNames: string[] }[];
};

export default function SkillsPanel({ capabilities }: SkillsPanelProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Capabilities
        </p>
        <h2 className="text-2xl font-semibold">Scalable, Frontend-first Systems</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          I focus on front-end polish and UX, with an eye on scalability,
          performance, and maintainability as systems grow.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
          {[
            "TypeScript",
            "JavaScript",
            "Python",
            "SQL",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "D3.js",
            "Recharts",
            "Node.js",
            "Firebase",
            "Prisma",
            "PostgreSQL",
            "MySQL",
            "Zustand",
            "TanStack Query",
            "Socket.io",
            "OpenAI API",
            "Vercel",
            "Docker",
            "Linux",
            "Debian",
            "Figma",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/60 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
            >
              {item}
            </span>
          ))}
        </div>
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
