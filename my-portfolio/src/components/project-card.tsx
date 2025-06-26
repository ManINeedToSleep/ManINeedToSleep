"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import type { ProjectType } from "@/types/project"

interface ProjectCardProps {
  project: ProjectType
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.2)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Animated rune border */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-500/0 rounded-t-lg"
          animate={{
            borderColor: isHovered
              ? ["rgba(147, 51, 234, 0)", "rgba(147, 51, 234, 0.3)", "rgba(147, 51, 234, 0)"]
              : "rgba(147, 51, 234, 0)",
          }}
          transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <h3 className="font-serif text-lg md:text-xl text-purple-200">{project.title}</h3>
        </div>
      </div>

      <div className="p-3 md:p-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-1 md:gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-200 border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-purple-100/80 text-xs md:text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

        <motion.button
          className="w-full bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white py-2 px-4 rounded-md font-serif transition-all duration-200 text-sm md:text-base"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Summon Details
        </motion.button>
      </div>
    </motion.div>
  )
}
