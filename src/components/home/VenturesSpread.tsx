import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SplitReveal, ImageReveal, Counter, Rise } from "@/components/motion/Reveal";
import { ventures } from "@/lib/content";

const spreads = ventures;

/** Colour-block chapter: the one light room on the page. */
export default function VenturesSpread({ header = true }: { header?: boolean }) {
  return (
    <section className="relative bg-chalk px-5 py-28 text-ink sm:px-8 md:py-40">
      {header && (
      <div className="mb-20 flex flex-wrap items-end justify-between gap-6 md:mb-28">
        <SplitReveal as="h2" className="display max-w-[12ch] text-[15vw] md:text-[8vw]">
          Three games. One playbook.
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
                <p className="mt-5 text-2xl font-medium leading-snug md:text-3xl">{s.line}</p>
                <p className="measure mt-5 text-lg leading-relaxed text-ink/80">{s.body}</p>
                {s.stats.length > 0 && (
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
                )}
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
