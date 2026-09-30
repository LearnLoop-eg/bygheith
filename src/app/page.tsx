import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Section, Pergola } from "@/components/Section";
import Reveal from "@/components/Reveal";
import Closing from "@/components/Closing";
import { trustedBy, ventures } from "@/lib/content";

const [learnloop, beyondReason] = ventures;

export default function Home() {
  return (
    <main>
      {/* Hero: the wall in full sun */}
      <div className="relative overflow-hidden bg-wall text-ink">
        <Pergola />
        <Section className="relative grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <h1 className="display flex flex-wrap items-baseline gap-x-5 text-[4.2rem] sm:text-[6.5rem] lg:text-[8.5rem]">
              Gheith
              <span
                lang="ar"
                className="arabic pb-2 leading-[1.5] text-[2.6rem] font-bold tracking-normal text-wall-deep sm:text-[4rem] lg:text-[5.2rem]"
              >
                غيث
              </span>
            </h1>
            <p className="mt-2 text-lg font-semibold">Founder & operator, Cairo</p>
            <p className="prose-body mt-4 max-w-[34ch] text-xl leading-snug sm:text-2xl">
              I build and run ventures across MENA, backed by a decade of brand,
              ecommerce and performance marketing.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/book" className="btn btn-primary">
                Get in touch
                <ArrowRight size={18} weight="bold" aria-hidden />
              </Link>
              <Link href="/ventures" className="btn btn-ghost">
                See what I&apos;m building
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="arch arch-reveal relative mx-auto aspect-[3/4] w-full max-w-[420px] shadow-[0_30px_60px_-30px_rgb(92_30_24/0.55)]">
              <Image
                src="/images/gheith.jpg"
                alt="Ahmed Gheith seated in a sunlit courtyard"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 36vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Inscription: where the decade was spent */}
      <Section className="py-20 md:py-28">
        <Reveal>
          <h2 className="display-md max-w-2xl text-3xl md:text-[2.6rem]">
            A decade on the agency, media and brand side.
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-lime-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {trustedBy.map((b) => (
              <li key={b} className="inscription text-lg text-ink-soft md:text-xl">
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Ventures: two rooms, two colors */}
      <Section className="pb-20 md:pb-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-5xl md:text-7xl">What I&apos;m building</h2>
          <Link href="/ventures" className="link-arrow text-ink">
            All ventures <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <Link
              href="/ventures"
              className="group relative flex h-full flex-col overflow-hidden rounded-[6px] bg-cobalt p-8 text-white md:p-12"
            >
              <h3 className="display pr-10 text-[2.6rem] sm:text-5xl md:text-6xl">{learnloop.name}</h3>
              <p className="mt-3 font-semibold text-white/85">{learnloop.role}</p>
              <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/90">
                A peer-to-peer skill-exchange platform for Egypt & MENA. Teach a
                session to earn a credit, spend it to learn anything.
              </p>
              <dl className="mt-auto flex flex-wrap gap-x-12 gap-y-4 pt-12">
                <div>
                  <dt className="text-sm text-white/80">Skills</dt>
                  <dd className="display num text-6xl md:text-7xl">94</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/80">Categories</dt>
                  <dd className="display num text-6xl md:text-7xl">11</dd>
                </div>
              </dl>
              <ArrowUpRight
                size={28}
                weight="bold"
                aria-hidden
                className="absolute right-8 top-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:right-12 md:top-12"
              />
            </Link>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-5" delay={80}>
            <Link
              href="/ventures"
              className="group relative flex h-full flex-col overflow-hidden rounded-[6px] bg-wall p-8 text-ink md:p-12"
            >
              <Pergola variant="soft" />
              <h3 className="display relative pr-10 text-[2.6rem] sm:text-5xl">{beyondReason.name}</h3>
              <p className="relative mt-3 font-semibold">{beyondReason.role}</p>
              <p className="relative mt-5 max-w-[40ch] text-lg leading-relaxed">
                Premium golf, tennis and padel apparel. I built the whole digital
                engine, end to end.
              </p>
              <dl className="relative mt-auto flex flex-wrap gap-x-10 gap-y-4 pt-12">
                <div>
                  <dt className="text-sm">SKUs</dt>
                  <dd className="display num text-[2.6rem] sm:text-5xl md:text-6xl">457</dd>
                </div>
                <div>
                  <dt className="text-sm">Units</dt>
                  <dd className="display num text-[2.6rem] sm:text-5xl md:text-6xl">1,553</dd>
                </div>
              </dl>
              <ArrowUpRight
                size={28}
                weight="bold"
                aria-hidden
                className="absolute right-8 top-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:right-12 md:top-12"
              />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* The long game: on the course */}
      <div className="relative min-h-[88dvh] overflow-hidden bg-palm text-white">
        <Image
          src="/images/hero-wide.jpg"
          alt="Gheith on the fairway, taking a call"
          fill
          sizes="100vw"
          className="object-cover object-[45%_40%]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgb(28 18 20 / 0.82) 0%, rgb(28 18 20 / 0.5) 42%, rgb(28 18 20 / 0) 72%), linear-gradient(0deg, rgb(28 18 20 / 0.6) 0%, transparent 45%)",
          }}
        />
        <Pergola variant="soft" />
        <Section className="relative flex min-h-[88dvh] items-end py-16 md:py-24">
          <Reveal className="max-w-xl">
            <h2 className="display text-5xl sm:text-6xl md:text-7xl">
              Precision over power.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              What the course teaches me about building: patience, composure,
              and playing for the whole round, not one shot.
            </p>
            <Link href="/golf" className="link-arrow mt-8 text-white">
              The long game <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
          </Reveal>
        </Section>
      </div>

      {/* Podcast: sign up in place */}
      <Section className="grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
        <Reveal className="md:col-span-6">
          <h2 className="display text-5xl md:text-6xl">ByGheith, the podcast.</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
            Honest conversations on marketing, building, ecommerce and the
            founder&apos;s journey. One theme per season. Launching soon.
          </p>
          <Link href="/podcast" className="link-arrow mt-6 text-ink">
            About the show <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
          <form
            action="https://formspree.io/f/xeebkabg"
            method="POST"
            className="rounded-[6px] bg-white p-6 border border-lime-line md:p-8"
          >
            <label htmlFor="home-email" className="block font-semibold">
              Hear season one first
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="home-email"
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
            <p className="mt-3 text-sm text-ink-soft">No spam. Just the show.</p>
          </form>
        </Reveal>
      </Section>

      <Closing />
    </main>
  );
}
