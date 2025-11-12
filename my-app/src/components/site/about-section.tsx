interface AboutSectionProps {
  heading: string;
  body: string;
  highlights?: string[];
  images?: { src: string; alt: string }[];
}

export function AboutSection({
  heading,
  body,
  highlights = [],
  images = [
    { src: "/images/about-1.png", alt: "Minty workspace detail" },
    { src: "/images/about-2.png", alt: "Creative tools and leaves" },
  ],
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[minmax(0,_0.9fr)_1.1fr] md:items-center lg:px-16">
        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute -left-12 top-10 h-36 w-36 rounded-full bg-[#d8fdf4]/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-4 h-28 w-28 rounded-full bg-[#c9f8ed]/60 blur-2xl" />

          <div className="relative flex w-full max-w-sm items-center justify-center">
            <div className="relative h-60 w-48 rounded-3xl border border-[#dff7f0] bg-white/90 shadow-[0_25px_45px_-40px_rgba(28,42,39,0.6)] backdrop-blur">
              <img
                src={images[0]?.src}
                alt={images[0]?.alt ?? "About illustration"}
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 h-48 w-40 rounded-3xl border border-[#dff7f0] bg-white/90 shadow-[0_25px_45px_-40px_rgba(28,42,39,0.6)] backdrop-blur">
              <img
                src={images[1]?.src}
                alt={images[1]?.alt ?? "About illustration secondary"}
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#dff7f0] bg-white/90 p-8 shadow-[0_25px_45px_-40px_rgba(28,42,39,0.55)] backdrop-blur md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#2ED7C4]">
            Short About Me
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-2xl font-semibold text-[#1C2A27] md:text-3xl"
          >
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4D6B65]">{body}</p>

          {highlights.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#1C2A27]">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#e7faf4] bg-[#F7FBFA] px-4 py-3 text-[#4D6B65] shadow-sm"
                >
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2ED7C4]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

