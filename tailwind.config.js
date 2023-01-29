/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "hsl(0, 0%, 52%)", //Light mode input
          200: "hsl(0, 0%, 98%)", // Light mode background
        },
        white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
        blue: {
          100: "hsl(200, 15%, 8%)", // Light mode text
          200: "hsl(207, 26%, 17%)", // Dark Mode Background
          300: "hsl(209, 23%, 22%)", // Dark Mode Elements
        },
      },
      boxShadow: {
        custom1: "0px 10px 60px rgba(38, 45, 118, 0.08)",
      },
    },
  },
  plugins: [],
};
