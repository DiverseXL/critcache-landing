module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#080B0A",
        paper: "#f3f4f6",
        ash: "#9ca3af",
        crit: "#39FF6A",
        rule: "rgba(57, 255, 106, 0.25)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
