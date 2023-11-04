/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#F2994A"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      }
    },
  },
  plugins: [require("daisyui")],
}

