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
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Email
          </p>
          <a
            className="mt-2 block text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bryangunawan.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Compose in Gmail
          </a>
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Links
          </p>
          <div className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
            <a
              className="block hover:text-zinc-900 dark:hover:text-white"
              href="https://www.linkedin.com/in/bryan-gunawan-a537132b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="block hover:text-zinc-900 dark:hover:text-white"
              href="https://github.com/manineedtosleep"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="block hover:text-zinc-900 dark:hover:text-white"
              href="/resume.txt"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <a
        className="inline-flex items-center justify-center rounded-full border border-zinc-900/20 bg-zinc-900 px-5 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        href="mailto:bryangunawan.dev@gmail.com"
      >
        Compose email
      </a>
    </div>
  );
}
