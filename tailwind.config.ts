// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        '3xl': '1792px'
      },
      colors: {
        primary: '#facc15', // yellow-400
        dark: '#0a0a0a',    // black
        secondary: '#18181b' // zinc-900
      }
    },
  },
  plugins: [],
}