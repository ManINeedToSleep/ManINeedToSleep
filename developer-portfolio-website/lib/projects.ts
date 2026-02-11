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
    slug: "orbital-dashboard",
    title: "Orbital Dashboard",
    description:
      "A real-time analytics dashboard built for monitoring system health across distributed microservices. Features live data streams, customizable widgets, and dark-mode-first design.",
    longDescription:
      "Orbital Dashboard is a comprehensive monitoring solution designed for engineering teams running distributed microservices. It provides real-time visibility into system health through customizable widget panels, live WebSocket data streams, and intelligent alerting. The interface was built with a dark-mode-first approach, prioritizing readability during extended monitoring sessions.",
    techStack: ["Next.js", "TypeScript", "D3.js", "WebSocket", "Redis", "Docker"],
    category: "Full-Stack",
    year: "2025",
    featured: true,
    href: "/projects/orbital-dashboard",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Real-time WebSocket data streaming with sub-100ms latency",
      "Customizable widget grid with drag-and-drop layout persistence",
      "Intelligent alerting system with configurable thresholds",
      "Dark-mode-first design optimized for monitoring environments",
    ],
  },
  {
    id: "02",
    slug: "void-commerce",
    title: "Void Commerce",
    description:
      "Headless e-commerce platform with a custom storefront. Integrated payment processing, inventory management, and a CMS for content-driven product pages.",
    longDescription:
      "Void Commerce is a headless e-commerce solution that decouples the storefront from the backend, enabling maximum flexibility in presentation while maintaining robust transaction processing. The platform features a custom-built CMS for content-driven product storytelling, real-time inventory tracking, and seamless Stripe integration for payment processing.",
    techStack: ["React", "Node.js", "Stripe", "PostgreSQL", "GraphQL", "Tailwind"],
    category: "E-Commerce",
    year: "2024",
    featured: true,
    href: "/projects/void-commerce",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Headless architecture with GraphQL API layer",
      "Custom CMS for content-driven product pages",
      "Real-time inventory management across multiple warehouses",
      "Stripe integration with subscription and one-time payment support",
    ],
  },
  {
    id: "03",
    slug: "chronicle-editor",
    title: "Chronicle Editor",
    description:
      "A collaborative markdown editor with real-time sync, version history, and AI-assisted writing tools. Designed for teams who value clean documentation.",
    longDescription:
      "Chronicle Editor reimagines collaborative documentation with a focus on developer experience. It combines a clean markdown editing interface with real-time collaboration, version history, and AI-powered writing assistance. The editor supports custom plugins, syntax highlighting for 40+ languages, and exports to multiple formats.",
    techStack: ["Next.js", "Supabase", "AI SDK", "Tailwind", "Tiptap", "Y.js"],
    category: "SaaS",
    year: "2024",
    featured: true,
    href: "/projects/chronicle-editor",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Real-time collaboration powered by Y.js CRDT",
      "AI-assisted writing with context-aware suggestions",
      "Version history with visual diff comparison",
      "Custom plugin architecture for extensibility",
    ],
  },
  {
    id: "04",
    slug: "signal-protocol",
    title: "Signal Protocol",
    description:
      "Open-source notification system that unifies push, email, and in-app alerts through a single API. Built for developer experience and reliability.",
    longDescription:
      "Signal Protocol is an open-source notification infrastructure that provides a unified API for managing push notifications, email alerts, and in-app messaging. Designed with developer experience as the primary concern, it features comprehensive SDKs, detailed analytics, and a visual template builder for non-technical team members.",
    techStack: ["TypeScript", "Redis", "Docker", "REST API", "Bull MQ", "React Email"],
    category: "Open Source",
    year: "2024",
    featured: true,
    href: "/projects/signal-protocol",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Unified API for push, email, and in-app notifications",
      "Visual template builder with live preview",
      "Queue-based architecture for reliable delivery",
      "Comprehensive analytics and delivery tracking",
    ],
  },
  {
    id: "05",
    slug: "prism-design-system",
    title: "Prism Design System",
    description:
      "A component library and design system built for consistency across multiple products. Includes tokens, documentation site, and Figma integration.",
    longDescription:
      "Prism is a design system that bridges the gap between design and development teams. It includes a comprehensive component library, design tokens that sync between Figma and code, an interactive documentation site, and automated visual regression testing to ensure consistency across products.",
    techStack: ["React", "Storybook", "Figma API", "CSS Variables", "Chromatic"],
    category: "Design System",
    year: "2023",
    featured: false,
    href: "/projects/prism-design-system",
    githubUrl: "#",
    highlights: [
      "40+ accessible components with comprehensive variants",
      "Figma-to-code token synchronization pipeline",
      "Interactive documentation with live code examples",
      "Automated visual regression testing with Chromatic",
    ],
  },
  {
    id: "06",
    slug: "pathfinder-cli",
    title: "Pathfinder CLI",
    description:
      "A developer productivity CLI tool that automates project scaffolding, environment setup, and common development workflows.",
    longDescription:
      "Pathfinder is a CLI tool designed to eliminate repetitive setup tasks for development teams. It automates project scaffolding with opinionated templates, manages environment configuration across multiple services, and provides shortcuts for common development workflows like database migrations and deployment.",
    techStack: ["Node.js", "Commander.js", "Inquirer", "Shell", "TypeScript"],
    category: "Developer Tools",
    year: "2023",
    featured: false,
    href: "/projects/pathfinder-cli",
    githubUrl: "#",
    highlights: [
      "Interactive project scaffolding with 10+ templates",
      "Environment management across development, staging, and production",
      "Plugin system for team-specific workflow automation",
      "Cross-platform support for macOS, Linux, and Windows",
    ],
  },
  {
    id: "07",
    slug: "drift-weather",
    title: "Drift Weather",
    description:
      "A minimal weather application with focus on beautiful data visualization and hyperlocal forecasting. Built as a design-focused side project.",
    longDescription:
      "Drift Weather is a side project exploring the intersection of data visualization and weather forecasting. It provides hyperlocal weather data through beautifully rendered charts and animations, making weather information feel less utilitarian and more experiential.",
    techStack: ["Next.js", "Framer Motion", "Chart.js", "OpenWeather API"],
    category: "Side Project",
    year: "2023",
    featured: false,
    href: "/projects/drift-weather",
    liveUrl: "#",
    highlights: [
      "Beautiful animated weather visualizations",
      "Hyperlocal forecasting with hourly precision",
      "Responsive design that adapts to weather conditions",
      "Offline support with service worker caching",
    ],
  },
]

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
]
