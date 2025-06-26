"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Only show first 3 projects on homepage
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-16 md:py-20 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-blue-300 mb-4">
            Arcane Projects
          </h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
          <p className="text-purple-100/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Behold the artifacts of my creation. Each project is a spell woven with code and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-purple-500/50 text-purple-200 hover:bg-purple-900/20 w-full sm:w-auto"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
