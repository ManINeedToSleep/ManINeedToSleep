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
      className="bg-white py-24 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[1.2fr_auto] md:items-center lg:px-16">
        <div className="rounded-3xl bg-[#F7FBFA] p-8 shadow-[0_16px_44px_-36px_rgba(28,42,39,0.7)] md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2ED7C4]">
            Contact
          </p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-semibold text-[#1C2A27]">
            {heading}
          </h2>
          <p className="mt-3 text-base text-[#4D6B65]">{description}</p>

          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="contact-hint"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[#1C2A27]">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Minty visitor"
                className="mt-2 w-full rounded-2xl border border-[#d6f7ef] bg-white px-4 py-3 text-base text-[#1C2A27] shadow-sm transition focus:border-[#2ED7C4] focus:outline-none focus:ring-2 focus:ring-[#BDF4EB]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-[#1C2A27]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-[#d6f7ef] bg-white px-4 py-3 text-base text-[#1C2A27] shadow-sm transition focus:border-[#2ED7C4] focus:outline-none focus:ring-2 focus:ring-[#BDF4EB]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[#1C2A27]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about the project you have in mind…"
                className="mt-2 w-full rounded-2xl border border-[#d6f7ef] bg-white px-4 py-3 text-base text-[#1C2A27] shadow-sm transition focus:border-[#2ED7C4] focus:outline-none focus:ring-2 focus:ring-[#BDF4EB]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p id="contact-hint" className="text-xs text-[#4D6B65]">
                I usually respond within 2–3 business days. Required fields are marked with love.
              </p>
              <button
                type="submit"
                className="rounded-full bg-[#2ED7C4] px-6 py-3 text-sm font-semibold text-[#1C2A27] shadow-sm transition hover:bg-[#27c2b2] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7FBFA]"
                disabled={status === "submitting"}
              >
                {status === "sent" ? "Message sent!" : status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>

        <aside className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#2ED7C4] to-[#6CE8D9] text-white shadow-lg">
            <span className="text-lg font-semibold">Let’s talk</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-3 text-sm text-[#2ED7C4]">
            <li className="rounded-full bg-white px-4 py-2 shadow-sm">GitHub</li>
            <li className="rounded-full bg-white px-4 py-2 shadow-sm">LinkedIn</li>
            <li className="rounded-full bg-white px-4 py-2 shadow-sm">Email</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

