import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gheith — founder and operator. Founder & CEO of LearnLoop, partner at Beyond Reason, and a decade across brand, ecommerce and performance in MENA.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">About</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            I build things, and I play the long game.
          </h1>
        </Section>
      </div>

      <Section className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed text-[var(--ink)]">
          <p>
            I&apos;m Gheith — a founder and operator who&apos;s spent over a
            decade in the trenches of marketing, brand and ecommerce across the
            MENA region.
          </p>
          <p>
            I started on the agency and media side — social lead at Forbes
            Middle East, account direction at Digitology, senior roles at
            Cassbana and Mountain View. I learned how brands actually grow, and
            where most of them get stuck.
          </p>
          <p>
            Then I stopped just advising and started building. Today I&apos;m
            the founder and CEO of LearnLoop, a peer-to-peer skill-exchange
            platform for Egypt and MENA — a place where people teach what they
            know and learn what they love, no money required. And I&apos;m a
            partner at Beyond Reason, where I built the digital strategy, online
            store and creative direction from the ground up.
          </p>
          <p>
            Marketing is still the craft underneath everything I do — but now I
            point it at the things I own and build, not just projects for hire.
          </p>
          <p>
            Away from the screen, I play golf. It&apos;s become the clearest
            metaphor I have for how I work: precision over power, composure
            under pressure, and the patience to play the long game. On the
            course and in business, I&apos;m playing the same game.
          </p>
          <p className="font-display text-lg italic text-[var(--pine)]">
            Marketing, to me, is a long game — and I play to win it.
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          <Image
            src="/images/gheith.jpg"
            alt="Ahmed Gheith"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </Section>

      <Section className="pb-16">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="font-display mt-2 text-3xl font-medium text-[var(--pine)]">
          A decade, three sides of the table
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {credentials.map((c) => (
            <div
              key={c.org}
              className="rounded-xl border border-[var(--bone-line)] bg-white p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-medium text-[var(--pine)]">{c.role}</p>
                <span className="text-sm text-[var(--brass)]">{c.org}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-16 text-center">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Building something? Let&apos;s talk shop.
          </h2>
          <Link
            href="/book"
            className="mt-6 inline-block rounded-md bg-[var(--brass)] px-7 py-3 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </Section>
      </div>
    </main>
  );
}
