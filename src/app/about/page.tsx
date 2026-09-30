import Image from "next/image";
import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { SplitReveal, WordScrub, ImageReveal, Rise } from "@/components/motion/Reveal";
import { credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ahmed Gheith, founder and operator. Founder & CEO of LearnLoop, partner at Beyond Reason, and a decade across brand, ecommerce and performance in MENA.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title="I build things. And I play the long game."
        image="/images/shoot/ipad-wall.jpg"
        imageAlt="Ahmed Gheith mid-conversation, tablet in hand"
        imagePos="50% 22%"
      />

      <section className="grid gap-14 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <WordScrub className="display-light text-[8vw] md:text-[3.4vw]">
            I&apos;m Ahmed Gheith, a founder and operator who&apos;s spent over a
            decade in the trenches of marketing, brand and ecommerce across the
            MENA region.
          </WordScrub>
          <Rise>
            <div className="mt-12 space-y-5 text-lg leading-relaxed text-chalk/80">
              <p className="measure">
                I started on the agency and media side: social lead at Forbes
                Middle East, account direction at Digitology, senior roles at
                Cassbana and Mountain View. I learned how brands actually grow,
                and where most of them get stuck.
              </p>
              <p className="measure">
                Then I stopped just advising and started building. Today I&apos;m
                the founder and CEO of LearnLoop, a peer-to-peer skill-exchange
                platform for Egypt and MENA. And I&apos;m a partner at Beyond
                Reason, where I built the digital strategy, online store and
                creative direction from the ground up.
              </p>
              <p className="measure">
                Away from the screen, I play golf. It&apos;s the clearest metaphor I
                have for how I work: precision over power, composure under
                pressure, and the patience to play the long game.
              </p>
            </div>
          </Rise>
        </div>
        <div className="space-y-5 md:col-span-4 md:col-start-9">
          <ImageReveal parallax={6} className="aspect-[3/4] rounded-[18px]">
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

      <section className="bg-signal px-5 py-28 text-signal-ink sm:px-8 md:py-40">
        <SplitReveal as="p" className="display max-w-[16ch] text-[11vw] md:text-[6.5vw]">
          Marketing, to me, is a long game. And I play to win it.
        </SplitReveal>
      </section>

      <section className="px-5 py-28 sm:px-8 md:py-40">
        <SplitReveal as="h2" className="display text-[13vw] md:text-[7vw]">
          A decade, three sides of the table.
        </SplitReveal>
        <ol className="mt-16 md:mt-24">
          {credentials.map((c) => (
            <li key={c.org}>
              <Rise>
                <div className="group grid gap-3 border-t border-line py-8 transition-colors duration-500 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10 md:hover:bg-ink-2">
                  <p className="display text-4xl transition-colors duration-500 md:col-span-6 md:text-6xl md:group-hover:text-signal">
                    {c.org}
                  </p>
                  <p className="font-semibold md:col-span-3">{c.role}</p>
                  <p className="text-mute md:col-span-3">{c.note}</p>
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
