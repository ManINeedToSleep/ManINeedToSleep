type SkillsPanelProps = {
  capabilities: { capability: string; projectNames: string[] }[];
};

export default function SkillsPanel({ capabilities }: SkillsPanelProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Tech Stack
        </p>
        <h2 className="text-2xl font-semibold">Tools I Ship With</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Organized by category so you can see what I reach for across the
          stack.
        </p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Languages",
            items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
          },
          {
            title: "Frontend",
            items: [
              "React",
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "D3.js",
              "Recharts",
            ],
          },
          {
            title: "Backend & Data",
            items: [
              "Node.js",
              "Firebase (Auth/Firestore/Realtime DB)",
              "PostgreSQL",
              "MySQL",
              "Prisma",
              "SQL",
            ],
          },
          {
            title: "State & Real-time",
            items: ["Zustand", "TanStack Query", "Socket.io"],
          },
          {
            title: "AI & Integrations",
            items: ["OpenAI API"],
          },
          {
            title: "Dev & Design",
            items: ["Vercel", "Docker", "Linux", "Figma"],
          },
        ].map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
              {group.items.map((item) => (
                <span
                  key={`${group.title}-${item}`}
                  className="rounded-full border border-white/60 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
