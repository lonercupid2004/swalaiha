/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#fce7f3',
        lavender: '#ede9fe',
        cream: '#fffaf0',
        gold: '#d4af37',
        moon: '#c4b5fd'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        arabic: ['"Amiri"', 'serif']
      },
      boxShadow: {
        glow: '0 0 25px rgba(212, 175, 55, 0.35)'
      }
    }
  },
  plugins: []
}
