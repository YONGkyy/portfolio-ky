/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        darkPurpleBody: "#11071F",
        darkPurpleHeader: "#1A0B2D",
        darkPurpleFooter: "#1A0B2D",
        lightPurple: "#A78BFA",
        lightPurpleHover: "#C4B5FD",
      },
      keyframes: {
        glow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },

        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
