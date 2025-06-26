import { ThemeToggle } from "@/components/moonlight-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Bryan Gunawan - Full-Stack Developer Journey",
  description:
    "Learn about Bryan Gunawan's journey as a full-stack developer, from code apprentice to seasoned web development professional. Discover his background, skills, and passion for creating digital experiences.",
  openGraph: {
    title: "About Bryan Gunawan - Full-Stack Developer Journey",
    description:
      "Learn about Bryan Gunawan's journey as a full-stack developer, from code apprentice to seasoned web development professional.",
    url: "https://bryangunawan.dev/about",
  },
  alternates: {
    canonical: "https://bryangunawan.dev/about",
  },
}

export default function AboutPage() {
  return (
    <main className="container relative px-4 py-16 mx-auto">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-purple-300/70 hover:text-purple-200 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return to Portfolio</span>
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-400">
          About Bryan Gunawan
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-500 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-1">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-purple-500/30 shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Bryan Gunawan - Full-Stack Developer Portrait"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="font-serif text-xl text-purple-200">Bryan Gunawan</h2>
              <p className="text-sm text-purple-100/80">Full-Stack Developer</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg">
            <h2 className="font-serif text-2xl text-purple-200 mb-4">My Developer Journey</h2>
            <p className="text-purple-100/80 leading-relaxed">
              Hi, I'm Bryan Gunawan, a passionate full-stack developer who began my journey as a humble code apprentice.
              Through countless hours of learning, debugging, and creating, I've honed my craft in the art of web
              development. My quest has led me through challenging projects and rewarding moments of innovation.
            </p>
            <p className="text-purple-100/80 leading-relaxed mt-4">
              Today, I specialize in crafting digital experiences that seamlessly blend functionality with creativity. I
              believe that great code is like a well-crafted spell – it should be elegant, efficient, and
              transformative. Each project I work on is an opportunity to bring new ideas to life and solve real-world
              problems through technology.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg">
            <h2 className="font-serif text-2xl text-purple-200 mb-4">Professional Profile</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-purple-500/30 pb-2">
                <span className="text-purple-100">Specialization</span>
                <span className="font-serif text-purple-200">Full-Stack Development</span>
              </div>
              <div className="flex justify-between border-b border-purple-500/30 pb-2">
                <span className="text-purple-100">Primary Focus</span>
                <span className="font-serif text-purple-200">React & Next.js Applications</span>
              </div>
              <div className="flex justify-between border-b border-purple-500/30 pb-2">
                <span className="text-purple-100">Experience Level</span>
                <span className="font-serif text-purple-200">5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-100">Location</span>
                <span className="font-serif text-purple-200">Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
