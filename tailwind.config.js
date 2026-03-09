/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        primaryLight: "#A78BFA",
        bg: "#0F0F1A",
        surface: "#16162A",
        textBase: "#E2E8F0",
        textMuted: "#64748B",
        textSub: "#94A3B8",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
}
