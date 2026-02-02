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
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            bryan@example.com
          </p>
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Links
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            GitHub · LinkedIn · Resume
          </p>
        </div>
      </div>
    </div>
  );
}
