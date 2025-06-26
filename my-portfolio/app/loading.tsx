"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-32 h-32 border-2 border-purple-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 border-2 border-blue-400/50 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Center orb */}
        <motion.div
          className="absolute inset-8 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Lightning effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 rgba(147, 51, 234, 0)",
              "0 0 30px rgba(147, 51, 234, 0.5)",
              "0 0 0 rgba(147, 51, 234, 0)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="absolute bottom-1/3 text-center">
        <motion.p
          className="font-serif text-xl text-purple-200"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Awakening the Nightreign...
        </motion.p>
      </div>
    </div>
  )
}
