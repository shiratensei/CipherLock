/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 2 column grid
        '2': 'repeat(2, minmax(0, 1fr))',

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}