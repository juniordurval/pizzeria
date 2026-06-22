/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D00', // A vibrant orange-red
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFB800', // A warm yellow
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold
          foreground: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
