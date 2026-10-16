import type { Metadata } from "next";
import { bebasNeue } from "./fonts";
import "./globals.css";

const title = "Sauer Tattoos | Tatuagem Autoral no Rio de Janeiro";
const description =
  "Sauer Tattoos — projetos autorais de tatuagem no Rio de Janeiro, com foco em realismo, Black & Grey, composição e identidade.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Sauer Tattoos",
    images: [
      {
        url: "/images/sauer-og-logo.png",
        width: 1200,
        height: 630,
        alt: "Sauer Tattoos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/images/sauer-og-logo.png",
        alt: "Sauer Tattoos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={bebasNeue.variable}>
        {children}
      </body>
    </html>
  );
}
