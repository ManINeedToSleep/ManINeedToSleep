import type { ProjectType } from "@/types/project"

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Omnilytics",
    description:
      "Omnilytics provides a unified interface to track, analyze, and optimize social media performance across Instagram, Twitter/X, Facebook, and LinkedIn. The application aggregates data from these platforms into intuitive visualizations, allowing users to identify trends, compare engagement metrics, and make informed decisions. Additionally, AI-powered suggestions help optimize content strategy based on historical performance.",
    technologies: ["TypeScript", "Next.js", "Firebase", "Recharts", "AI"],
    image: "/placeholder.svg?height=300&width=600",
    liveUrl: "https://omnilytics.vercel.app",
    githubUrl: "https://github.com/ManINeedToSleep/Omnilytics",
    featured: true,
  },
  {
    id: "2",
    title: "DokiDoki Productivity Companion",
    description:
      "A DDLC-inspired productivity application with AI companions, focus timers, goal tracking, and achievement systems built with Next.js and Firebase.",
    technologies: ["Next.js", "Firebase", "AI", "TypeScript"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/DokiDoki_Productivity_CompanionV2",
    featured: true,
  },
  {
    id: "3",
    title: "Cuisine Courier",
    description:
      "Cuisine Courier is a modern recipe discovery platform with a cozy cabin kitchen aesthetic. Users can browse recipes from TheMealDB, create personalized collections, save favorites, and manage their culinary journey through an intuitive dashboard. Built with Next.js, React, TypeScript, and PostgreSQL.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/Cuisine_CourierV2",
  },
  {
    id: "4",
    title: "Character Files V2",
    description:
      "Interactive character gallery with smooth hover-to-video transitions and expanding panels. Built with HTML, CSS, JavaScript and GSAP animations.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/Character_Files-V2",
  },
  {
    id: "5",
    title: "Nexus Social",
    description:
      "Nexus Social is a modern social platform built with Next.js, React, and Firebase, featuring real-time interactions and a sleek dark UI. It offers secure authentication, dynamic posts, and instant messaging through Socket.io integration.",
    technologies: ["Next.js", "React", "Firebase", "Socket.io"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/Nexus-Social",
  },
  {
    id: "6",
    title: "FinTech App",
    description:
      "A Nordic-inspired financial management platform with secure authentication, transaction tracking, interactive analytics, and comprehensive financial planning tools, built on Next.js 14 with TypeScript and Prisma.",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/FinTech_App",
  },
  {
    id: "7",
    title: "Greenfield University Portal",
    description:
      "A comprehensive university management system built with Next.js, Prisma, and PostgreSQL that serves as a central hub for students, faculty, and administrators to manage academic activities and institutional operations.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/Greenfield_University",
  },
  {
    id: "8",
    title: "PhishGuard",
    description:
      "PhishGuard is an interactive web-based tool that helps users practice identifying phishing attempts through realistic email scenarios. It features Gmail-style templates, immediate feedback, and a dashboard with D3.js visualizations to track progress and learning outcomes.",
    technologies: ["JavaScript", "D3.js", "HTML", "CSS"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/PhishingSimulationTool",
  },
  {
    id: "9",
    title: "Dynasty Defense Alarm System",
    description:
      "A robust security solution featuring multi-floor sensor monitoring, secure access control, and real-time notifications for comprehensive fire, smoke, and heat detection in enclosed structures.",
    technologies: ["IoT", "JavaScript", "Node.js"],
    image: "/placeholder.svg?height=300&width=600",
    githubUrl: "https://github.com/ManINeedToSleep/Dynasty-Defense-Security",
  },
]
