import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        visby: ["var(--font-visby)"],
        poppins: ["var(--font-poppins)"],
      },

      colors: {
        blue: {
          default: "#1e2e84",
        },
        white: {
          default: "#fffcfa",
        },
        orange: {
          default: "#ff9828",
        },
      },

      keyframes: {
        eventsSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        "sliding-events": "eventsSlider 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
