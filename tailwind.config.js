/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#183D3D",
        secondary: "#93B1A6",
        alternate: "#5C8374",
      },
    },
  },
  plugins: [],
};

// https://colorhunt.co/palette/040d12183d3d5c837493b1a6
