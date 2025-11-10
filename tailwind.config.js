/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // toggled via 'dark' class on <html>
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#ffffff",
          text: "#111111",
          footer: "#f3f4f6", // use light.footer
        },
        dark: {
          bg: "#0f172a",
          text: "#ffffff",
          footer: "#1e293b", // use dark.footer
        },
      },
    },
  },
  plugins: [],
};
