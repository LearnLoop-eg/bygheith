import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Self-hosted (OFL): Archivo variable with width axis, Alexandria Arabic for the name.
const archivo = localFont({
  src: [
    {
      path: "../fonts/archivo-wdth.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const alexandria = localFont({
  src: "../fonts/alexandria-arabic-700.woff2",
  weight: "700",
  variable: "--font-alexandria",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#cf7f68",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bygheith.com"),
  title: {
    default: "Gheith | Founder & Operator",
    template: "%s | By Gheith",
  },
  description:
    "Gheith, founder & operator. Founder & CEO of LearnLoop, partner at Beyond Reason, and a decade across brand, ecommerce and performance in MENA. Play the long game.",
  openGraph: {
    title: "Gheith | Founder & Operator",
    description:
      "Founder & operator building ventures across MENA. LearnLoop, Beyond Reason, and a decade of marketing, played like golf.",
    url: "https://www.bygheith.com",
    siteName: "By Gheith",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "By Gheith" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${alexandria.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
