"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="py-16 md:py-20 relative bg-black/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-blue-300 mb-4">
            Send a Message Scroll
          </h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
          <p className="text-purple-100/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Have a quest for me? Send a message and I shall respond with haste.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 md:p-6 shadow-lg"
          >
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-purple-100 block text-sm">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-black/30 border-purple-500/30 focus:border-purple-400 text-purple-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-purple-100 block text-sm">
                  Your Magical Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/30 border-purple-500/30 focus:border-purple-400 text-purple-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-purple-100 block text-sm">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="bg-black/30 border-purple-500/30 focus:border-purple-400 text-purple-100 min-h-[120px] md:min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-purple-500/30 flex items-center justify-center gap-2">
              <Mail className="w-4 md:w-5 h-4 md:h-5 text-purple-400" />
              <span className="text-purple-100 text-sm md:text-base">developer@example.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-purple-500/50 text-purple-200 hover:bg-purple-900/20 w-full sm:w-auto"
            >
              <Link href="/contact">
                More Contact Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
