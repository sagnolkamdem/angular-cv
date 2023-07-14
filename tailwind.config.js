/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['dancing moon script', 'sans-serif'],
      }
    },
  },
  plugins: [],
}