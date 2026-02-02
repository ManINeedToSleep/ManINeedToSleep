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
        <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-300">
          A passionate full-stack / web developer who obsesses over UX.
        </p>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300 font-[Halogen]">
          I&apos;m a full-stack software engineer passionate about building
          polished, user-focused web experiences. My journey with code started
          back in high school, and since 2023, I&apos;ve been officially
          developing websites and applications. One of my computer teachers once
          called me &quot;one of the best students I had in my class&quot;—a
          compliment that motivated me to keep pushing forward in tech. When I
          build, I obsess over both Front-End quality and User Experience,
          always striving to deliver exactly what my clients envision.
          I&apos;m also a quick learner; I picked up React and TypeScript in
          about a week.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm text-zinc-700 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            href="/resume.txt"
            download
          >
            Download my resume
          </a>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition hover:border-zinc-400 dark:border-white/10 dark:text-zinc-200"
            onClick={() => onSelectView("projects_overview")}
            type="button"
          >
            See projects
          </button>
        </div>
      </section>

      <section className="space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Experience
        </p>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>Launchpad Philly</span>
              <span>Oct 2025 — Present</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">
              Technical Consultant / Full Stack
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Built and shipped real-time platforms, dashboards, and
              AI-enhanced tools with a focus on polish, UX, and clean systems.
              Worked across frontend architecture, data flows, and reusable
              design patterns in a team environment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>Launchpad Philly</span>
              <span>Sep 2023 — Oct 2025</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">
              Full Stack Engineer (Apprenticeship)
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Developed full-stack apps with React, Next.js, Firebase, and
              PostgreSQL. Led an AI-powered productivity tool and shipped
              real-time social features with Socket.io and Firebase.
            </p>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>Bentley Systems</span>
              <span>Jul 2024 — Aug 2024</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">Intern</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Contributed to an internal 3D BIM data tool for selecting and
              visualizing model elements. Built React/TypeScript components for
              interactive highlighting, contextual detail panels, and responsive
              data exploration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
