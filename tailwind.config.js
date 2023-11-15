/** @type {import('tailwindcss').Config} */
const blue = "#4F75FF";
const blueShaodw = `${blue}55`;
export const colors = { blue, black: "#000" };

export default {
  content: [],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        "global-1": "url('/img/BG_1.png')",
        "global-2": "url('/img/BG_2.png')",
      },
      boxShadow: {
        card: `0 0 25px 15px ${blueShaodw}, inset 0 0 25px 15px ${blueShaodw}`,
        step: `0 0 3.5px 3px ${blueShaodw}, inset 0 0 3.5px 3px ${blueShaodw}`,
      },
      dropShadow: {
        triangle: [
          `0 0 2px ${blueShaodw}`,
          `0 0 2px ${blue}`,
          `0 0 2px ${blue}`,
        ],
      },
    },
  },
  plugins: [],
  safelist: ["shadow-card", "shadow-step", "h-full", "drop-shadow-triangle"],
};
