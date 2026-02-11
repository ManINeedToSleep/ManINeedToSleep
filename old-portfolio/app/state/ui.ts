import { create } from "zustand";

export type ViewState =
  | { view: "idle" }
  | { view: "projects_overview" }
  | { view: "project_detail"; projectId: string }
  | { view: "skills_map" }
  | { view: "contact" };

type UIState = {
  state: ViewState;
  setView: (state: ViewState) => void;
  openProject: (projectId: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  state: { view: "idle" },
  setView: (state) => set({ state }),
  openProject: (projectId) =>
    set({ state: { view: "project_detail", projectId } }),
}));
