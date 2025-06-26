"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.1 + Math.random() * 0.3, 0.5, 0.1 + Math.random() * 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* 404 with mystical styling */}
          <motion.h1
            className="font-serif text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 mb-4"
            animate={{
              textShadow: [
                "0 0 0 rgba(147, 51, 234, 0)",
                "0 0 20px rgba(147, 51, 234, 0.5)",
                "0 0 0 rgba(147, 51, 234, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            404
          </motion.h1>

          <motion.h2
            className="font-serif text-3xl md:text-4xl text-purple-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Lost in the Nightreign
          </motion.h2>

          <motion.p
            className="text-purple-100/80 text-lg mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The path you seek has been consumed by the eternal storm. The shadows have claimed this realm.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white border border-purple-500/50"
              size="lg"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Sanctuary
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-purple-500/50 text-purple-200 hover:bg-purple-900/20"
              size="lg"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retrace Steps
              </button>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mystical rune circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/20 rounded-full -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/20 rounded-full -z-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
    </div>
  )
}
