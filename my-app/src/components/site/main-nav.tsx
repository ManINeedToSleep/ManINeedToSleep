"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Contact" },
  { href: "#other", label: "Other" },
];

interface MainNavProps {
  brand?: string;
}

export function MainNav({ brand = "Neo" }: MainNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "transition-shadow duration-300",
        "backdrop-blur-md",
        scrolled
          ? "bg-white/80 shadow-[0_6px_12px_-10px_rgba(28,42,39,0.35)]"
          : "bg-white/40",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="#top"
          className="relative text-lg font-semibold text-[#1C2A27] transition hover:text-[#2ED7C4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        >
          {brand}
        </Link>

        <nav aria-label="Main navigation" className="hidden gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-[#4D6B65] transition hover:text-[#1C2A27] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[#2ED7C4] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6f7ef] text-[#1C2A27] shadow-sm transition hover:border-[#2ED7C4] hover:text-[#2ED7C4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-4 focus-visible:ring-offset-white md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="sr-only">Open navigation menu</span>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

