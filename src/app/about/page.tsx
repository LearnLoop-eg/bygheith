import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ahmed Gheith — marketing and ecommerce expert. A decade across the agency, media and brand sides in MENA.",
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
            I help businesses find the one clear strategy that changes
            everything.
          </h1>
        </Section>
      </div>

      <Section className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed text-[var(--ink)]">
          <p>
            Hi, I&apos;m Gheith. I&apos;ve spent over a decade building brands,
            crafting digital strategies, and leading creative work across some
            of the region&apos;s most recognized names — from Forbes Middle
            East to Cassbana, Digitology, and beyond.
          </p>
          <p>
            I co-founded The Creative Zone, and today I&apos;m a partner at
            Beyond Reason, where I built the digital strategy, online store,
            and creative direction from scratch. I&apos;m also Senior Digital
            Marketing Manager at Mountain View.
          </p>
          <p>
            I&apos;ve sat on the agency side, the media side, and the brand
            side — which means I understand the full picture, not just one
            piece of it. I consult because most businesses are one clear
            strategy away from a very different result. I just help them find
            it.
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
            Let&apos;s talk about your brand.
          </h2>
          <Link
            href="/book"
            className="mt-6 inline-block rounded-md bg-[var(--brass)] px-7 py-3 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
          >
            Book a free call
          </Link>
        </Section>
      </div>
    </main>
  );
}
