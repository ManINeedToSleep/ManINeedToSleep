"use client"

export function SkillsPreview() {
  return (
    <section className="py-20 relative bg-background">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-blue-300 mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
          <p className="text-purple-100/70 mt-4 max-w-2xl mx-auto">
            Interested in working together or want to chat? Reach out below!
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 flex flex-col items-center gap-6 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <a href="mailto:bryanwillsonbwg@gmail.com" className="text-purple-200 hover:underline text-lg font-medium">
              bryanwillsonbwg@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/bryan-gunawan-a537132b9/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-lg font-medium">
              linkedin.com/in/bryangunawan
            </a>
          </div>
          <a
            href="mailto:bryanwillsonbwg@gmail.com"
            className="inline-block bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-lg border border-purple-500/50 transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}
