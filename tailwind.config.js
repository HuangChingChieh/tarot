/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        blue: "#4F75FF",
        black: "#000",
      },
      backgroundImage: {
        "global-1": "url('/img/BG_1.png')",
        "global-2": "url('/img/BG_2.png')",
      },
      boxShadow: {
        card: "0 0 25px 15px #4F75FF55, inset 0 0 25px 15px #4F75FF55",
        step: "0 0 3.5px 3px #4F75FF55, inset 0 0 3.5px 3px #4F75FF55",
      },
    },
  },
  plugins: [],
  safelist: ["shadow-card", "shadow-step", "h-full"],
};
