import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import HeroStage from "@/components/home/HeroStage";
import ShootStrip from "@/components/home/ShootStrip";
import LongGame from "@/components/home/LongGame";
import VenturesSpread from "@/components/home/VenturesSpread";
import WorkWithMe from "@/components/home/WorkWithMe";
import Marquee from "@/components/motion/Marquee";
import { WordScrub, SplitReveal, ImageReveal, Rise } from "@/components/motion/Reveal";
import { trustedBy } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <HeroStage />

      {/* Manifesto: a light room, words light up with the scroll */}
      <section className="bg-chalk px-5 py-32 text-ink sm:px-8 md:py-48">
        <WordScrub className="display-light max-w-[22ch] text-[9vw] md:text-[5.2vw]">
          A decade building brands for others taught me how growth really works.
          Now I build my own, and I play every one of them like a long game.
        </WordScrub>
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <ImageReveal className="aspect-[4/3] rounded-[18px] md:col-span-5 md:col-start-2" parallax={5}>
            <div data-inner className="absolute inset-0">
              <Image
                src="/images/shoot/laptop-think.jpg"
                alt="Ahmed Gheith thinking over his laptop"
                fill
                sizes="(max-width: 768px) 92vw, 40vw"
                className="object-cover object-[55%_40%]"
              />
            </div>
          </ImageReveal>
          <Rise className="self-end md:col-span-4 md:col-start-8">
            <p className="text-xl leading-relaxed text-ink/80">
              Forbes Middle East, Mountain View, Cassbana, Digitology. The agency,
              media and brand side of the region. Today that playbook runs a
              consulting practice, a sportswear label and a living brand.
            </p>
            <Link href="/about" className="btn btn-line btn-on-light mt-8 text-ink">
              The full story <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </Rise>
        </div>
      </section>

      {/* Where the decade was spent */}
      <section className="bg-signal py-8 text-signal-ink md:py-12" aria-label="Career">
        <Marquee
          items={trustedBy}
          dotClass="bg-signal-ink"
          className="display text-[13vw] leading-none md:text-[7.5vw]"
        />
      </section>

      <VenturesSpread />

      <ShootStrip />

      <LongGame />

      <WorkWithMe />

      {/* Podcast */}
      <section className="bg-ink-2 px-5 py-28 text-chalk sm:px-8 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SplitReveal as="h2" className="display text-[14vw] md:text-[7.5vw]">
              ByGheith, the podcast.
            </SplitReveal>
            <Rise>
              <p className="mt-6 max-w-[46ch] text-xl leading-relaxed text-mute">
                Unfiltered conversations with the people building brands in the
                region. Marketing, ecommerce, real estate and the founder&apos;s
                road, one theme per season.
              </p>
            </Rise>
          </div>
          <Rise className="md:col-span-5">
            <form action="https://formspree.io/f/xeebkabg" method="POST">
              <label htmlFor="home-email" className="label text-mute">
                Hear season one first
              </label>
              <div className="mt-2 flex items-end gap-4">
                <input
                  id="home-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="field flex-1"
                />
                <button type="submit" className="btn btn-signal">
                  Notify me
                </button>
              </div>
            </form>
          </Rise>
        </div>
      </section>
    </main>
  );
}
