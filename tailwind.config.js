/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in your src folder
    "./public/index.html"        // Also scan your main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}