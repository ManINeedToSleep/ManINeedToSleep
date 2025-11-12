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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand-50/90 via-[#edfbf5]/85 to-transparent dark:from-[#122b27]/80 dark:via-[#0f2622]/70 dark:to-transparent" />
      <div className="pointer-events-none absolute -left-28 -top-16 h-80 w-80 rounded-full bg-mint-100/40 blur-3xl dark:bg-forest-600/50" />
      <div className="pointer-events-none absolute right-[-12%] top-24 h-72 w-72 rounded-full bg-blush-50/50 blur-[150px] dark:bg-forest-700/40" />
      <div className="pointer-events-none absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-mint-50/40 blur-[140px] dark:bg-forest-600/50" />
      <div className="pointer-events-none absolute left-12 top-12 hidden h-32 w-32 -rotate-6 rounded-full border border-dashed border-mint-300/40 dark:border-[#3a6f67]/40 md:block" />
      <div className="pointer-events-none absolute right-16 top-20 hidden h-44 w-44 rotate-12 border border-dashed border-blush-50/60 dark:border-[#2a514c]/60 md:block" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center sm:px-10 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#2ED7C4]">
          Welcome
        </p>

        <div className="relative flex items-center justify-center">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-white/90 bg-gradient-to-br from-[#2ED7C4] via-[#6CE8D9] to-[#b5f3ea] text-white shadow-[0_16px_40px_-20px_rgba(46,215,196,0.65)] dark:border-[#16322f] dark:from-[#1f5c56] dark:via-[#1d4b45] dark:to-[#143733]">
            <span className="text-xl font-semibold text-white dark:text-mint-100">{profileLabel}</span>
            <div className="pointer-events-none absolute -left-6 -top-6 h-12 w-12 rotate-12 rounded-full border border-[#2ED7C4]/40 dark:border-[#2a7169]/50" />
            <div className="pointer-events-none absolute -right-5 bottom-10 h-8 w-8 rounded-full border border-[#2ED7C4]/40 dark:border-[#2a7169]/50" />
          </div>
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-4">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-[#1C2A27] dark:text-white sm:text-5xl lg:text-6xl"
          >
            {name}
          </h1>
          <p className="text-lg font-semibold text-forest-700/80 dark:text-mint-100 sm:text-xl">
            {title}
          </p>
          <p className="max-w-xl text-base text-[#4D6B65] dark:text-[#CDE9E3] sm:text-lg">
            {tagline}
          </p>
        </div>

        {children && <div className="mt-4 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

