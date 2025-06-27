export interface LoreEntry {
  id: string
  title: string
  excerpt: string
  image?: string
  content?: string
}

export const loreEntries: LoreEntry[] = [
  {
    id: "journey-begins",
    title: "The Journey Begins",
    excerpt:
      "My coding journey started at Furness Horace High School, where I first discovered my passion for technology and problem-solving through computer science classes...",
    image: "/placeholder.svg?height=300&width=600",
    content: "Full story content here...",
  },
  {
    id: "first-project",
    title: "My First Real Project",
    excerpt:
      "The Doki Doki Productivity Companion was born from my love for anime and need for better productivity tools. It became my breakthrough project, combining AI with user experience...",
    image: "/placeholder.svg?height=300&width=600",
    content: "Full story content here...",
  },
  {
    id: "launchpad-experience",
    title: "Launchpad Philly Experience",
    excerpt:
      "Joining Launchpad Philly as a Full Stack Engineer was a game-changer. Working with startups taught me rapid development, team collaboration, and real-world problem solving...",
    image: "/placeholder.svg?height=300&width=600",
    content: "Full story content here...",
  },
  {
    id: "enterprise-lessons",
    title: "Enterprise Development at Bentley",
    excerpt:
      "My time at Bentley Systems exposed me to enterprise-grade applications, complex 3D data visualization, and the challenges of working with large-scale engineering software...",
    image: "/placeholder.svg?height=300&width=600",
    content: "Full story content here...",
  },
  {
    id: "certifications",
    title: "Continuous Learning",
    excerpt:
      "I'm certified in React and Python, constantly expanding my skill set through online courses, hackathons, and personal projects. Learning never stops in tech...",
    image: "/placeholder.svg?height=300&width=600",
    content: "Full story content here...",
  },
  {
    id: "future-vision",
    title: "Looking Forward",
    excerpt:
      "I'm passionate about AI-powered applications, creative tooling, and building experiences that empower creators. The future of web development is exciting...",
    image: "/placeholder.svg?height=300&width=600",
    content: "Full story content here...",
  },
]
