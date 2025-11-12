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
      className="py-24 sm:py-28 lg:py-32"
      aria-labelledby="experiences-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2ED7C4]">
            Featured Experiences
          </p>
          <h2
            id="experiences-heading"
            className="text-3xl font-semibold text-[#1C2A27] md:text-4xl"
          >
            A mint trail of roles and collaborations.
          </h2>
          <p className="max-w-2xl text-base text-[#4D6B65]">
            Anchored in clarity and progress. Explore each card to see how the story unfolds.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.role + item.organization}
              className="flex h-full flex-col justify-between rounded-3xl border border-[#dff7f0] bg-white/85 p-6 shadow-[0_25px_45px_-40px_rgba(28,42,39,0.6)] backdrop-blur transition hover:-translate-y-1 hover:border-[#2ED7C4]/60 hover:shadow-[0_35px_60px_-45px_rgba(46,215,196,0.55)]"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#2ED7C4]">
                <span>{item.organization}</span>
                <span>{item.timeframe}</span>
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-[#1C2A27]">
                  {item.role}
                </h3>
                <p className="text-sm text-[#4D6B65]">{item.summary}</p>
              </div>
              {item.details && item.details.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-[#4D6B65]">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="relative rounded-2xl border border-[#e7faf4] bg-[#F7FBFA] px-4 py-3"
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

