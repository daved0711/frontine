/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#008542",
        secondary: "#d9a925",
        tertiary: "#3B5897",
        hover: "#1573E5",
        wrapper: "#F2F2F2",
      },
      fontFamily: {
        Raleway: "Raleways",
      },
      
    },
  },
  plugins: [],
};
