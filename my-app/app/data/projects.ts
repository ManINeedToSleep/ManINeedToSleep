export type Project = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  system: string;
  decisions: string;
  outcome: string;
  capabilities: string[];
};

export const projects: Project[] = [
  {
    id: "ops-console",
    name: "Ops Console",
    summary:
      "Unified operational dashboard consolidating alerting, queue health, and deploy status.",
    problem:
      "On-call triage required hopping between 4 tools with no shared state or context.",
    system:
      "Event-driven aggregation layer with typed incident model and normalized status timeline.",
    decisions:
      "Chose server-driven filters and optimistic UI over client-only caching to keep data consistent.",
    outcome:
      "Reduced mean time to identify by 32%; future work is finer-grained role scoping.",
    capabilities: [
      "UI orchestration",
      "State management",
      "Data modeling",
      "Performance considerations",
    ],
  },
  {
    id: "case-tracker",
    name: "Case Tracker",
    summary:
      "Workflow surface for multi-step approvals with auditable transitions and notifications.",
    problem:
      "Legacy email chains had no visibility into stage ownership or transition history.",
    system:
      "Finite-state workflow engine with explicit transitions, guarded by role-based rules.",
    decisions:
      "Modeled transitions as data to allow admin edits without code changes.",
    outcome:
      "Eliminated manual status updates; next step is bulk actions with conflict resolution.",
    capabilities: [
      "State management",
      "Data modeling",
      "Realtime or async systems",
    ],
  },
  {
    id: "inventory-sim",
    name: "Inventory Simulator",
    summary:
      "Forecasting tool to explore supply constraints and reorder policies.",
    problem:
      "Planning teams lacked a fast way to test scenarios without spreadsheet drift.",
    system:
      "Scenario graph with deterministic replay and snapshot-based memoization.",
    decisions:
      "Optimized for input latency by precomputing aggregate curves.",
    outcome:
      "Cut scenario setup time from hours to minutes; next is exportable audit trails.",
    capabilities: [
      "Visualization and interaction",
      "Performance considerations",
      "Data modeling",
    ],
  },
];
