import { ViewState } from "../state/ui";

export type ViewConfig = {
  id: Exclude<ViewState["view"], "project_detail">;
  label: string;
  description: string;
  accent: string;
};

export const viewConfigs: ViewConfig[] = [
  {
    id: "idle",
    label: "Overview",
    description: "Context and intent",
    accent: "from-pink-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "projects_overview",
    label: "Projects",
    description: "Case studies and systems",
    accent: "from-emerald-400/20 via-cyan-400/10 to-transparent",
  },
  {
    id: "skills_map",
    label: "Capabilities",
    description: "Skills map",
    accent: "from-amber-400/20 via-orange-400/10 to-transparent",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Availability and links",
    accent: "from-sky-400/20 via-indigo-400/10 to-transparent",
  },
];
