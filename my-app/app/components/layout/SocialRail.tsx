"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  download?: boolean;
};

const links: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bryan-gunawan-a537132b9/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M6.94 7.5A1.94 1.94 0 1 1 5 5.56 1.94 1.94 0 0 1 6.94 7.5ZM5.4 18.5h3.08V9.5H5.4Zm5.26-9h3v1.23h.05a3.29 3.29 0 0 1 2.96-1.63c3.16 0 3.75 2.08 3.75 4.79v4.61h-3.08v-4.09c0-.98 0-2.25-1.37-2.25s-1.58 1.07-1.58 2.17v4.17H10.7Z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:bryangunawan.dev@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 4-8 5L4 9V7l8 5 8-5Z"
        />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "/resume.txt",
    download: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 3a1 1 0 0 1 1 1v8.6l2.3-2.3 1.4 1.4-4.7 4.7-4.7-4.7 1.4-1.4 2.2 2.2V4a1 1 0 0 1 1-1Zm-7 14h14v2H5Z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/manineedtosleep",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.8 1.2 1.8 1.2 3 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"
        />
      </svg>
    ),
  },
];

export default function SocialRail() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pointer-events-none hidden h-full flex-col items-center gap-4 lg:flex"
    >
      <div className="h-8 w-px bg-zinc-300/70 dark:bg-white/20" />
      <div className="pointer-events-auto flex flex-col gap-3">
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            download={link.download}
            rel={link.external ? "noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.3 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/80 text-xs font-semibold text-zinc-600 shadow-[0_18px_45px_-40px_rgba(15,23,42,0.6)] backdrop-blur transition-colors hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:text-white"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <div className="flex-1" />
      <div className="h-24 w-px bg-zinc-300/70 dark:bg-white/20" />
    </motion.div>
  );
}
