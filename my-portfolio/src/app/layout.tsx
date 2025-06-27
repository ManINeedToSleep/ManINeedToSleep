import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Young_Serif as FontSerif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { AudioPlayer } from "@/components/audio-player"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Bryan Gunawan - Full-Stack Developer & Digital Architect",
    template: "%s | Bryan Gunawan - Developer Portfolio",
  },
  description:
    "Bryan Gunawan is a skilled full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my portfolio of innovative web applications and digital experiences.",
  keywords: [
    "Bryan Gunawan",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Web Applications",
    "Digital Architect",
    "Software Engineer",
  ],
  authors: [{ name: "Bryan Gunawan" }],
  creator: "Bryan Gunawan",
  publisher: "Bryan Gunawan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bryangunawan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bryangunawan.dev",
    title: "Bryan Gunawan - Full-Stack Developer & Digital Architect",
    description:
      "Explore Bryan Gunawan's portfolio showcasing innovative web applications built with React, Next.js, and modern technologies.",
    siteName: "Bryan Gunawan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bryan Gunawan - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Gunawan - Full-Stack Developer & Digital Architect",
    description:
      "Explore Bryan Gunawan's portfolio showcasing innovative web applications built with React, Next.js, and modern technologies.",
    images: ["/og-image.jpg"],
    creator: "@bryangunawan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bryan Gunawan",
              jobTitle: "Full-Stack Developer",
              description:
                "Skilled full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies",
              url: "https://bryangunawan.dev",
              sameAs: [
                "https://github.com/bryangunawan",
                "https://linkedin.com/in/bryangunawan",
                "https://twitter.com/bryangunawan",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Full-Stack Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Technology",
              },
              worksFor: {
                "@type": "Organization",
                name: "Tech Startup Inc.",
              },
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["dark", "moonlight"]}>
          <div className="relative min-h-screen bg-background">
            <Navbar />
            {children}
            <AudioPlayer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
