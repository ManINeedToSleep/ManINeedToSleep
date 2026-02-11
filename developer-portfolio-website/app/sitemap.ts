import type { MetadataRoute } from "next"

import { projects } from "@/lib/projects"
import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = ["", "/about", "/projects", "/experience", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  )

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6,
  }))

  return [...basePages, ...projectPages]
}
