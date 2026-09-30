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
        title="Strategy you can see in the numbers."
        intro="A decade across the agency side, the media side and the brand side. A few of the projects I'm proud of."
      />

      <section className="px-5 pb-20 sm:px-8 md:pb-32">
        {caseStudies.map((c) => {
          const numbers = c.metrics.filter((m) => /\d/.test(m.value));
          return (
            <Rise key={c.slug}>
              <article className="grid gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-10 md:py-20">
                <div className="md:col-span-7">
                  <h2 className="display text-[12vw] md:text-[5.5vw]">{c.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-signal">{c.tag}</p>
                  <p className="mt-8 text-2xl leading-snug md:text-3xl">{c.summary}</p>
                  <p className="measure mt-6 text-lg leading-relaxed text-mute">{c.detail}</p>
                </div>
                {numbers.length > 0 && (
                  <dl className="self-end md:col-span-4 md:col-start-9">
                    {numbers.map((m) => (
                      <div key={m.label} className="flex items-baseline justify-between gap-6 border-t border-line py-5">
                        <dt className="text-mute">{m.label}</dt>
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
