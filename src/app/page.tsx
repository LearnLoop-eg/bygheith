import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import HeroStage from "@/components/home/HeroStage";
import ShootStrip from "@/components/home/ShootStrip";
import LongGame from "@/components/home/LongGame";
import VenturesSpread from "@/components/home/VenturesSpread";
import Marquee from "@/components/motion/Marquee";
import { WordScrub, SplitReveal, ImageReveal, Rise } from "@/components/motion/Reveal";
import { trustedBy } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <HeroStage />

      {/* Manifesto: words light up with the scroll */}
      <section className="px-5 py-32 sm:px-8 md:py-48">
        <WordScrub className="display-light max-w-[22ch] text-[9vw] md:text-[5.2vw]">
          A decade of brand, ecommerce and performance marketing across MENA. Now I
          point it at the things I own. On the course and in business, I play the
          long game.
        </WordScrub>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
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
            <p className="text-lg leading-relaxed text-mute">
              Founder & CEO of LearnLoop. Partner at Beyond Reason. Before that,
              the agency, media and brand side of the region.
            </p>
            <Link href="/about" className="btn btn-line mt-8 text-chalk">
              My story <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </Rise>
        </div>
      </section>

      {/* Where the decade was spent */}
      <section className="border-y border-line py-10 md:py-14" aria-label="Career">
        <Marquee items={trustedBy} className="display text-[13vw] leading-none md:text-[8vw]" />
      </section>

      <VenturesSpread />

      <ShootStrip />

      <LongGame />

      {/* Podcast */}
      <section className="px-5 py-28 sm:px-8 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SplitReveal as="h2" className="display text-[14vw] md:text-[7.5vw]">
              ByGheith, the podcast.
            </SplitReveal>
            <Rise>
              <p className="mt-6 max-w-[44ch] text-lg text-mute">
                Honest conversations on marketing, building, ecommerce and the
                founder&apos;s journey. One theme per season. Launching soon.
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
