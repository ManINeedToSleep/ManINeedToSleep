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

const THEME_KEY = "mint-theme";

interface MainNavProps {
  brand?: string;
}

export function MainNav({ brand = "Bryan Gunawan" }: MainNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
    if (stored && stored !== theme) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.dataset.theme = theme;
    document.body.dataset.theme = theme;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeClasses =
    theme === "dark"
      ? {
          header: scrolled
            ? "bg-forest-700/90 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.65)]"
            : "bg-forest-700/70",
          brand: "text-white hover:text-mint-300 focus-visible:ring-[#2ED7C4]/40 focus-visible:ring-offset-forest-700",
          navLink:
            "group relative text-sm font-medium text-[#CDE9E3] transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2ED7C4]/40 focus-visible:ring-offset-forest-700",
          underline: "bg-[#A5F2E5]",
          themeBtn:
            "border-mint-300/40 text-mint-100 focus-visible:ring-[#2ED7C4]/30 focus-visible:ring-offset-forest-700",
          menuBtn:
            "border-mint-300/40 text-mint-100 focus-visible:ring-[#2ED7C4]/30 focus-visible:ring-offset-forest-700",
        }
      : {
          header: scrolled
            ? "bg-white/80 shadow-[0_6px_12px_-10px_rgba(28,42,39,0.35)]"
            : "bg-white/40",
          brand: "text-[#1C2A27] hover:text-[#2ED7C4] focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-white",
          navLink:
            "group relative text-sm font-medium text-[#4D6B65] transition hover:text-[#1C2A27] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-white",
          underline: "bg-[#2ED7C4]",
          themeBtn:
            "border-[#d6f7ef] text-[#1C2A27] focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-white",
          menuBtn:
            "border-[#d6f7ef] text-[#1C2A27] focus-visible:ring-[#BDF4EB] focus-visible:ring-offset-white",
        };

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "transition-shadow duration-300",
        "backdrop-blur-md",
        themeClasses.header,
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="#top"
          className={`relative text-lg font-semibold transition focus-visible:outline-none focus-visible:ring-4 ${themeClasses.brand}`}
        >
          {brand}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={themeClasses.navLink}
            >
              <span>{item.label}</span>
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-200 ease-out group-hover:scale-x-100 ${themeClasses.underline}`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${themeClasses.themeBtn}`}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? (
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            ) : (
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M8.05 15.95l-1.414 1.414m0-11.314L8.05 8.05m9.9 9.9l1.414 1.414" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 md:hidden ${themeClasses.menuBtn}`}
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
      </div>
    </header>
  );
}

