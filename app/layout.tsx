import type { Metadata } from "next";
import { Bebas_Neue, Boldonse } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-boldonse",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sauer.tattoos",
  description:
    "Landing page artística e brutalista para o estúdio sauer.tattoos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bebasNeue.variable} ${boldonse.variable}`}>
        {children}
      </body>
    </html>
  );
}
