import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/content/**/*.{md,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#E6FFF7",
          100: "#BDF4EB",
          300: "#6CE8D9",
          500: "#2ED7C4",
          700: "#0E9F91",
        },
        sand: {
          50: "#FFF9F4",
          100: "#F6EDE6",
          300: "#EBD7CB",
        },
        blush: {
          50: "#FAE9E2",
          100: "#F5D9CF",
        },
        forest: {
          600: "#2A4E49",
          700: "#1C3C37",
        },
        ink: {
          900: "#1C2A27",
          700: "#2F4944",
          500: "#4D6B65",
        },
        cloud: {
          50: "#F7FBFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-minty-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "mint-lg": "0 16px 40px -20px rgba(46,215,196,0.45)",
        "mint-card": "0 18px 45px -35px rgba(28,42,39,0.65)",
      },
    },
  },
  plugins: [],
};

export default config;

