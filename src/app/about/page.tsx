import type { Metadata } from "next";
import { Section } from "@/components/Section";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Closing from "@/components/Closing";
import { credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gheith, founder and operator. Founder & CEO of LearnLoop, partner at Beyond Reason, and a decade across brand, ecommerce and performance in MENA.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="I build things, and I play the long game."
        image="/images/hero.jpg"
        imageAlt="Gheith walking down a palm-lined path"
        imagePosition="50% 30%"
      />

      <Section className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-7">
          <div className="space-y-5 text-lg leading-relaxed text-ink">
            <p className="display-md text-2xl leading-snug md:text-[1.9rem]">
              I&apos;m Gheith, a founder and operator who&apos;s spent over a
              decade in the trenches of marketing, brand and ecommerce across
              the MENA region.
            </p>
            <p className="prose-body">
              I started on the agency and media side: social lead at Forbes
              Middle East, account direction at Digitology, senior roles at
              Cassbana and Mountain View. I learned how brands actually grow,
              and where most of them get stuck.
            </p>
            <p className="prose-body">
              Then I stopped just advising and started building. Today I&apos;m
              the founder and CEO of LearnLoop, a peer-to-peer skill-exchange
              platform for Egypt and MENA, a place where people teach what they
              know and learn what they love, no money required. And I&apos;m a
              partner at Beyond Reason, where I built the digital strategy,
              online store and creative direction from the ground up.
            </p>
            <p className="prose-body">
              Marketing is still the craft underneath everything I do. But now I
              point it at the things I own and build, not just projects for
              hire.
            </p>
            <p className="prose-body">
              Away from the screen, I play golf. It&apos;s become the clearest
              metaphor I have for how I work: precision over power, composure
              under pressure, and the patience to play the long game. On the
              course and in business, I&apos;m playing the same game.
            </p>
          </div>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9 md:self-end" delay={80}>
          <blockquote className="relative overflow-hidden rounded-[6px] bg-cobalt p-8 text-white md:p-10">
            <p className="display-md text-2xl leading-snug md:text-3xl">
              &ldquo;Marketing, to me, is a long game. And I play to win
              it.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </Section>

      <div className="bg-wall text-ink">
        <Section className="py-20 md:py-28">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl">
              A decade, three sides of the table.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-x-12 md:grid-cols-2">
            {credentials.map((c, i) => (
              <Reveal as="li" key={c.org} delay={(i % 2) * 60}>
                <div className="border-t border-ink/25 py-7">
                  <p className="display-md text-2xl md:text-3xl">{c.org}</p>
                  <p className="mt-1 font-semibold">{c.role}</p>
                  <p className="mt-3 max-w-[48ch] leading-relaxed">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>
      </div>

      <Closing title="Building something? Let's talk shop." />
    </main>
  );
}
