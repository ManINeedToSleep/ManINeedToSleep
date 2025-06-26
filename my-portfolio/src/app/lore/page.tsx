import { ThemeToggle } from "@/components/moonlight-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { loreEntries } from "@/data/lore"

export default function LorePage() {
  return (
    <main className="container relative px-4 py-16 mx-auto">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-purple-300/70 hover:text-purple-200 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return to Grimoire</span>
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-400">
          The Grimoire
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-500 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {loreEntries.map((entry, index) => (
          <div
            key={index}
            className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={entry.image || "/placeholder.svg"}
                alt={entry.title}
                width={600}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="font-serif text-2xl text-purple-200">{entry.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-purple-100/80 leading-relaxed">{entry.excerpt}</p>
              <div className="mt-4 flex justify-end">
                <Link href={`#${entry.id}`} className="text-purple-400 hover:text-purple-300 font-serif text-sm">
                  Read the full tale...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
