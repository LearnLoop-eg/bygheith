import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Section, Pergola } from "@/components/Section";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Closing from "@/components/Closing";

export const metadata: Metadata = {
  title: "Golf",
  description:
    "The long game: Gheith's golf journey and what the course teaches about building brands.",
};

const lessons = [
  {
    title: "Precision over power",
    body: "The longest drive means nothing if it's in the trees. In marketing, the same is true: reach is worthless without aim. I'd rather hit the fairway than swing for the fences.",
  },
  {
    title: "Composure under pressure",
    body: "A bad hole doesn't lose the round; panicking does. Brands that stay calm and stick to the plan through a slow quarter almost always come out ahead.",
  },
  {
    title: "Play the long game",
    body: "You don't win golf, or business, on a single shot. You win it over eighteen holes, over seasons, over years of small, consistent, deliberate decisions.",
  },
];

export default function GolfPage() {
  return (
    <main>
      <PageHero
        title="The course taught me how to build."
        intro="I started playing golf at Allegria Golf Club, Sodic, and it quietly became the clearest metaphor I have for how I work. Patience, precision, composure: the game rewards exactly what good strategy demands."
        image="/images/golf.jpg"
        imageAlt="Gheith on the tee holding a club"
        imagePosition="50% 30%"
      />

      <Section className="py-20 md:py-28">
        <ol>
          {lessons.map((l, i) => (
            <Reveal as="li" key={l.title} delay={i * 40}>
              <div className="grid gap-4 border-t border-lime-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <h2 className="display text-4xl md:col-span-6 md:text-6xl">
                  {l.title}
                </h2>
                <p className="prose-body text-lg leading-relaxed text-ink-soft md:col-span-5 md:col-start-8 md:pt-2">
                  {l.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <div className="relative overflow-hidden bg-cobalt text-white">
        <Section className="relative grid gap-10 py-20 md:grid-cols-12 md:items-center md:py-24">
          <Reveal className="md:col-span-6">
            <h2 className="display text-5xl md:text-6xl">Just getting started.</h2>
            <p className="prose-body mt-6 text-lg leading-relaxed text-white/90">
              I&apos;m early in my golf journey and documenting it openly: the
              rounds, the lessons, the slow climb. Follow along on Instagram,
              where the course and the work meet.
            </p>
            <a
              href="https://instagram.com/bygheith"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light mt-9"
            >
              Follow @bygheith
              <ArrowUpRight size={18} weight="bold" aria-hidden />
            </a>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <Image
                src="/images/hero-wide.jpg"
                alt="Gheith on the fairway beside a golf cart"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[45%_40%]"
              />
              <Pergola variant="soft" />
            </div>
          </Reveal>
        </Section>
      </div>

      <Closing title="Want to talk shop? Or a round?" />
    </main>
  );
}
