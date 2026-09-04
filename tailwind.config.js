/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        darker: '#0a0e27',
        accent: '#3b82f6',
        success: '#10b981',
        danger: '#ef4444',
      },
    },
  },
  plugins: [],
}
