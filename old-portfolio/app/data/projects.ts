export type Project = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  system: string;
  decisions: string;
  outcome: string;
  capabilities: string[];
  languages: string[];
  repoUrl?: string;
  liveUrl?: string;
  private?: boolean;
};

export const projects: Project[] = [
  {
    id: "doki-doki-companion",
    name: "DokiDoki Productivity Companion V2",
    summary:
      "Gamified productivity app with anime-inspired companions, focus timers, goals, and achievements.",
    problem:
      "Wanted a playful but structured system to stay focused and track momentum over time.",
    system:
      "Companion system, focus timer, real-time chat, goals, achievements, and stats dashboard.",
    decisions:
      "Used Firebase for auth/data and OpenAI for companion responses to keep iteration fast.",
    outcome:
      "A customizable, motivating experience with personal stats and companion feedback.",
    capabilities: [
      "Scalable UI architecture",
      "State management",
      "Realtime systems",
      "Performance and UX",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Firebase",
      "OpenAI API",
      "Framer Motion",
      "Recharts",
    ],
    repoUrl: "https://github.com/ManINeedToSleep/DokiDoki_Productivity_CompanionV2",
    liveUrl: "https://doki-doki-productivity-companion-v2.vercel.app",
  },
  {
    id: "phishing-sim",
    name: "Phishing Simulation Tool",
    summary:
      "Phishing simulation tool with realistic scenarios, feedback, and analytics.",
    problem:
      "Needed a hands-on way for new analysts to practice identifying phishing attempts.",
    system:
      "Scenario flow with Gmail-style templates, feedback responses, and a D3.js dashboard.",
    decisions:
      "Built with mock data first to iterate on UX and analytics before backend work.",
    outcome:
      "Interactive training flow with clear explanations and visibility into performance.",
    capabilities: ["Scalable UI architecture", "Data modeling", "Performance"],
    languages: ["JavaScript", "HTML", "CSS", "D3.js"],
    repoUrl: "https://github.com/ManINeedToSleep/PhishingSimulationTool",
  },
  {
    id: "project-photobook",
    name: "Project Photobook",
    summary:
      "Responsive photo flipbook with smooth animations, likes, and sharing tools.",
    problem:
      "Wanted a modern, interactive gallery to practice advanced UI motion and layout.",
    system:
      "Card-based gallery with theme toggles, local storage preferences, and feedback UI.",
    decisions:
      "Kept it static-first for speed while adding rich interactions and accessibility.",
    outcome:
      "A polished, demo-friendly gallery with animation, persistence, and UX details.",
    capabilities: ["UI performance", "Interaction design", "Scalable UI architecture"],
    languages: ["HTML5", "CSS3", "JavaScript", "Web Storage API"],
    repoUrl: "https://github.com/ManINeedToSleep/Project-Photobook",
  },
  {
    id: "sql-commerce",
    name: "SQL Commerce",
    summary:
      "E-commerce database schema with customers, products, orders, and order details.",
    problem:
      "Needed a clean relational model for commerce data and analysis-ready queries.",
    system:
      "Normalized schema with relationships across customers, orders, products, and items.",
    decisions:
      "Focused on clarity, referential integrity, and extensibility for future features.",
    outcome:
      "A solid SQL foundation with documented queries and extension ideas.",
    capabilities: ["Data modeling", "Scalable schema design"],
    languages: ["SQL", "MySQL"],
    repoUrl: "https://github.com/ManINeedToSleep/SQL-Commerce",
  },
  {
    id: "project-scp",
    name: "Project SCP",
    summary:
      "SCP Foundation access portal with terminal UI, clearance system, and SCP files.",
    problem:
      "Wanted an immersive, themed interface to practice UI storytelling and systems.",
    system:
      "Login flow, clearance-based content, SCP entries, personnel files, and a terminal.",
    decisions:
      "Built reusable web components and simulated data to keep it extensible.",
    outcome:
      "A rich, interactive portal with multiple themes and terminal interactions.",
    capabilities: ["Scalable UI architecture", "Interaction systems"],
    languages: ["HTML", "CSS", "JavaScript", "Web Components"],
    repoUrl: "https://github.com/ManINeedToSleep/Project_SCP",
  },
  {
    id: "omnilytics",
    name: "Omnilytics",
    summary:
      "Unified social analytics dashboard for Instagram, Twitter/X, Facebook, and LinkedIn.",
    problem:
      "Teams waste time switching between platform dashboards without a single view of performance.",
    system:
      "Next.js dashboard with analytics visualizations, account connection flows, and Firebase-backed data.",
    decisions:
      "Mocked data early to validate UX while wiring Firebase Auth and Firestore foundations.",
    outcome:
      "A scalable analytics foundation with planned AI recommendations and scheduling.",
    capabilities: [
      "Scalable UI architecture",
      "Data visualization",
      "Realtime systems",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Firebase",
      "Recharts",
    ],
    repoUrl: "https://github.com/ManINeedToSleep/Omnilytics",
    liveUrl: "https://omnilytics.vercel.app",
  },
  {
    id: "car-wash-scouter",
    name: "Car Wash Scouter",
    summary:
      "Location intelligence app for scoring car wash sites using demographics and traffic data.",
    problem:
      "Evaluating car wash locations requires merging demographics, traffic, and competition data.",
    system:
      "Next.js app with Google Places, Playwright scrapers, Prisma + PostgreSQL, and scoring engine.",
    decisions:
      "Combined automated scraping with configurable scoring weights to keep studies consistent.",
    outcome:
      "Actionable site scoring with saved studies, maps, and competitor classifications.",
    capabilities: ["Scalable systems", "Data modeling", "Performance"],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Playwright",
      "Google Maps API",
    ],
    private: true,
  },
];
