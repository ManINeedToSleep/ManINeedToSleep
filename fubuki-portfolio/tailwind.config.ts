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
        'fubuki-white': '#FFFFFF',
        'fubuki-light-blue': '#A0D2DB', // A pleasant light blue
        'fubuki-primary-blue': '#60A5FA', // A slightly stronger blue for primary actions/links
        'fubuki-dark-blue': '#1E3A8A', // For text or darker elements
        'fubuki-light-gray': '#F3F4F6', // For backgrounds like sections
        'fubuki-gray': '#D1D5DB',      // For borders or subtle dividers
        'fubuki-text-primary': '#1F2937', // Dark gray for primary text
        'fubuki-text-secondary': '#4B5563', // Lighter gray for secondary text
        // Add more Fubuki-specific accent colors later (e.g., orange, yellow)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default body font
        display: ['Zen Kurenaido', 'sans-serif'], // For headings
        flair: ['Sarina', 'cursive'], // For special accent text
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
