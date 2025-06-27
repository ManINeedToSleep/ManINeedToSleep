"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 md:py-20 relative bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-sm md:max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg border border-purple-500/30 shadow-lg">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/AnotherPicture.png"
                  alt="Developer portrait"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Animated rune border */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-500/0 rounded-lg"
                animate={{
                  borderColor: ["rgba(147, 51, 234, 0)", "rgba(147, 51, 234, 0.3)", "rgba(147, 51, 234, 0)"],
                  boxShadow: [
                    "0 0 0 rgba(147, 51, 234, 0)",
                    "0 0 15px rgba(147, 51, 234, 0.3)",
                    "0 0 0 rgba(147, 51, 234, 0)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 border border-purple-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 border border-purple-500/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-blue-300 mb-6">
              Character Sheet
            </h2>
            <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-purple-400 to-blue-500 mb-6"></div>

            <div className="space-y-4 text-purple-100/80 text-sm md:text-base">
              <p>
                A wanderer from the digital realms, I began my journey as a humble code apprentice. Through trials of
                logic and creativity, I honed my craft in the ancient arts of web development.
              </p>
              <p>
                My quest has led me through treacherous debugging sessions and glorious moments of creation. Now, as a
                seasoned developer, I craft digital experiences that bridge the gap between functionality and fantasy.
              </p>
              <p>My code is my spell, and each project is an incantation bringing new worlds to life.</p>
            </div>

            <div className="mt-6 md:mt-8">
              <Button
                asChild
                variant="outline"
                className="border-purple-500/50 text-purple-200 hover:bg-purple-900/20 w-full sm:w-auto"
              >
                <Link href="/about">
                  Read Full Lore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
