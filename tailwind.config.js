/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode colors (existing)
        darkPurpleBody: "#11071F",
        darkPurpleHeader: "#1A0B2D",
        darkPurpleFooter: "#1A0B2D",
        lightPurpleFooter: "#2B0D3E",
        
        // Light mode colors
        lightBody: "#F8FAFC",           // Very light gray-blue
        lightHeader: "#FFFFFF",         // Pure white
        lightFooter: "#F1F5F9",         // Light gray
        lightCard: "#FFFFFF",           // White for cards
        lightCardBorder: "#E2E8F0",     // Light border
        lightText: "#1E293B",           // Dark gray for text
        lightTextSecondary: "#64748B",  // Medium gray for secondary text
        lightAccent: "#8B5CF6",         // Purple accent (same as dark)
        lightAccentHover: "#7C3AED",    // Darker purple for hover
        lightSuccess: "#10B981",        // Green for success states
        lightWarning: "#F59E0B",        // Orange for warnings
        lightError: "#EF4444",          // Red for errors
      },
      keyframes: {
        glow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out",
        pulse: "pulse 8s ease-in-out infinite",
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
