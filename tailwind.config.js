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
          primary: "#7c3aed",
          secondary: "#3b82f6",
          header: "linear-gradient(to right, #f0f0f0, #e5e5e5)",
          glass: "rgba(255, 255, 255, 0.1)",
          glassBorder: "rgba(255, 255, 255, 0.2)",
        },
        dark: {
          bg: "#0f172a",
          text: "#111111",
          primary: "#a78bfa",
          secondary: "#60a5fa",
          header: "linear-gradient(to right, #1e293b, #111827)",
          glass: "rgba(255, 255, 255, 0.05)",
          glassBorder: "rgba(255, 255, 255, 0.2)",
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "24px",
      },
    },
  },
  plugins: [],
};
