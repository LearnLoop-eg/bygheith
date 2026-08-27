import Link from "next/link";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { trustedBy, ventures } from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="relative min-h-[70vh] w-full overflow-hidden bg-[var(--pine)] text-[var(--bone)] md:min-h-[80vh]">
        {/* Background image */}
        <Image
          src="/images/hero-wide.jpg"
          alt="Ahmed Gheith"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Pine gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, rgba(18,42,36,0.92) 0%, rgba(18,42,36,0.78) 38%, rgba(18,42,36,0.35) 70%, rgba(18,42,36,0.12) 100%)",
          }}
        />
        {/* Extra bottom-up wash so text never gets lost on mobile */}
        <div
          className="absolute inset-0 md:hidden"
          aria-hidden
          style={{
            background:
              "linear-gradient(0deg, rgba(18,42,36,0.9) 0%, rgba(18,42,36,0.45) 55%, rgba(18,42,36,0.2) 100%)",
          }}
        />
        {/* Overlaid text */}
        <Section className="relative flex min-h-[70vh] flex-col justify-center py-20 md:min-h-[80vh] md:py-28">
          <div className="max-w-xl">
            <p className="eyebrow text-[var(--brass-soft)]">
              Founder &amp; Operator · Golfer
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium leading-tight text-[var(--bone)] md:text-6xl">
              Gheith
              <br />
              <span className="italic text-[var(--brass-soft)]">
                Founder &amp; Operator
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--bone)]/90">
              I build and run ventures — founder &amp; CEO of LearnLoop, partner
              at Beyond Reason, and the marketing mind behind both. A decade
              across brand, ecommerce and performance in MENA, applied to the
              things I build. And on the course, I play the long game.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="rounded-md bg-[var(--brass)] px-7 py-3 text-center text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
              >
                Get in touch
              </Link>
              <Link
                href="/ventures"
                className="rounded-md border border-white/40 bg-white/5 px-7 py-3 text-center text-sm font-medium text-[var(--bone)] backdrop-blur-sm transition-colors hover:border-white/70"
              >
                See what I&apos;m building
              </Link>
            </div>
            <p className="mt-10 text-xs tracking-[0.3em] text-[var(--bone)]/70">
              PLAY THE LONG GAME
            </p>
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

      {/* What I'm building */}
      <Section className="py-20">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow index="01">Ventures</Eyebrow>
            <h2 className="font-display mt-2 text-3xl font-medium text-[var(--pine)]">
              What I&apos;m building
            </h2>
          </div>
          <Link
            href="/ventures"
            className="hidden text-sm font-medium text-[var(--brass)] hover:underline sm:block"
          >
            See more →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ventures.map((v) => (
            <Link
              key={v.slug}
              href="/ventures"
              className="group rounded-xl border border-[var(--bone-line)] bg-white p-8 transition-colors hover:border-[var(--brass)]"
            >
              <span className="text-xs tracking-[0.14em] text-[var(--muted-soft)]">
                {v.role.toUpperCase()}
              </span>
              <p className="font-display mt-3 text-2xl font-medium text-[var(--pine)]">
                {v.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {v.description}
              </p>
              <span className="mt-5 inline-block text-sm font-medium text-[var(--brass)] transition-transform group-hover:translate-x-1">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Golf + Podcast */}
      <Section className="grid gap-5 pb-20 md:grid-cols-2">
        <Link
          href="/golf"
          className="group rounded-xl bg-[var(--pine)] p-8 text-[var(--bone)]"
        >
          <Eyebrow index="02">
            <span className="text-[var(--brass-soft)]">Golf</span>
          </Eyebrow>
          <p className="font-display mt-3 text-2xl font-medium text-[var(--bone)]">
            The long game
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--sage)]">
            My golf journey, and what precision, patience and composure on the
            course teach me about building.
          </p>
          <span className="mt-5 inline-block text-sm font-medium text-[var(--brass-soft)] transition-transform group-hover:translate-x-1">
            Read more →
          </span>
        </Link>
        <Link
          href="/podcast"
          className="group rounded-xl border border-[var(--bone-line)] bg-white p-8"
        >
          <Eyebrow index="03">Podcast</Eyebrow>
          <p className="font-display mt-3 text-2xl font-medium text-[var(--pine)]">
            ByGheith
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Honest conversations on marketing, building, ecommerce and the
            founder&apos;s journey — season by season. Subscribe early.
          </p>
          <span className="mt-5 inline-block text-sm font-medium text-[var(--brass)] transition-transform group-hover:translate-x-1">
            Listen in →
          </span>
        </Link>
      </Section>

      {/* Closing */}
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20 text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-medium md:text-4xl">
            Building something, or want to talk shop?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--sage)]">
            I&apos;m always happy to hear from founders and marketers building
            something. Get in touch.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-block rounded-md bg-[var(--brass)] px-7 py-3 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </Section>
      </div>
    </main>
  );
}
