/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'endeavour': {
          'dark': '#20437D',      // Deep blue from logo
          'blue': '#2D6C9B',       // Medium blue from logo
          'white': '#FFFFFF',
          'black': '#000000',
        },
      },
    },
  },
  plugins: [],
}

