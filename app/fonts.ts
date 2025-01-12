import { Manrope } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});
