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
          default: "#190773",
        },
        white: {
          default: "#fdfcfb",
        },
      },
    },
  },
  plugins: [],
};
export default config;
