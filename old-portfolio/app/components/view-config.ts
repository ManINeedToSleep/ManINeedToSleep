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
    accent: "from-[var(--accent-1)] via-[var(--accent-2)] to-transparent",
  },
  {
    id: "projects_overview",
    label: "Projects",
    description: "Case studies and systems",
    accent: "from-[var(--accent-1)] via-[var(--accent-2)] to-transparent",
  },
  {
    id: "skills_map",
    label: "Capabilities",
    description: "Skills map",
    accent: "from-[var(--accent-1)] via-[var(--accent-2)] to-transparent",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Availability and links",
    accent: "from-[var(--accent-1)] via-[var(--accent-2)] to-transparent",
  },
];
