interface ExperienceItem {
  role: string;
  organization: string;
  timeframe: string;
  summary: string;
  details?: string[];
}

interface ExperiencesSectionProps {
  items: ExperienceItem[];
}

export function ExperiencesSection({ items }: ExperiencesSectionProps) {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="experiences-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-15%] top-20 h-72 w-72 rounded-full bg-mint-100/35 blur-[150px] dark:bg-forest-600/45" />
        <div className="absolute right-[-10%] top-0 h-60 w-60 rounded-full bg-blush-50/40 blur-[140px] dark:bg-forest-700/45" />
        <div className="absolute left-1/2 bottom-[-20%] h-96 w-96 -translate-x-1/2 rounded-full bg-sand-100/45 blur-[200px] dark:bg-[#1a3531]/60" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2ED7C4]">
            Featured Experiences
          </p>
          <h2
            id="experiences-heading"
            className="text-3xl font-semibold text-[#1C2A27] dark:text-[#EAFBF7] md:text-4xl"
          >
            A mint trail of roles and collaborations.
          </h2>
          <p className="max-w-2xl text-base text-[#4D6B65] dark:text-[#CDE9E3]">
            Anchored in clarity and progress. Explore each card to see how the story unfolds.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.role + item.organization}
              className="flex h-full flex-col justify-between rounded-3xl border border-[#dff7f0] bg-white/85 p-6 shadow-[0_25px_45px_-40px_rgba(28,42,39,0.6)] backdrop-blur transition hover:-translate-y-1 hover:border-[#2ED7C4]/60 hover:shadow-[0_35px_60px_-45px_rgba(46,215,196,0.55)] dark:border-[#274f49] dark:bg-forest-700/70 dark:text-[#E3F6F1]"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#2ED7C4] dark:text-[#9CF1E5]">
                <span>{item.organization}</span>
                <span>{item.timeframe}</span>
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-[#1C2A27] dark:text-[#EAFBF7]">
                  {item.role}
                </h3>
                <p className="text-sm text-[#4D6B65] dark:text-[#CDE9E3]">{item.summary}</p>
              </div>
              {item.details && item.details.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-[#4D6B65] dark:text-[#CDE9E3]">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="relative rounded-2xl border border-[#e7faf4] bg-[#F7FBFA] px-4 py-3 dark:border-[#28524b] dark:bg-forest-700/70"
                    >
                      <span className="absolute left-3 top-1.5 h-[5px] w-[5px] rounded-full bg-[#2ED7C4]" />
                      <span className="pl-5">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

