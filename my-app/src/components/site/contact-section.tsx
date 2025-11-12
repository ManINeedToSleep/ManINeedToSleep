"use client";

import { useState } from "react";

interface ContactSectionProps {
  heading: string;
  description: string;
}

export function ContactSection({ heading, description }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    // Simulate async submission while we wire a backend later.
    setTimeout(() => {
      console.info("Contact form submission (stub)", Object.fromEntries(data.entries()));
      setStatus("sent");
      form.reset();
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-blush-50/60 via-sand-100/40 to-transparent dark:from-[#1a3733]/80 dark:via-[#112523]/70 dark:to-transparent" />
        <div className="absolute left-[-12%] top-1/3 h-72 w-72 rounded-full bg-mint-100/35 blur-[150px] dark:bg-forest-600/45" />
        <div className="absolute right-[-8%] bottom-0 h-80 w-80 rounded-full bg-mint-50/45 blur-[180px] dark:bg-forest-700/50" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[1.2fr_auto] md:items-center lg:px-16">
        <div className="rounded-3xl border border-[#f1ede6]/70 bg-white/85 p-8 shadow-[0_20px_50px_-38px_rgba(28,42,39,0.65)] backdrop-blur md:p-10 dark:border-[#274f49] dark:bg-forest-700/70">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2ED7C4] dark:text-[#9CF1E5]">
            Contact
          </p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-semibold text-[#1C2A27] dark:text-[#EAFBF7]">
            {heading}
          </h2>
          <p className="mt-3 text-base text-[#4D6B65] dark:text-[#CDE9E3]">{description}</p>

          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="contact-hint"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[#1C2A27] dark:text-[#EAFBF7]">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Minty visitor"
                className="mt-2 w-full rounded-2xl border border-[#d6f7ef] bg-white px-4 py-3 text-base text-[#1C2A27] shadow-sm transition focus:border-[#2ED7C4] focus:outline-none focus:ring-2 focus:ring-[#BDF4EB] dark:border-[#2b554d] dark:bg-forest-700/80 dark:text-[#EAFBF7] dark:focus:border-[#2ED7C4]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-[#1C2A27] dark:text-[#EAFBF7]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-[#d6f7ef] bg-white px-4 py-3 text-base text-[#1C2A27] shadow-sm transition focus:border-[#2ED7C4] focus:outline-none focus:ring-2 focus:ring-[#BDF4EB] dark:border-[#2b554d] dark:bg-forest-700/80 dark:text-[#EAFBF7]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[#1C2A27] dark:text-[#EAFBF7]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about the project you have in mind…"
                className="mt-2 w-full rounded-2xl border border-[#d6f7ef] bg-white px-4 py-3 text-base text-[#1C2A27] shadow-sm transition focus:border-[#2ED7C4] focus:outline-none focus:ring-2 focus:ring-[#BDF4EB] dark:border-[#2b554d] dark:bg-forest-700/80 dark:text-[#EAFBF7]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p id="contact-hint" className="text-xs text-[#4D6B65] dark:text-[#CDE9E3]">
                I usually respond within 2–3 business days. Required fields are marked with love.
              </p>
              <button
                type="submit"
                className="rounded-full bg-[#2ED7C4] px-6 py-3 text-sm font-semibold text-[#1C2A27] shadow-sm transition hover:bg-[#27c2b2] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#2ED7C4]/40 dark:focus-visible:ring-offset-[#122624]"
                disabled={status === "submitting"}
              >
                {status === "sent" ? "Message sent!" : status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>

        <aside className="relative flex flex-col items-center justify-center gap-6 text-center">
          <div className="pointer-events-none absolute -top-12 left-[-30px] h-32 w-32 rounded-full bg-mint-100/50 blur-2xl dark:bg-forest-600/60" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#2ED7C4] to-[#6CE8D9] text-white shadow-lg dark:from-[#1e5c55] dark:to-[#1a4741]">
            <span className="text-lg font-semibold">Let’s talk</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-3 text-sm text-[#2ED7C4] dark:text-[#9CF1E5]">
            <li className="rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur dark:bg-forest-700/70">GitHub</li>
            <li className="rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur dark:bg-forest-700/70">LinkedIn</li>
            <li className="rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur dark:bg-forest-700/70">Email</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

