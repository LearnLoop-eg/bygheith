import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Golf",
  description:
    "The long game — Gheith's golf journey and what the course teaches about building brands.",
};

const lessons = [
  {
    title: "Precision over power",
    body: "The longest drive means nothing if it's in the trees. In marketing, the same is true — reach is worthless without aim. I'd rather hit the fairway than swing for the fences.",
  },
  {
    title: "Composure under pressure",
    body: "A bad hole doesn't lose the round; panicking does. Brands that stay calm and stick to the plan through a slow quarter almost always come out ahead.",
  },
  {
    title: "Play the long game",
    body: "You don't win golf — or business — on a single shot. You win it over eighteen holes, over seasons, over years of small, consistent, deliberate decisions.",
  },
];

export default function GolfPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">Golf</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            The course taught me how to build.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            I started playing golf at Allegria Golf Club, Sodic, and it quietly became the
            clearest metaphor I have for how I work. Patience, precision,
            composure — the game rewards exactly what good strategy demands.
          </p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {lessons.map((l, i) => (
            <div
              key={l.title}
              className="rounded-xl border border-[var(--bone-line)] bg-white p-6"
            >
              <span className="font-display text-3xl font-medium text-[var(--brass)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display mt-3 text-xl font-medium text-[var(--pine)]">
                {l.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <div className="grid gap-8 rounded-xl bg-[var(--pine)] p-10 text-[var(--bone)] md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <Eyebrow>
              <span className="text-[var(--brass-soft)]">The journey</span>
            </Eyebrow>
            <h2 className="font-display mt-2 text-2xl font-medium">
              Just getting started.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--sage)]">
              I&apos;m early in my golf journey and documenting it openly —
              the rounds, the lessons, the slow climb. Follow along on
              Instagram, where the course and the work meet.
            </p>
            <a
              href="https://instagram.com/bygheith"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md bg-[var(--brass)] px-6 py-3 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
            >
              Follow @bygheith
            </a>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/golf.jpg"
              alt="Gheith on the golf course"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
