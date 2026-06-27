import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bygheith.com"),
  title: {
    default: "By Gheith — Marketing & ecommerce expert",
    template: "%s — By Gheith",
  },
  description:
    "Ahmed Gheith — marketing and ecommerce expert across MENA. Brand strategy, Shopify builds, and performance marketing. Play the long game.",
  openGraph: {
    title: "By Gheith — Marketing & ecommerce expert",
    description:
      "Marketing and ecommerce expert across MENA. Strategy, Shopify, and performance — played like golf.",
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
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
