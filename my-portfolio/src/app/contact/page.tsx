import { ThemeToggle } from "@/components/moonlight-toggle"
import { ArrowLeft, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Bryan Gunawan - Full-Stack Developer",
  description:
    "Get in touch with Bryan Gunawan for web development projects, collaborations, or professional inquiries. Available for freelance and full-time opportunities.",
  openGraph: {
    title: "Contact Bryan Gunawan - Full-Stack Developer",
    description:
      "Get in touch with Bryan Gunawan for web development projects, collaborations, or professional inquiries.",
    url: "https://bryangunawan.dev/contact",
  },
  alternates: {
    canonical: "https://bryangunawan.dev/contact",
  },
}

export default function ContactPage() {
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
          Contact Bryan Gunawan
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-500 mt-2"></div>
        <p className="text-purple-100/80 mt-4 max-w-2xl">
          Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg">
          <h2 className="font-serif text-2xl text-purple-200 mb-6">Let's Connect</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
              <div>
                <h3 className="font-serif text-purple-200">Email</h3>
                <p className="text-purple-100/80">bryan.gunawan@example.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
              <div>
                <h3 className="font-serif text-purple-200">Location</h3>
                <p className="text-purple-100/80">Available for remote work worldwide</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-black/30 border border-purple-500/20 rounded-lg">
            <p className="text-purple-100/80 italic text-sm">
              "I'm always excited to discuss new opportunities and innovative projects. Let's create something
              extraordinary together."
            </p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg">
          <h2 className="font-serif text-2xl text-purple-200 mb-6">Send a Message</h2>
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
                Your Email
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
                placeholder="Tell me about your project or inquiry..."
                className="bg-black/30 border-purple-500/30 focus:border-purple-400 text-purple-100 min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
