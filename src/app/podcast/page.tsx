import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The By Gheith podcast — conversations on marketing, building, and the long game.",
};

const platforms = ["Spotify", "Apple Podcasts", "YouTube"];

export default function PodcastPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">Podcast</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            Conversations on marketing, building, and the long game.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            A new show, launching soon. Honest conversations with founders,
            marketers and creators across MENA — what actually worked, what
            didn&apos;t, and the long game behind it.
          </p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="rounded-xl border border-[var(--bone-line)] bg-white p-10 text-center">
          <p className="eyebrow">Coming soon</p>
          <h2 className="font-display mt-3 text-2xl font-medium text-[var(--pine)]">
            Be first to hear episode one.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Drop your email and I&apos;ll let you know the moment it&apos;s
            live. No spam — just the show.
          </p>

          <form
            action="https://formspree.io/f/xeebkabg"
            method="POST"
            className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-md border border-[var(--bone-line)] bg-[var(--bone)] px-4 py-3 text-sm outline-none focus:border-[var(--brass)]"
            />
            <button
              type="submit"
              className="rounded-md bg-[var(--brass)] px-6 py-3 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
            >
              Notify me
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted-soft)]">
            <span className="text-xs tracking-[0.16em]">FIND IT ON</span>
            {platforms.map((p) => (
              <span key={p} className="font-medium text-[var(--muted)]">
                {p}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
