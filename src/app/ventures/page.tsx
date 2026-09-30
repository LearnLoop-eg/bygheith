import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import VenturesSpread from "@/components/home/VenturesSpread";
import WorkWithMe from "@/components/home/WorkWithMe";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Ahmed Gheith's ventures: founder of LearnLoop, partner at Beyond Reason, and leading marketing at Core Livings, Mountain View.",
};

export default function VenturesPage() {
  return (
    <main>
      <PageIntro
        title="Three ventures. One long game."
        intro="A platform I founded, a sportswear label I partner in, and the marketing I lead for a living brand inside Mountain View. Different games, the same playbook: clear positioning, real numbers, patient compounding."
        image="/images/shoot/laptop-look.jpg"
        imageAlt="Ahmed Gheith at work outdoors"
        imagePos="60% 40%"
      />
      <VenturesSpread header={false} />
      <WorkWithMe light={false} />
    </main>
  );
}
