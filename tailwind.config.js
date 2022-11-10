/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        headerBg: "url('./assets/headerbg.png')",
        rightBets: "url('./assets/rightbetsbg.webp')",
        dreamTeamBg: "url('./assets/djbg.png')",
        findUs: "url('./assets/findus.jpg')",
      },
      fontFamily: {
        logoText: "'Inter Tight', sans-serif",
        mainFont: "'Inter Tight', sans-serif",
      },
      boxShadow: {
        stepBox: "5px 5px 20px #e6e6e6,-5px -5px 20px #ffffff",
      },
      backgroundColor: {
        philosophyBg: "#FAF8F5",
      },
    },
  },
  plugins: [],
};
