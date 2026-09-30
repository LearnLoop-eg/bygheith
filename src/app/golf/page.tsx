import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import PageIntro from "@/components/PageIntro";
import LongGame from "@/components/home/LongGame";
import { SplitReveal, ImageReveal, Rise } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "Golf",
  description:
    "The long game: Ahmed Gheith's golf journey and what the course teaches about building brands.",
};

export default function GolfPage() {
  return (
    <main>
      <PageIntro
        title="The course taught me how to build."
        intro="I took up golf at Allegria Golf Club, Sodic. It quickly became the sharpest mirror I have for business: the game punishes ego, rewards patience, and keeps score honestly."
        image="/images/shoot/golf-cap.jpg"
        imageAlt="Ahmed Gheith on the course, club in hand"
        imagePos="50% 25%"
      />

      <LongGame />

      <section className="bg-chalk px-5 py-28 text-ink sm:px-8 md:py-40">
        <div className="grid gap-5 md:grid-cols-12">
          <ImageReveal parallax={6} className="aspect-[3/4] rounded-[18px] md:col-span-4">
            <div data-inner className="absolute inset-0">
              <Image src="/images/shoot/golf-cart.jpg" alt="Driving the cart" fill sizes="(max-width: 768px) 92vw, 33vw" className="object-cover object-[50%_35%]" />
            </div>
          </ImageReveal>
          <ImageReveal parallax={6} className="aspect-[3/4] rounded-[18px] md:col-span-4 md:mt-24">
            <div data-inner className="absolute inset-0">
              <Image src="/images/shoot/fairway-walk.jpg" alt="Walking the fairway" fill sizes="(max-width: 768px) 92vw, 33vw" className="object-cover object-[50%_55%]" />
            </div>
          </ImageReveal>
          <ImageReveal parallax={6} className="aspect-[3/4] rounded-[18px] md:col-span-4 md:mt-48">
            <div data-inner className="absolute inset-0">
              <Image src="/images/shoot/cart-frame.jpg" alt="Seen through the golf cart" fill sizes="(max-width: 768px) 92vw, 33vw" className="object-cover object-[50%_55%]" />
            </div>
          </ImageReveal>
        </div>

        <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12 md:items-end">
          <SplitReveal as="h2" className="display text-[14vw] md:col-span-7 md:text-[7vw]">
            Just getting started.
          </SplitReveal>
          <Rise className="md:col-span-5">
            <p className="text-xl leading-relaxed text-ink/80">
              I&apos;m early in the game and documenting it openly: the rounds, the
              lessons, the slow climb. Follow along on Instagram, where the course
              and the work meet.
            </p>
            <Magnetic className="mt-8">
              <a href="https://instagram.com/bygheith" target="_blank" rel="noopener noreferrer" className="btn btn-signal">
                Follow @bygheith <ArrowUpRight size={18} weight="bold" aria-hidden />
              </a>
            </Magnetic>
          </Rise>
        </div>
      </section>
    </main>
  );
}
