import Link from "next/link";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { ventures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The things I build and run — LearnLoop, a peer-to-peer skill-exchange platform for MENA, and Beyond Reason, a premium apparel brand.",
};

export default function VenturesPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">Ventures</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            The things I build and run.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            I stopped just advising and started building. These are the ventures
            I own — where the marketing craft points at something of my own, and
            where I play the long game.
          </p>
        </Section>
      </div>

      <Section className="space-y-8 py-16">
        {ventures.map((v) => (
          <div
            key={v.slug}
            className="rounded-xl border border-[var(--bone-line)] bg-white p-8 md:p-10"
          >
            <span className="inline-block rounded-md bg-[var(--bone)] px-3 py-1 text-xs font-medium tracking-[0.14em] text-[var(--brass)]">
              {v.role.toUpperCase()}
            </span>
            <h2 className="font-display mt-4 text-3xl font-medium text-[var(--pine)] md:text-4xl">
              {v.name}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--ink)]">
              {v.description}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
              {v.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg bg-[var(--bone)] px-5 py-4"
                >
                  <p className="font-display text-2xl font-medium text-[var(--pine)] [hyphens:none]">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted-soft)] [hyphens:none]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {v.external ? (
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm font-medium text-[var(--brass)] transition-opacity hover:opacity-80"
              >
                {v.linkLabel} →
              </a>
            ) : (
              <Link
                href={v.href}
                className="mt-8 inline-block text-sm font-medium text-[var(--brass)] transition-opacity hover:opacity-80"
              >
                {v.linkLabel} →
              </Link>
            )}
          </div>
        ))}
      </Section>

      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-16 text-center">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Building something of your own?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--sage)]">
            I&apos;m always happy to talk shop with founders and marketers.
          </p>
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
