/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
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
        category: `0 0 4px 4px ${blueShaodw}`,
      },
      textShadow: {
        DEFAULT: `0 0 4px ${blue}`,
      },
      maskImage: {
        DEFAULT: `linear-gradient(to right, transparent, black 30% 70%, transparent)`,
        sm: `linear-gradient(to right, transparent, black 10% 90%, transparent)`,
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
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );

      matchUtilities(
        {
          "mask-image": (value) => ({
            maskImage: value,
          }),
        },
        { values: theme("maskImage") }
      );
    }),
  ],
  safelist: [
    // "shadow-card",
    // "shadow-step",
    // "shadow-category",
    // "h-full",
    // "drop-shadow-triangle",
    "opcaity-0",
    "scale-90",
    "scale-95",
  ],
};
