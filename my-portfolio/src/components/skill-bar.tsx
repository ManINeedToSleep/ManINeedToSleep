"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  level: number
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-purple-100 font-serif">{name}</span>
        <span className="text-purple-300 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-black/30 rounded-full overflow-hidden border border-purple-500/30">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
