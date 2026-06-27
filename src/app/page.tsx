import Link from "next/link";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { trustedBy, caseStudies, packages } from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text */}
            <div>
              <h1 className="font-display text-4xl font-medium leading-tight text-[var(--bone)] md:text-6xl">
                Marketing &amp; Ecommerce Expert
                <br />
                <span className="italic text-[var(--brass-soft)]">Golfer</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[var(--sage)]">
                A decade building brands and ecommerce engines across MENA —
                from Forbes Middle East and Mountain View to Cassbana,
                Digitology, The Creative Zone, and Beyond Reason. I help
                businesses find the one clear strategy that changes everything.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book"
                  className="rounded-md bg-[var(--brass)] px-7 py-3 text-center text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
                >
                  Book a free 15-min call
                </Link>
                <Link
                  href="/work"
                  className="rounded-md border border-white/25 px-7 py-3 text-center text-sm font-medium text-[var(--bone)] transition-colors hover:border-white/50"
                >
                  See the work
                </Link>
              </div>
              <p className="mt-10 text-xs tracking-[0.3em] text-[var(--muted-soft)]">
                PLAY THE LONG GAME
              </p>
            </div>
            {/* Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/hero.jpg"
                alt="Ahmed Gheith"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Trusted by */}
      <Section className="border-b border-[var(--bone-line)] py-16 text-center">
        <p className="eyebrow">Trusted across the region</p>
        <h2 className="font-display mt-3 text-2xl font-medium text-[var(--pine)] md:text-3xl">
          The region&apos;s biggest names
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustedBy.map((b) => (
            <span key={b} className="text-base font-medium text-[var(--ink)] md:text-lg">
              {b}
            </span>
          ))}
        </div>
      </Section>

      {/* Case studies */}
      <Section className="py-20">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow index="01">Work</Eyebrow>
            <h2 className="font-display mt-2 text-3xl font-medium text-[var(--pine)]">
              Selected case studies
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden text-sm font-medium text-[var(--brass)] hover:underline sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href="/work"
              className="group rounded-xl border border-[var(--bone-line)] bg-white p-6 transition-colors hover:border-[var(--brass)]"
            >
              <span className="text-xs tracking-[0.14em] text-[var(--muted-soft)]">
                {c.tag.toUpperCase()}
              </span>
              <p className="font-display mt-3 text-xl font-medium text-[var(--pine)]">
                {c.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {c.summary}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--brass)] opacity-0 transition-opacity group-hover:opacity-100">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section className="py-20">
        <Eyebrow index="02">Work with me</Eyebrow>
        <h2 className="font-display mt-2 text-3xl font-medium text-[var(--pine)]">
          Packages
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Book a free 15-minute call first. We align on scope and fit, then
          settle details and payment together — simple and direct.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl bg-white p-6 ${
                p.featured
                  ? "border-2 border-[var(--brass)]"
                  : "border border-[var(--bone-line)]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-md bg-[var(--brass)] px-3 py-1 text-[0.65rem] font-medium tracking-wide text-[var(--pine)]">
                  MOST POPULAR
                </span>
              )}
              <p className="font-display text-xl font-medium text-[var(--pine)]">
                {p.name}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-soft)]">
                {p.duration}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {p.blurb}
              </p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2 text-sm text-[var(--ink)]"
                  >
                    <span className="text-[var(--brass)]">—</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="mt-6 inline-block text-sm font-medium text-[var(--brass)] hover:underline"
              >
                Start with a free call →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Golf + Podcast */}
      <Section className="grid gap-5 pb-20 md:grid-cols-2">
        <Link
          href="/golf"
          className="group rounded-xl bg-[var(--pine)] p-8 text-[var(--bone)]"
        >
          <Eyebrow index="03">
            <span className="text-[var(--brass-soft)]">Golf</span>
          </Eyebrow>
          <p className="font-display mt-3 text-2xl font-medium text-[var(--bone)]">
            The long game
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--sage)]">
            My golf journey, and what precision, patience and composure on the
            course teach me about building brands.
          </p>
          <span className="mt-5 inline-block text-sm font-medium text-[var(--brass-soft)] transition-transform group-hover:translate-x-1">
            Read more →
          </span>
        </Link>
        <Link
          href="/podcast"
          className="group rounded-xl border border-[var(--bone-line)] bg-white p-8"
        >
          <Eyebrow index="04">Podcast</Eyebrow>
          <p className="font-display mt-3 text-2xl font-medium text-[var(--pine)]">
            Coming soon
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Conversations on marketing, building, and the long game. Spotify,
            YouTube and Apple — subscribe early.
          </p>
          <span className="mt-5 inline-block text-sm font-medium text-[var(--brass)] transition-transform group-hover:translate-x-1">
            Get notified →
          </span>
        </Link>
      </Section>

      {/* Closing CTA */}
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20 text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-medium md:text-4xl">
            Most businesses are one clear strategy away from a different
            result.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--sage)]">
            Let&apos;s find yours. Start with a free 15-minute call.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-block rounded-md bg-[var(--brass)] px-7 py-3 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
          >
            Book a free call
          </Link>
        </Section>
      </div>
    </main>
  );
}
