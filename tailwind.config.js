module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shiver: {
          "0%": { transform: "translate(0, 0)" },
          "5%": { transform: "translate(-2px, -0)" },
          "7%": { transform: "translate(2px, 0)" },
          "9%": { transform: "translate(0, 0)" },
          "11%": { transform: "translate(-2px, -0)" },
          "12%": { transform: "translate(2px, 0)" },
          "13%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
        glitch: {
          "0%": {
            transform: "none",
            opacity: 1,
          },
          "7%": {
            transform: "skew(-1.5deg, -0.9deg)",
            opacity: 0.75,
          },
          "10%": {
            transform: "none",
            opacity: 1,
            "text-shadow": "0 -1px blue",
          },
          "25%": {
            transform: "scale(1.01)",
            opacity: 0.8,
          },
          "30%": {
            transform: "skew(3.8deg, -1.1deg)",
            opacity: 0.75,
          },
          "35%": {
            transform: "none",
            opacity: 1,
            "text-shadow": "-1px 0 red",
          },
          "45%": {
            transform: "scale(0.99)",
            opacity: 1,
          },
          "50%": {
            transform: "none",
            opacity: 1,
          },
          "55%": {
            transform: "skew(-1deg, 0.2deg)",
            opacity: 0.75,
          },
          "70%": {
            transform: "none",
            opacity: 1,
          },
          "85%": {
            transform: "scale(0.99)",
            opacity: 1,
            "text-shadow": "-1px 0 red",
          },
          "100%": {
            transform: "none",
            opacity: 1,
            "text-shadow": "1px 0 green",
          },
        },
      },
      animation: {
        glitch: "glitch 1.5s ease-in-out infinite",
        shiver: "shiver 3s ease-in-out infinite",
        appear: "appear 3s ease-in",
      },
    },
  },
  plugins: [],
};
