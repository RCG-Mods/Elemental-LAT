import type { Metadata, Viewport } from "next";
import { Orbitron, Noto_Sans_JP } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

// Official Elemental LAT typeface per RCG brand guide (Orbitron).
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

// Japanese accent type for katakana/kanji decorative labels (vaporwave touch).
const notoJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Servidor de Rol FiveM`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "FiveM",
    "rol",
    "roleplay",
    "servidor",
    "Elemental LAT",
    "RP",
    "GTA V",
    "LATAM",
  ],
  openGraph: {
    title: `${site.name} — Servidor de Rol FiveM`,
    description: site.description,
    type: "website",
    locale: "es_LA",
  },
};

export const viewport: Viewport = {
  themeColor: "#07040f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${orbitron.variable} ${notoJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
