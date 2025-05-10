import type { Metadata } from "next";
import { Poppins, Zen_Kurenaido, Sarina } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const zenKurenaido = Zen_Kurenaido({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-kurenaido",
});

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sarina",
});

export const metadata: Metadata = {
  title: "ManINeedToSleep | Foxcore Developer",
  description: "Bryan Willson Gunawan's personal portfolio. A Foxcore Developer powered by Coffee and Anime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${zenKurenaido.variable} ${sarina.variable}`}>
      <body
        className={`font-sans antialiased flex flex-col min-h-screen bg-fubuki-light-gray text-fubuki-text-primary`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
