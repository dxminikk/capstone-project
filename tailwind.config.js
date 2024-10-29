/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        markazi: ["MarkaziText", "serif"]
      },
      colors: {
        dark: "rgba(51,51,51, <alpha-value>)",
        light: "rgba(237,239,238, <alpha-value>)",
        primary: "rgba(244,206,20, <alpha-value>)",
        secondary: "rgba(73,94,87, <alpha-value>)"
      }
    }
  },
  plugins: []
}
