/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nates': ['Nantes'],
      
      },
      colors: {
        'comon': '#2042B6',
      },
      maxWidth: {
        'continer': '1340px',
      }

    },
  },
  plugins: [],
}