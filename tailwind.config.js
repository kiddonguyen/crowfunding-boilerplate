module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#3A3A43",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        iconColor: "#A2A2A8",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        grayLight: "#F6F6F6",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        darkBg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
      },
      boxShadow: {
        sdprimary: "10px 10px 20px 0px rgba(218, 213, 213, 0.15)",
      },
    },
  },
  plugins: [],
};
