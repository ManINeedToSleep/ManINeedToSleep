"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  FileJson,
  Flame,
  Globe,
  Layout,
  Server,
  Terminal,
  Braces,
  Layers,
  Cpu,
  FileCode,
} from "lucide-react"

interface SkillIconProps {
  name: string
  icon: React.ReactNode
  delay?: number
}

interface SkillCategoryProps {
  title: string
  skills: { name: string; icon: React.ReactNode }[]
  delay?: number
}

export function SkillIcon({ name, icon, delay = 0 }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2 bg-black/30 border border-purple-500/20 rounded-lg p-4 hover:border-purple-400/40 transition-colors"
    >
      <div className="p-3 bg-purple-900/30 rounded-full text-purple-300">{icon}</div>
      <span className="text-purple-200 text-sm font-medium">{name}</span>
    </motion.div>
  )
}

export function SkillCategory({ title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg"
    >
      <h3 className="font-serif text-2xl text-purple-200 mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} delay={delay + index * 0.05} />
        ))}
      </div>
    </motion.div>
  )
}

export function SkillIcons() {
  const frontendSkills = [
    { name: "Next.js", icon: <Layers className="w-6 h-6" /> },
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "JavaScript", icon: <FileJson className="w-6 h-6" /> },
    { name: "TypeScript", icon: <FileCode className="w-6 h-6" /> },
    { name: "HTML", icon: <Globe className="w-6 h-6" /> },
    { name: "CSS", icon: <Layout className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Braces className="w-6 h-6" /> },
    { name: "Framer Motion", icon: <Layers className="w-6 h-6" /> },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Express", icon: <Terminal className="w-6 h-6" /> },
    { name: "Python", icon: <Cpu className="w-6 h-6" /> },
    { name: "Firebase", icon: <Flame className="w-6 h-6" /> },
  ]

  const databaseSkills = [
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
    { name: "MySQL", icon: <Database className="w-6 h-6" /> },
    { name: "Supabase", icon: <Database className="w-6 h-6" /> },
  ]

  return (
    <div className="space-y-8">
      <SkillCategory title="Frontend Technologies" skills={frontendSkills} delay={0} />
      <SkillCategory title="Backend Technologies" skills={backendSkills} delay={0.2} />
      <SkillCategory title="Database Technologies" skills={databaseSkills} delay={0.4} />
    </div>
  )
}
