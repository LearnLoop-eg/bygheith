import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "ByGheith — a podcast on marketing, building, ecommerce and the founder's journey. Honest conversations and lessons from the long game.",
};

const platforms = ["Spotify", "Apple Podcasts", "YouTube"];

const seasons = [
  {
    theme: "Marketing",
    blurb:
      "How brands actually grow — positioning, performance and the craft underneath it all.",
  },
  {
    theme: "Building",
    blurb:
      "The founder's journey — starting from zero, the messy middle, and staying in the game.",
  },
  {
    theme: "Ecommerce",
    blurb:
      "From first store to scale — catalogs, conversion, paid media and the numbers behind it.",
  },
];

export default function PodcastPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">Podcast</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            ByGheith
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            Each season digs into one theme — marketing, building, ecommerce,
            the founder&apos;s journey — with honest conversations and lessons
            from the long game.
          </p>
        </Section>
      </div>

      {/* Seasons */}
      <Section className="py-16">
        <Eyebrow index="01">The format</Eyebrow>
        <h2 className="font-display mt-2 text-3xl font-medium text-[var(--pine)]">
          Seasons, one theme at a time
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          No scattershot episodes. Each season commits to a single theme and its
          sub-topics, so a run of episodes adds up to something you can actually
          use.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {seasons.map((s, i) => (
            <div
              key={s.theme}
              className="rounded-xl border border-[var(--bone-line)] bg-white p-6"
            >
              <span className="text-xs tracking-[0.14em] text-[var(--muted-soft)]">
                SEASON {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display mt-3 text-xl font-medium text-[var(--pine)]">
                {s.theme}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Email capture + platforms */}
      <Section className="pb-16">
        <div className="rounded-xl border border-[var(--bone-line)] bg-white p-10 text-center">
          <p className="eyebrow">Launching soon</p>
          <h2 className="font-display mt-3 text-2xl font-medium text-[var(--pine)]">
            Be first to hear season one.
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
