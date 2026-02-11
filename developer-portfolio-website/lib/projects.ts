export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: string
  year: string
  featured: boolean
  href: string
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "doki-doki-productivity-companion",
    title: "DokiDoki Productivity Companion",
    description:
      "A flagship productivity system with focus timers, progress tracking, and companion-style interactions that blend structure with personality.",
    longDescription:
      "DokiDoki Productivity Companion is a flagship application that pairs a structured productivity system with interactive companion elements. It combines focus timers, progress tracking, goals, and gamified feedback to keep users engaged while maintaining a clean, reliable workflow. The project highlights state management, UI animation, and scalable frontend architecture in a full-stack build.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Featured",
    year: "2025",
    featured: true,
    href: "/projects/doki-doki-productivity-companion",
    liveUrl: "https://doki-doki-productivity-companion-v2.vercel.app",
    githubUrl: "https://github.com/ManINeedToSleep/DokiDoki_Productivity_CompanionV2",
    highlights: [
      "Gamified focus system with companion-style interaction",
      "State-driven UI architecture for complex workflows",
      "Progress tracking with structured goals and feedback",
      "Animated, personality-forward interface without sacrificing clarity",
    ],
  },
  {
    id: "02",
    slug: "car-wash-scouter",
    title: "Car Wash Scouter",
    description:
      "Private client application built to support real-world operations with structured workflows and production-level requirements.",
    longDescription:
      "Car Wash Scouter is a private client project built as a full-stack application for operational tracking and management. It was developed with real requirements and production constraints, emphasizing reliability, structured data workflows, and clear UI patterns. Details are limited to protect client confidentiality.",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    category: "Featured",
    year: "2026",
    featured: true,
    href: "/projects/car-wash-scouter",
    highlights: [
      "Built for a real client with production-level expectations",
      "Structured workflows for data tracking and reporting",
      "Full-stack implementation from UI to database layer",
      "Designed for reliability and operational clarity",
    ],
  },
  {
    id: "03",
    slug: "data-interactive-element-selector",
    title: "Data Interactive Element Selector (D.I.E.S.)",
    description:
      "Interactive UI system built at Bentley Systems for selecting and manipulating data elements inside complex environments.",
    longDescription:
      "D.I.E.S. was developed during my internship at Bentley Systems as part of a professional engineering team. The project focused on interactive data selection, highlighting, and manipulation within a larger software environment. I built React and TypeScript components that emphasized performance, clarity, and responsive feedback for complex datasets.",
    techStack: ["React", "TypeScript", "UI Engineering", "Performance"],
    category: "Featured",
    year: "2025",
    featured: true,
    href: "/projects/data-interactive-element-selector",
    highlights: [
      "Interactive selection and highlighting for data elements",
      "Built within a structured engineering environment",
      "Performance-aware UI for complex datasets",
      "Focused on clarity and real-time feedback",
    ],
  },
  {
    id: "04",
    slug: "cuisine-courier",
    title: "Cuisine Courier",
    description:
      "Full-stack recipe discovery app with authentication, saved collections, and API-driven browsing.",
    longDescription:
      "Cuisine Courier is a full-stack application centered on recipe discovery and user interaction. It integrates external APIs for browsing, supports user authentication, and allows saving and organizing collections. The project highlights backend integration, database design, and clean UI composition.",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    category: "Featured",
    year: "2024",
    featured: true,
    href: "/projects/cuisine-courier",
    highlights: [
      "External API integration for recipe discovery",
      "Authentication and saved collections",
      "Full-stack data flow from UI to database",
      "User-focused interface with clear navigation",
    ],
  },
  {
    id: "05",
    slug: "dynasty-defense-alarm-system",
    title: "Dynasty Defense Alarm System",
    description:
      "Experimental alert system built to explore real-time UI feedback and monitoring workflows.",
    longDescription:
      "Dynasty Defense Alarm System is a small-scale experiment focused on monitoring UI and alert patterns. It emphasizes real-time feedback, clear state transitions, and user-focused status visibility within a compact interface.",
    techStack: ["JavaScript", "HTML", "CSS", "UI Design"],
    category: "Additional",
    year: "2024",
    featured: false,
    href: "/projects/dynasty-defense-alarm-system",
    githubUrl: "https://github.com/ManINeedToSleep",
    highlights: [
      "Focused on real-time UI feedback patterns",
      "Clear alert states and hierarchy",
      "Built to explore monitoring workflows",
    ],
  },
  {
    id: "06",
    slug: "phishguard",
    title: "PhishGuard",
    description:
      "Phishing simulation tool with realistic scenarios, feedback, and analytics for training workflows.",
    longDescription:
      "PhishGuard is an interactive training tool that helps users practice identifying phishing attempts through realistic scenarios and immediate feedback. It highlights clear UX patterns for education and reinforces safe decision-making with explanations and analytics.",
    techStack: ["JavaScript", "HTML", "CSS", "D3.js"],
    category: "Additional",
    year: "2024",
    featured: false,
    href: "/projects/phishguard",
    githubUrl: "https://github.com/ManINeedToSleep/PhishingSimulationTool",
    highlights: [
      "Scenario-driven training with realistic UI patterns",
      "Immediate feedback and learning prompts",
      "Analytics-friendly structure for outcomes",
    ],
  },
  {
    id: "07",
    slug: "sql-commerce",
    title: "SQL Commerce",
    description:
      "E-commerce database schema with clean relational modeling and analysis-ready queries.",
    longDescription:
      "SQL Commerce is a database design project that models customers, products, orders, and order details with a focus on clarity and extensibility. It demonstrates careful data modeling and clean SQL structure for analytics and reporting use cases.",
    techStack: ["SQL", "MySQL", "Data Modeling"],
    category: "Additional",
    year: "2024",
    featured: false,
    href: "/projects/sql-commerce",
    githubUrl: "https://github.com/ManINeedToSleep/SQL-Commerce",
    highlights: [
      "Normalized schema with clear relationships",
      "Query-ready structure for analytics",
      "Built for extensibility and clean data modeling",
    ],
  },
  {
    id: "08",
    slug: "project-photobook",
    title: "Project Photobook",
    description:
      "Responsive photo flipbook with smooth animations, likes, and sharing tools.",
    longDescription:
      "Project Photobook is a front-end focused build exploring interaction design and motion. It combines a responsive layout, smooth animation, and lightweight state handling to create a polished demo experience.",
    techStack: ["HTML", "CSS", "JavaScript", "UI Motion"],
    category: "Additional",
    year: "2024",
    featured: false,
    href: "/projects/project-photobook",
    githubUrl: "https://github.com/ManINeedToSleep/Project-Photobook",
    highlights: [
      "Animation-focused UI with responsive layout",
      "Interaction-driven photo experience",
      "Attention to visual details and flow",
    ],
  },
  {
    id: "09",
    slug: "project-scp",
    title: "Project SCP",
    description:
      "SCP Foundation portal with terminal-style UI, clearance system, and themed content.",
    longDescription:
      "Project SCP is a themed interface experiment focused on UI storytelling. It includes a terminal-inspired layout, clearance-based navigation, and structured content systems that emphasize immersion and interaction.",
    techStack: ["HTML", "CSS", "JavaScript", "Web Components"],
    category: "Additional",
    year: "2023",
    featured: false,
    href: "/projects/project-scp",
    githubUrl: "https://github.com/ManINeedToSleep/Project_SCP",
    highlights: [
      "Immersive terminal-inspired UI",
      "Clear information hierarchy and navigation",
      "Component-driven structure for reuse",
    ],
  },
  {
    id: "10",
    slug: "omnilytics",
    title: "Omnilytics",
    description:
      "Unified social analytics dashboard with visualization-first UI and modular panels.",
    longDescription:
      "Omnilytics is a dashboard concept focused on presenting social analytics in a unified view. It explores data visualization, modular panels, and clear hierarchy for fast decision-making.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Additional",
    year: "2025",
    featured: false,
    href: "/projects/omnilytics",
    githubUrl: "https://github.com/ManINeedToSleep/Omnilytics",
    liveUrl: "https://omnilytics.vercel.app",
    highlights: [
      "Visualization-first dashboard layout",
      "Modular panel system for analytics",
      "Firebase-backed data foundation",
    ],
  },
]

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
]
