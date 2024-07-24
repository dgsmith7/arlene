/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        backgroundLight: "#E1F3F8",
        headerLight: "#9BDAF1",
        textLight: "#212121",
        buttonBGLight: "#4773aa",
        buttonTextLight: "#F1F1F1",
        // Dark Mode Colors
        backgroundDark: "#061F4A",
        headerDark: "#212121",
        textDark: "#F1F1F1",
        buttonBGDark: "#4773aa",
        buttonTextDark: "#212121",
        // Common Colors
        alertBadBG: "#2E8540",
        alertBadText: "#212121",
        alertGoodBG: "#FF9D1E",
        alertGoodText: "#F1F1F1",
        userBG: "#0B3D91",
        userText: "#F1F1F1",
        botBG: "#4773AA",
        botText: "#212121",
        border: "#105BD8",
        textWindowBG: "AEB0B5",
      },
    },
  },
  plugins: [],
};
