import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://my-lgbodu4j0-manineedtosleeps-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bryan Gunawan — Full Stack Engineer",
    template: "%s · Bryan Gunawan",
  },
  description:
    "Full-stack engineer focused on scalable, user-centered web experiences. Projects, case studies, and contact.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Bryan Gunawan — Full Stack Engineer",
    description:
      "Full-stack engineer focused on scalable, user-centered web experiences. Projects, case studies, and contact.",
    url: siteUrl,
    siteName: "Bryan Gunawan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Gunawan — Full Stack Engineer",
    description:
      "Full-stack engineer focused on scalable, user-centered web experiences. Projects, case studies, and contact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
