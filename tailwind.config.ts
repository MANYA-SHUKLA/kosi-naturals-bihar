import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdeed5',
          200: '#fbd9aa',
          300: '#f8be74',
          400: '#f49a3c',
          500: '#f17a16',
          600: '#e25f0c',
          700: '#bb480b',
          800: '#953910',
          900: '#783110',
        },
        earth: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d9c1',
          300: '#d9bf9a',
          400: '#c8a173',
          500: '#b8875a',
          600: '#a7704a',
          700: '#8a5a3e',
          800: '#714a37',
          900: '#5d3e30',
        },
        green: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce4cc',
          300: '#8fcfab',
          400: '#5cb382',
          500: '#389662',
          600: '#2a7a50',
          700: '#236242',
          800: '#1f4f37',
          900: '#1a422f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

