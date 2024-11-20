/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
  theme: {
    extend: {
      animation: {
        rotateText: "rotateText 1s ease-in-out",
      },
      keyframes: {
        rotateText: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(179deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro", "autumn", "acid", "bumblebee", "light", "corporate"],
  },
};
