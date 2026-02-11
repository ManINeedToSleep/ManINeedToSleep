"use client";

import { useState } from "react";

export default function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("[contact] submit");
    setStatus("sending");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      console.log("[contact] sending", payload);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || "Failed to send message.");
      }

      event.currentTarget.reset();
      setStatus("sent");
      console.log("[contact] sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
      console.log("[contact] error", error);
    }
  };
  return (
    <div id="contact" className="space-y-8">
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
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Name
            </span>
            <input
              name="name"
              className="rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-sm text-zinc-700 outline-none transition focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Company
            </span>
            <input
              name="company"
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
            name="message"
            rows={5}
            required
            className="rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-sm text-zinc-700 outline-none transition focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
            placeholder="What are you building? How can I help?"
          />
        </label>
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            {status === "sent" && "Message sent. Thanks for reaching out!"}
            {status === "sending" && "Sending message..."}
            {status === "idle" && "Your message goes straight to my inbox."}
            {status === "error" && (errorMessage || "Something went wrong.")}
          </p>
          <button
            className="primary-cta inline-flex items-center justify-center rounded-full border border-zinc-900/20 bg-zinc-900 px-5 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            type="submit"
            disabled={status === "sending"}
            onClick={() => console.log("[contact] click")}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}
