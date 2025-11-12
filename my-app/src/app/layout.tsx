import "./globals.css";
import "@/styles/prose.css";
import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import site from "@/config/site";
import IntroGate from "@/components/site/intro-gate";

const nunito = Nunito({
  variable: "--font-minty-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const metadataBase = (() => {
  try {
    return site.url ? new URL(site.url) : undefined;
  } catch {
    return undefined;
  }
})();

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
  metadataBase,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    creator: site.twitter,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${geistMono.variable} min-h-screen bg-white text-[#1C2A27] antialiased`}
      >
        <IntroGate>{children}</IntroGate>
      </body>
    </html>
  );
}

