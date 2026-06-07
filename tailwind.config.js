/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-secondary': '#111827',
        'dark-card': '#1e293b',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#a855f7',
        'accent-blue': '#3b82f6',
        'accent-orange': '#f97316',
        'light-bg': '#f8fafc',
        'light-secondary': '#f1f5f9',
        'light-card': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
