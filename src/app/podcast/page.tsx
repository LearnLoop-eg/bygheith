import type { Metadata } from "next";
import { Section, Pergola } from "@/components/Section";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "ByGheith, a podcast on marketing, building, ecommerce and the founder's journey. Honest conversations and lessons from the long game.",
};

const platforms = ["Spotify", "Apple Podcasts", "YouTube"];

const seasons = [
  {
    theme: "Marketing",
    blurb:
      "How brands actually grow: positioning, performance and the craft underneath it all.",
    tone: "bg-wall text-ink",
    pergola: true,
  },
  {
    theme: "Building",
    blurb:
      "The founder's journey: starting from zero, the messy middle, and staying in the game.",
    tone: "bg-cobalt text-white",
    pergola: false,
  },
  {
    theme: "Ecommerce",
    blurb:
      "From first store to scale: catalogs, conversion, paid media and the numbers behind it.",
    tone: "bg-dusk text-dusk-text",
    pergola: false,
  },
];

export default function PodcastPage() {
  return (
    <main>
      <PageHero
        title="ByGheith, the podcast."
        intro="Each season digs into one theme, with honest conversations and lessons from the long game. No scattershot episodes: a run of episodes adds up to something you can actually use."
      />

      <Section className="py-20 md:py-28">
        <Reveal>
          <h2 className="display text-4xl md:text-6xl">Seasons, one theme at a time.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {seasons.map((s, i) => (
            <Reveal key={s.theme} delay={i * 70}>
              <div
                className={`arch relative flex aspect-[3/4] flex-col justify-end p-7 md:p-8 ${s.tone}`}
              >
                {s.pergola && <Pergola variant="soft" />}
                <h3 className="display relative text-4xl lg:text-5xl">{s.theme}</h3>
                <p className="relative mt-4 leading-relaxed opacity-90">
                  Season {["one", "two", "three"][i]}. {s.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="relative overflow-hidden bg-wall text-ink">
        <Pergola />
        <Section className="relative grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
          <Reveal className="md:col-span-6">
            <h2 className="display text-5xl md:text-6xl">Be first to hear season one.</h2>
            <p className="prose-body mt-6 text-lg leading-relaxed">
              Drop your email and I&apos;ll let you know the moment it&apos;s
              live. No spam, just the show.
            </p>
            <p className="mt-8 text-sm font-semibold">
              Coming to {platforms.join(", ").replace(/, ([^,]*)$/, " and $1")}.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
            <form
              action="https://formspree.io/f/xeebkabg"
              method="POST"
              className="rounded-[6px] bg-white p-6 border border-lime-line md:p-8"
            >
              <label htmlFor="podcast-email" className="block font-semibold">
                Your email
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="podcast-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="field flex-1"
                />
                <button type="submit" className="btn btn-primary">
                  Notify me
                </button>
              </div>
            </form>
          </Reveal>
        </Section>
      </div>
    </main>
  );
}
