"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TechScene } from "@/components/nightreign-scene"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Scene as Background */}
      <div className="absolute inset-0 z-0">
        <TechScene />
      </div>

      {/* Dark overlay for content readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="container relative z-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400/50 shadow-2xl">
                <Image
                  src="/ProfilePicture.png"
                  alt="Bryan Gunawan - Full-Stack Developer Portrait"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>

              {/* Tech rings */}
              <motion.div
                className="absolute inset-0 border border-blue-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border border-purple-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(59, 130, 246, 0.2)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 0 rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-xs uppercase tracking-widest text-blue-300 border border-blue-500/50 px-3 py-1 rounded-full">
                Full-Stack Engineer
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-purple-300 to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bryan Gunawan
            </motion.h1>

            <motion.h2
              className="font-serif text-xl md:text-2xl text-blue-200/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full-Stack Developer & Digital Architect
            </motion.h2>

            <motion.p
              className="text-blue-100/70 text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Crafting innovative digital experiences with modern web technologies. I specialize in React, Next.js, and
              TypeScript to build scalable applications that solve real-world problems. From concept to deployment, I
              bring ideas to life through code.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-blue-400/30 flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
