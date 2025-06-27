"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{x: number, y: number, opacity: number, duration: number}>>([])

  useEffect(() => {
    setMounted(true)
    // Generate random values only on client
    setParticles(Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.3,
      duration: 8 + Math.random() * 12
    })))
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p>Page not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [particle.opacity, 0.5, particle.opacity],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* 404 with tech styling */}
          <motion.h1
            className="font-serif text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 mb-4"
            animate={{
              textShadow: [
                "0 0 0 rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 0 rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            404
          </motion.h1>

          <motion.h2
            className="font-serif text-3xl md:text-4xl text-blue-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-blue-100/80 text-lg mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The page you're looking for doesn't exist. Let's get you back on track.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-blue-700 to-green-600 hover:from-blue-600 hover:to-green-500 text-white border border-blue-500/50"
              size="lg"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-blue-500/50 text-blue-200 hover:bg-blue-900/20"
              size="lg"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/20 rounded-full -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-green-400/20 rounded-full -z-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
    </div>
  )
} 