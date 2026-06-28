import Link from "next/link";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies in ecommerce, performance marketing and brand strategy across MENA.",
};

export default function WorkPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">Work</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-medium md:text-5xl">
            Strategy you can see in the numbers.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            A decade across the agency side, the media side and the brand side.
            A few of the projects I&apos;m proud of.
          </p>
        </Section>
      </div>

      <Section className="space-y-12 py-16">
        {caseStudies.map((c, i) => (
          <div
            key={c.slug}
            className="rounded-xl border border-[var(--bone-line)] bg-white p-8"
          >
            <span className="text-xs tracking-[0.14em] text-[var(--muted-soft)]">
              {String(i + 1).padStart(2, "0")} · {c.tag.toUpperCase()}
            </span>
            <h2 className="font-display mt-2 text-2xl font-medium text-[var(--pine)]">
              {c.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {c.summary}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">
              {c.detail}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {c.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-4 rounded-lg bg-[var(--bone)] px-5 py-4 md:block"
                >
                  <p className="font-display text-2xl font-medium text-[var(--pine)]">
                    {m.value}
                  </p>
                  <p className="text-xs text-[var(--muted-soft)] md:mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-16 text-center">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Want results like these for your brand?
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
