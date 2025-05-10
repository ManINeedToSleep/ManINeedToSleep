import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luminous-primary-blue': '#2C3E66',  // Base background / dominant UI color – twilight mist
        'luminous-glow-blue': '#85C5FF',     // Accent / button highlight – glowing petals
        'luminous-deep-navy': '#141D2B',    // Dark mode background / cards / footer
        'luminous-mist-gray': '#BDC7DA',    // Text on dark backgrounds / subtle borders
        'luminous-ghost-white': '#F0F6FF',   // High contrast headings / call-to-action text
        'luminous-lilac-tint': '#A3A9E6',   // Secondary accents, link hovers, decorative UI
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        display: ['Zen Kurenaido', 'sans-serif'], 
        flair: ['Sarina', 'cursive'], 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      borderRadius: {
        'profile': '50%',
      }
    },
  },
  plugins: [],
};
export default config;
