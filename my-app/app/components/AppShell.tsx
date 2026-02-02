"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { projects } from "../data/projects";
import { useUIStore } from "../state/ui";
import AppBackdrop from "./layout/AppBackdrop";
import AppHeader from "./layout/AppHeader";
import AppSidebar from "./layout/AppSidebar";
import SocialRail from "./layout/SocialRail";
import ContactPanel from "./panels/ContactPanel";
import OverviewPanel from "./panels/OverviewPanel";
import ProjectDetailPanel from "./panels/ProjectDetailPanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import SkillsPanel from "./panels/SkillsPanel";
import { viewConfigs } from "./view-config";

const panelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function AppShell() {
  const reducedMotion = useReducedMotion();
  const uiState = useUIStore((state) => state.state);
  const setView = useUIStore((state) => state.setView);
  const openProject = useUIStore((state) => state.openProject);

  const currentProject = useMemo(() => {
    if (uiState.view !== "project_detail") {
      return undefined;
    }
    return projects.find((project) => project.id === uiState.projectId);
  }, [uiState]);

  const capabilities = useMemo(() => {
    const map = new Map<string, string[]>();
    projects.forEach((project) => {
      project.capabilities.forEach((capability) => {
        const list = map.get(capability) ?? [];
        list.push(project.name);
        map.set(capability, list);
      });
    });
    return Array.from(map.entries()).map(([capability, projectNames]) => ({
      capability,
      projectNames,
    }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-zinc-900 dark:text-zinc-100">
      <AppBackdrop />
      <div className="pointer-events-none fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
        <SocialRail />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10">
        <AppHeader
          activeView={
            uiState.view === "project_detail"
              ? "projects_overview"
              : uiState.view
          }
          onSelect={(view) => setView({ view })}
          viewConfigs={viewConfigs}
        />

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <AppSidebar activeView={uiState.view} viewConfigs={viewConfigs} />

          <main className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  uiState.view === "project_detail"
                    ? `${uiState.view}-${uiState.projectId}`
                    : uiState.view
                }
                initial={reducedMotion ? false : "hidden"}
                animate="visible"
                exit="exit"
                transition={{ duration: reducedMotion ? 0 : 0.25 }}
                variants={panelVariants}
              className="rounded-3xl border border-white/40 bg-white/85 p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.7)] backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                {uiState.view === "idle" && (
                  <OverviewPanel
                    viewConfigs={viewConfigs}
                    onSelectView={(view) => setView({ view })}
                  />
                )}
                {uiState.view === "projects_overview" && (
                  <ProjectsPanel projects={projects} onOpen={openProject} />
                )}
                {uiState.view === "project_detail" && (
                  <ProjectDetailPanel
                    project={currentProject}
                    onBack={() => setView({ view: "projects_overview" })}
                  />
                )}
                {uiState.view === "skills_map" && (
                  <SkillsPanel capabilities={capabilities} />
                )}
                {uiState.view === "contact" && <ContactPanel />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
