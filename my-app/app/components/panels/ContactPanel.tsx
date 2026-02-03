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
      <form
        className="rounded-2xl border border-white/40 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
        action="https://mail.google.com/mail/?view=cm&fs=1&to=bryangunawan.dev@gmail.com"
        method="GET"
        target="_blank"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Name
            </span>
            <input
              name="su"
              className="rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-sm text-zinc-700 outline-none transition focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Company
            </span>
            <input
              name="cc"
              className="rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-sm text-zinc-700 outline-none transition focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
              placeholder="Company or team"
            />
          </label>
        </div>
        <label className="mt-4 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Message
          </span>
          <textarea
            name="body"
            rows={5}
            className="rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-sm text-zinc-700 outline-none transition focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
            placeholder="What are you building? How can I help?"
          />
        </label>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            Opens Gmail compose in a new tab.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-full border border-zinc-900/20 bg-zinc-900 px-5 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
