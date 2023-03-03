/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        facebook: "#1877f2",
        twitter: "#1da1f2",
        instagram: "#e1306c",
        youtube: "#ff0000",
      },
      darkMode:{
        Bg:"white",
        cardBg:"#f0f3fa",
        cardHover:"#e1e3f0",
        headerBg:"#f8f9fe"
      }
    },
  },
  plugins: [],
};

// colors:{
//   // bg:{
//   //   bgLight:"#f8f9ff",
//   //   cardLight:"#f1f3fa",
//   // },
//   facebook:"blue",
// },
