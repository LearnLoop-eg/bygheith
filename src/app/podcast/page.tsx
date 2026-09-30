import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { SplitReveal, Rise } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "ByGheith, a podcast by Ahmed Gheith on marketing, building, ecommerce and the founder's journey.",
};

const seasons = [
  { theme: "Marketing", blurb: "How brands in MENA actually grow: positioning, performance, and the craft underneath the campaigns." },
  { theme: "Ecommerce", blurb: "From first store to scale: catalogs, conversion, payments, paid media and the numbers behind them." },
  { theme: "Real estate", blurb: "Selling a lifestyle, not square metres: how living brands are positioned, launched and filled." },
  { theme: "Building", blurb: "The founder's road: starting from zero, surviving the messy middle, and staying in the game." },
];

export default function PodcastPage() {
  return (
    <main>
      <PageIntro
        title="ByGheith, the podcast."
        intro="Unfiltered conversations with the founders, marketers and operators building brands in the region. One theme per season, so every run of episodes adds up to a playbook you can use."
        image="/images/shoot/call-sofa.jpg"
        imageAlt="Ahmed Gheith on a call"
        imagePos="50% 28%"
      />

      <section className="px-5 py-20 sm:px-8 md:py-32">
        <ol>
          {seasons.map((s, i) => (
            <li key={s.theme}>
              <Rise>
                <div className="group grid gap-4 border-t border-line py-10 md:grid-cols-12 md:items-baseline md:py-14">
                  <p className="display num text-signal md:col-span-2 md:text-5xl">S{i + 1}</p>
                  <p className="display text-[16vw] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:col-span-6 md:text-[8vw] md:group-hover:translate-x-4">
                    {s.theme}
                  </p>
                  <p className="text-lg text-mute md:col-span-4">{s.blurb}</p>
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-chalk px-5 py-28 text-ink sm:px-8 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <SplitReveal as="h2" className="display text-[14vw] md:col-span-7 md:text-[7vw]">
            Be first to hear season one.
          </SplitReveal>
          <Rise className="md:col-span-5">
            <form action="https://formspree.io/f/xeebkabg" method="POST">
              <label htmlFor="podcast-email" className="label text-ink/70">
                Your email
              </label>
              <div className="mt-2 flex items-end gap-4">
                <input
                  id="podcast-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="field flex-1 !border-ink/25 !text-ink placeholder:!text-ink/50 focus:!border-signal"
                />
                <button type="submit" className="btn btn-signal">
                  Notify me
                </button>
              </div>
              <p className="mt-4 text-sm text-ink/70">
                Coming to Spotify, Apple Podcasts and YouTube. No spam.
              </p>
            </form>
          </Rise>
        </div>
      </section>
    </main>
  );
}
