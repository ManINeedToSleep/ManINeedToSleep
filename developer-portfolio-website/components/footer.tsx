import Link from "next/link"

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="relative px-6 pb-8 pt-24">
      <div className="mx-auto max-w-5xl">
        {/* Top divider */}
        <div className="h-px bg-border/20 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left - identity */}
          <div className="flex flex-col gap-1">
            <span className="font-display text-sm font-semibold tracking-wide text-foreground">
              BRYAN GUNAWAN
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Developer
            </span>
          </div>

          {/* Center - nav links */}
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right - year */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground/30 tracking-wider">
              2026
            </span>
            <span className="h-px w-4 bg-border/30" />
            <span className="font-mono text-[10px] text-muted-foreground/30 tracking-wider uppercase">
              Crafted with intention
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
