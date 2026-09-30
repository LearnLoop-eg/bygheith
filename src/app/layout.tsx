import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Preloader from "@/components/motion/Preloader";

// Self-hosted, OFL licensed.
const mona = localFont({
  src: "../fonts/mona-sans.woff2",
  weight: "200 900",
  variable: "--font-mona",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "75% 125%" }],
});
const geist = localFont({
  src: "../fonts/geist.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f1f45",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bygheith.com"),
  title: {
    default: "Ahmed Gheith | ByGheith",
    template: "%s | ByGheith",
  },
  description:
    "Ahmed Gheith: founder of LearnLoop, partner at Beyond Reason, leading marketing at Core Livings, Mountain View. A decade of brand, ecommerce and performance marketing in MENA. Play the long game.",
  openGraph: {
    title: "Ahmed Gheith | ByGheith",
    description:
      "Founder of LearnLoop. Partner at Beyond Reason. Leading marketing at Core Livings, Mountain View. Played like golf.",
    url: "https://www.bygheith.com",
    siteName: "ByGheith",
    type: "website",
    images: [{ url: "/images/shoot/golf-cap.jpg", width: 1467, height: 2200 }],
  },
  twitter: { card: "summary_large_image", title: "Ahmed Gheith | ByGheith" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${mona.variable} ${geist.variable}`}>
        <SmoothScroll />
        <Preloader />
        <Nav />
        {children}
        <Footer />
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
