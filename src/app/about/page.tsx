import Image from "next/image";
import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { SplitReveal, WordScrub, ImageReveal, Rise } from "@/components/motion/Reveal";
import { credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ahmed Gheith: founder of LearnLoop, partner at Beyond Reason, leading marketing at Core Livings, Mountain View. A decade across brand, ecommerce and performance in MENA.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title="Marketer by trade. Builder by choice."
        intro="I spent a decade growing brands for other people. Now I put the same craft behind the things I own, and play every one of them like a long game."
        image="/images/shoot/call-fairway.jpg"
        imageAlt="Ahmed Gheith on a call on the fairway"
        imagePos="50% 22%"
      />

      <section className="grid gap-14 bg-chalk px-5 py-24 text-ink sm:px-8 md:grid-cols-12 md:py-36">
        <div className="md:col-span-7">
          <WordScrub className="display-light text-[8vw] md:text-[3.4vw]">
            I&apos;m Ahmed Gheith. For over ten years I&apos;ve worked on every side of
            the table in MENA marketing: the agency, the media house and the brand.
          </WordScrub>
          <Rise>
            <div className="mt-12 space-y-5 text-lg leading-relaxed text-ink/80">
              <p className="measure">
                I led social at Forbes Middle East, directed accounts at Digitology,
                ran digital growth at Cassbana and took senior digital marketing roles
                at Mountain View. I learned how brands really grow, and exactly
                where most of them stall.
              </p>
              <p className="measure">
                Then I started building. I founded LearnLoop, a peer-to-peer
                skill-exchange platform for Egypt and MENA. I became a partner at
                Beyond Reason and built its digital engine from zero. And today I
                lead marketing at Core Livings, the rentals, resale and property
                management brand inside Mountain View communities.
              </p>
              <p className="measure">
                Away from the screen, I play golf. It&apos;s the clearest metaphor I
                have for the work: precision over power, composure under pressure,
                and the patience to win over eighteen holes, not one shot.
              </p>
            </div>
          </Rise>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <ImageReveal parallax={6} className="aspect-[3/4] rounded-[18px] md:sticky md:top-28">
            <div data-inner className="absolute inset-0">
              <Image
                src="/images/shoot/call-sofa-side.jpg"
                alt="Ahmed Gheith on a call"
                fill
                sizes="(max-width: 768px) 92vw, 30vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </ImageReveal>
        </div>
      </section>

      <section className="bg-ink-2 px-5 py-28 sm:px-8 md:py-40">
        <SplitReveal as="p" className="display max-w-[15ch] text-[11vw] text-signal md:text-[6.5vw]">
          Marketing is a long game. I play to win it.
        </SplitReveal>
      </section>

      <section className="bg-chalk px-5 py-28 text-ink sm:px-8 md:py-40">
        <SplitReveal as="h2" className="display max-w-[14ch] text-[13vw] md:text-[7vw]">
          Every side of the table.
        </SplitReveal>
        <ol className="mt-16 md:mt-24">
          {credentials.map((c) => (
            <li key={c.org}>
              <Rise>
                <div className="group grid gap-3 border-t border-ink/15 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
                  <p className="display text-4xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:col-span-6 md:text-6xl md:group-hover:translate-x-3">
                    {c.org}
                  </p>
                  <p className="font-semibold md:col-span-3">{c.role}</p>
                  <p className="text-ink/75 md:col-span-3">{c.note}</p>
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
