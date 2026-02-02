"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Project } from "../../data/projects";

type ProjectsPanelProps = {
  projects: Project[];
  onOpen: (id: string) => void;
};

export default function ProjectsPanel({ projects, onOpen }: ProjectsPanelProps) {
  const [query, setQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const languageOptions = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((project) => {
      project.languages.forEach((item) => unique.add(item));
    });
    return ["all", ...Array.from(unique).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesSearch =
        !search ||
        project.name.toLowerCase().includes(search) ||
        project.summary.toLowerCase().includes(search);
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((item) => project.languages.includes(item));
      return matchesSearch && matchesLanguage;
    });
  }, [projects, query, selectedLanguages]);

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Projects
        </p>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Case studies focused on decisions, tradeoffs, and measurable outcomes.
        </p>
        <div className="flex flex-col gap-3">
          <label className="flex w-full items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
            <span className="text-xs uppercase tracking-[0.2em]">Search</span>
            <input
              className="w-full bg-transparent text-sm text-zinc-700 placeholder:text-zinc-400 outline-none dark:text-zinc-100"
              placeholder="Project name or summary"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="relative">
            <button
              className="flex w-full items-center justify-between rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
              onClick={() => setIsFilterOpen((open) => !open)}
              type="button"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Filter</span>
              <span className="ml-auto text-xs text-zinc-500">
                {selectedLanguages.length === 0
                  ? "All"
                  : `${selectedLanguages.length} selected`}
              </span>
              <span className="pl-3 text-xs">▾</span>
            </button>
            {selectedLanguages.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedLanguages.map((item) => (
                  <button
                    key={item}
                    className="rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs text-zinc-600 transition hover:border-white/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                    onClick={() =>
                      setSelectedLanguages((current) =>
                        current.filter((value) => value !== item)
                      )
                    }
                    type="button"
                  >
                    {item} ×
                  </button>
                ))}
                <button
                  className="rounded-full border border-white/50 px-3 py-1 text-xs text-zinc-500 transition hover:border-white/70 dark:border-white/10"
                  onClick={() => setSelectedLanguages([])}
                  type="button"
                >
                  Clear
                </button>
              </div>
            )}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="mt-3 w-full rounded-2xl border border-white/40 bg-white/90 p-3 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.7)] backdrop-blur dark:border-white/10 dark:bg-slate-900/90"
                >
                  <div className="flex items-center justify-between pb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    <span>Filter</span>
                    {selectedLanguages.length > 0 && (
                      <button
                        className="text-[10px] text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                        onClick={() => setSelectedLanguages([])}
                        type="button"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {languageOptions
                      .filter((option) => option !== "all")
                      .map((option) => {
                        const checked = selectedLanguages.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setSelectedLanguages((current) =>
                                checked
                                  ? current.filter((item) => item !== option)
                                  : [...current, option]
                              )
                            }
                            className={`rounded-full border px-3 py-1 text-xs transition ${
                              checked
                                ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                                : "border-white/40 bg-white/70 text-zinc-700 hover:border-white/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <motion.div className="grid gap-4 md:grid-cols-2" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
              {project.languages.map((language) => (
                <span
                  key={`${project.id}-${language}`}
                  className="rounded-full border border-white/60 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
                >
                  {language}
                </span>
              ))}
            </div>
            <button
              className="mt-5 rounded-full border border-zinc-900/20 bg-zinc-900 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-zinc-900/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              onClick={() => onOpen(project.id)}
              type="button"
            >
              Open case study
            </button>
          </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
