import type { Metadata } from "next";
import { alata, bebasNeue, boldonse } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "sauer.tattoos",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bebasNeue.variable} ${boldonse.variable} ${alata.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
