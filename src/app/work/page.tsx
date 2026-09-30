import type { Metadata } from "next";
import { Section } from "@/components/Section";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Closing from "@/components/Closing";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies in ecommerce, performance marketing and brand strategy across MENA.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        title="Strategy you can see in the numbers."
        intro="A decade across the agency side, the media side and the brand side. A few of the projects I'm proud of."
      />

      <Section className="py-16 md:py-24">
        {caseStudies.map((c, i) => (
          <Reveal as="article" key={c.slug}>
            <div
              className={`grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16 ${
                i > 0 ? "border-t border-lime-line" : ""
              }`}
            >
              <div className="md:col-span-7">
                <h2 className="display text-4xl md:text-6xl">{c.title}</h2>
                <p className="mt-3 text-lg font-semibold text-wall-deep">{c.tag}</p>
                <p className="display-md mt-6 text-xl leading-snug md:text-2xl">
                  {c.summary}
                </p>
                <p className="prose-body mt-5 text-lg leading-relaxed text-ink-soft">
                  {c.detail}
                </p>
              </div>
              {c.metrics.some((m) => /\d/.test(m.value)) && (
                <dl className="self-end md:col-span-4 md:col-start-9">
                  {c.metrics
                    .filter((m) => /\d/.test(m.value))
                    .map((m) => (
                      <div
                        key={m.label}
                        className="flex items-baseline justify-between gap-6 border-t border-ink/20 py-4"
                      >
                        <dt className="text-ink-soft">{m.label}</dt>
                        <dd className="display-md num text-3xl md:text-4xl">{m.value}</dd>
                      </div>
                    ))}
                </dl>
              )}
            </div>
          </Reveal>
        ))}
      </Section>

      <Closing title="Building something? Let's talk shop." />
    </main>
  );
}
