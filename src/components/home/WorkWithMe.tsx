import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SplitReveal, Rise } from "@/components/motion/Reveal";
import { offers } from "@/lib/content";

/** Consultations: three ways to work together, as big hover rows. */
export default function WorkWithMe({ light = true }: { light?: boolean }) {
  const t = light
    ? { bg: "bg-chalk text-ink", sub: "text-ink/75", line: "border-ink/15", hover: "md:hover:bg-ink md:hover:text-chalk" }
    : { bg: "bg-ink text-chalk", sub: "text-mute", line: "border-line", hover: "md:hover:bg-chalk md:hover:text-ink" };
  return (
    <section className={`px-5 py-28 sm:px-8 md:py-40 ${t.bg}`}>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <SplitReveal as="h2" className="display text-[14vw] md:col-span-8 md:text-[7.5vw]">
          Work with me.
        </SplitReveal>
        <Rise className="md:col-span-4">
          <p className={`text-xl leading-relaxed ${t.sub}`}>
            I take on a small number of founders and brands each quarter. You work
            with me directly, backed by my execution team.
          </p>
        </Rise>
      </div>

      <ul className="mt-16 md:mt-24">
        {offers.map((o) => (
          <li key={o.title}>
            <Rise>
              <Link
                href="/book"
                className={`group grid gap-4 border-t px-0 py-10 transition-[background-color,color,padding] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:grid-cols-12 md:items-center md:gap-8 md:rounded-[18px] md:py-12 md:hover:px-8 ${t.line} ${t.hover}`}
              >
                <span className="display text-[11vw] md:col-span-6 md:text-[4.6vw]">{o.title}</span>
                <span className="text-lg leading-relaxed opacity-80 md:col-span-5">{o.body}</span>
                <span className="md:col-span-1 md:justify-self-end">
                  <span className="grid size-14 place-items-center rounded-full bg-signal text-signal-ink transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={24} weight="bold" aria-hidden />
                  </span>
                </span>
              </Link>
            </Rise>
          </li>
        ))}
      </ul>
    </section>
  );
}
