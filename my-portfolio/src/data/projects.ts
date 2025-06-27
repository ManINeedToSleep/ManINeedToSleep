import type { ProjectType } from "@/types/project"

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Doki Doki Productivity Companion",
    description:
      "An anime-themed AI productivity tool featuring Pomodoro timing, goal tracking, and real-time analytics with virtual companions. Built with React, TypeScript, and AI integration.",
    technologies: ["React", "TypeScript", "AI/ML", "Tailwind CSS", "Node.js"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://dokidoki-productivity.vercel.app",
    githubUrl: "https://github.com/ManINeedToSleep/DokiDoki_Productivity_CompanionV2",
    featured: true,
  },
  {
    id: "2",
    title: "Nexus Social Platform",
    description:
      "A full-stack social media platform for creators with real-time messaging, content sharing, and analytics dashboard. Features user authentication, file uploads, and responsive design.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://nexus-social.vercel.app",
    githubUrl: "https://github.com/ManINeedToSleep/Nexus-Social",
    featured: true,
  },
  {
    id: "3",
    title: "Launchpad Philly Dashboard",
    description:
      "Internal dashboard for Launchpad Philly featuring sprint-based project management, team collaboration tools, and real-time analytics for startup development.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Node.js", "Chart.js"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://launchpad-philly.com",
    githubUrl: "https://github.com/ManINeedToSleep/launchpad-dashboard",
    featured: true,
  },
  {
    id: "4",
    title: "Bentley Systems 3D Viewer",
    description:
      "Enterprise-grade 3D model viewer for Bentley Systems, improving interaction with complex engineering data through advanced visualization and data processing.",
    technologies: ["Three.js", "React", "TypeScript", "WebGL", "Node.js"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://bentley-systems.com",
    githubUrl: "https://github.com/ManINeedToSleep/bentley-3d-viewer",
  },
  {
    id: "5",
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js, featuring 3D animations, dark mode, and interactive components showcasing my development skills.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://bryangunawan.dev",
    githubUrl: "https://github.com/ManINeedToSleep/portfolio",
  },
  {
    id: "6",
    title: "Weather Analytics App",
    description:
      "Weather forecasting application with location-based predictions, historical data analysis, and interactive charts for weather pattern visualization.",
    technologies: ["React", "OpenWeather API", "Chart.js", "TypeScript", "CSS"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://weather-analytics.vercel.app",
    githubUrl: "https://github.com/ManINeedToSleep/weather-app",
  },
]
