import type { ReactNode } from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  profileLabel?: string;
  children?: ReactNode;
}

export function HeroSection({
  name,
  title,
  tagline,
  profileLabel = "You, minty cool.",
  children,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-[#EAFBF4]/80 to-transparent" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#c4f7eb]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-[#d2fff4]/60 blur-[180px]" />
      <div className="pointer-events-none absolute left-10 top-10 hidden h-32 w-32 -rotate-6 rounded-full border border-dashed border-[#2ED7C4]/30 md:block" />
      <div className="pointer-events-none absolute right-12 top-16 hidden h-40 w-40 rotate-12 border border-dashed border-[#2ED7C4]/30 md:block" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center sm:px-10 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#2ED7C4]">
          Welcome
        </p>

        <div className="relative flex items-center justify-center">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#2ED7C4] via-[#6CE8D9] to-[#b5f3ea] text-white shadow-[0_16px_40px_-20px_rgba(46,215,196,0.65)]">
            <span className="text-xl font-semibold">{profileLabel}</span>
            <div className="pointer-events-none absolute -left-6 -top-6 h-12 w-12 rotate-12 rounded-full border border-[#2ED7C4]/40" />
            <div className="pointer-events-none absolute -right-5 bottom-10 h-8 w-8 rounded-full border border-[#2ED7C4]/40" />
          </div>
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-4">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-[#1C2A27] sm:text-5xl lg:text-6xl"
          >
            {name}
          </h1>
          <p className="text-lg font-semibold text-[#4D6B65] sm:text-xl">
            {title}
          </p>
          <p className="max-w-xl text-base text-[#4D6B65] sm:text-lg">
            {tagline}
          </p>
        </div>

        {children && <div className="mt-4 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

