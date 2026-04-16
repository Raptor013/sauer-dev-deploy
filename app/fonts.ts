import { Alata, Bebas_Neue, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const boldonse = localFont({
  src: "./fonts/Boldonse-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-boldonse",
});

export const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alata",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
});
