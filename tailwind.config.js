/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#5E3BEE",
        body: "#1C1E53",
        heading: "#282938",
        bgShade: "#F5FCFF",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
