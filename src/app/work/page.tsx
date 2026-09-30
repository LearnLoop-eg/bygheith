import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { Rise, Counter } from "@/components/motion/Reveal";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies by Ahmed Gheith in ecommerce, performance marketing and brand strategy across MENA.",
};

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        title="Work you can measure."
        intro="A decade on the agency, media and brand side, and now inside my own ventures. A few builds I'm proud of, with the numbers that matter."
      />

      <section className="bg-chalk px-5 py-16 text-ink sm:px-8 md:py-24">
        {caseStudies.map((c) => {
          const numbers = c.metrics.filter((m) => /\d/.test(m.value));
          return (
            <Rise key={c.slug}>
              <article className="grid gap-8 border-t border-ink/15 py-14 md:grid-cols-12 md:gap-10 md:py-20">
                <div className="md:col-span-7">
                  <h2 className="display text-[12vw] md:text-[5.5vw]">{c.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-[#c93f0c]">{c.tag}</p>
                  <p className="mt-8 text-2xl leading-snug md:text-3xl">{c.summary}</p>
                  <p className="measure mt-6 text-lg leading-relaxed text-ink/75">{c.detail}</p>
                </div>
                {numbers.length > 0 && (
                  <dl className="self-end md:col-span-4 md:col-start-9">
                    {numbers.map((m) => (
                      <div key={m.label} className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-5">
                        <dt className="text-ink/70">{m.label}</dt>
                        <dd className="display text-5xl">
                          <Counter value={m.value} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </article>
            </Rise>
          );
        })}
      </section>
    </main>
  );
}
