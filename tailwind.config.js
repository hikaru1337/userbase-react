/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothamprobold: ["gothamprobold", "sans-serif"],
        gothampromedium: ["gothampromedium", "sans-serif"],
        gothamprolight: ["gothamprolight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
