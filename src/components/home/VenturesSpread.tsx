import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SplitReveal, ImageReveal, Counter, Rise } from "@/components/motion/Reveal";

const spreads = [
  {
    name: "LearnLoop",
    role: "Founder & CEO",
    body: "A peer-to-peer skill-exchange platform for Egypt & MENA. Teach a session to earn a credit, spend a credit to learn anything, from Arabic to Python to Shopify.",
    stats: [
      { v: "94", l: "skills" },
      { v: "11", l: "categories" },
    ],
    href: "https://joinlearnloop.com",
    external: true,
    cta: "Visit LearnLoop",
    img: "/images/shoot/laptop-front.jpg",
    alt: "Ahmed Gheith working on a laptop outdoors",
    pos: "50% 35%",
  },
  {
    name: "Beyond Reason",
    role: "Partner",
    body: "Premium golf, tennis and padel apparel. I built the digital engine from scratch: Shopify store, catalog, Meta ads engine, payments and delivery across Egypt.",
    stats: [
      { v: "457", l: "SKUs structured" },
      { v: "1,553", l: "units catalogued" },
    ],
    href: "/work",
    external: false,
    cta: "See the full build",
    img: "/images/shoot/call-fairway-side.jpg",
    alt: "Ahmed Gheith in Beyond Reason golf wear on the course",
    pos: "50% 30%",
  },
];

/** Colour-block chapter: the one light room on the page. */
export default function VenturesSpread({ header = true }: { header?: boolean }) {
  return (
    <section className="relative bg-chalk px-5 py-28 text-ink sm:px-8 md:py-40">
      {header && (
      <div className="mb-20 flex flex-wrap items-end justify-between gap-6 md:mb-28">
        <SplitReveal as="h2" className="display text-[15vw] md:text-[9vw]">
          What I&apos;m building.
        </SplitReveal>
        <Link href="/ventures" className="link-u mb-3 text-lg font-semibold">
          All ventures
        </Link>
      </div>
      )}

      <div className="space-y-28 md:space-y-40">
        {spreads.map((s, i) => (
          <article
            key={s.name}
            className="grid items-end gap-10 md:grid-cols-12 md:gap-8"
          >
            <ImageReveal
              parallax={6}
              className={`aspect-[4/5] rounded-[18px] md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}
            >
              <div data-inner className="absolute inset-0">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: s.pos }}
                />
              </div>
            </ImageReveal>

            <div className={`md:col-span-6 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
              <p className="label text-ink/70">{s.role}</p>
              <SplitReveal as="h3" className="display mt-4 text-[13vw] md:text-[6.5vw]">
                {s.name}
              </SplitReveal>
              <Rise>
                <p className="measure mt-6 text-lg leading-relaxed text-ink/80">{s.body}</p>
                <dl className="mt-10 flex gap-12">
                  {s.stats.map((st) => (
                    <div key={st.l} className="flex flex-col-reverse">
                      <dt className="mt-2 text-sm text-ink/70">{st.l}</dt>
                      <dd className="display text-6xl md:text-7xl">
                        <Counter value={st.v} />
                      </dd>
                    </div>
                  ))}
                </dl>
                {s.external ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-on-light mt-10 text-ink">
                    {s.cta} <ArrowUpRight size={18} weight="bold" aria-hidden />
                  </a>
                ) : (
                  <Link href={s.href} className="btn btn-line btn-on-light mt-10 text-ink">
                    {s.cta} <ArrowUpRight size={18} weight="bold" aria-hidden />
                  </Link>
                )}
              </Rise>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
