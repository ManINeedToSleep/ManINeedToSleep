export default function ContactPanel() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h2 className="text-2xl font-semibold">Let&apos;s Talk</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Down to build products with personality and polish. If the team cares
          about craft, motion, and a little joy, we&apos;ll vibe.
        </p>
      </section>
      <a
        className="inline-flex items-center justify-center rounded-full border border-zinc-900/20 bg-zinc-900 px-5 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        href="mailto:bryangunawan.dev@gmail.com"
      >
        Compose email
      </a>
    </div>
  );
}
