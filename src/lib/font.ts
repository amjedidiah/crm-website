import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const visby = localFont({
  src: [
    {
      path: "../../public/fonts/visby/visbycf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/visby/visbycf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/visby/visbycf-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-visby",
});

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

export default visby;
