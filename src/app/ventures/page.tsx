import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import VenturesSpread from "@/components/home/VenturesSpread";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The things Ahmed Gheith builds and runs: LearnLoop, a peer-to-peer skill-exchange platform for MENA, and Beyond Reason, a premium apparel brand.",
};

export default function VenturesPage() {
  return (
    <main>
      <PageIntro
        title="The things I build and run."
        intro="I stopped just advising and started building. These are the ventures I own, where the marketing craft points at something of my own."
        image="/images/shoot/laptop-look.jpg"
        imageAlt="Ahmed Gheith at work outdoors"
        imagePos="60% 40%"
      />
      <VenturesSpread header={false} />
    </main>
  );
}
