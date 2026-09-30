import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Section, Pergola } from "@/components/Section";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Closing from "@/components/Closing";
import { ventures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The things I build and run: LearnLoop, a peer-to-peer skill-exchange platform for MENA, and Beyond Reason, a premium apparel brand.",
};

const rooms = [
  { bg: "bg-cobalt text-white", sub: "text-white/85", line: "border-white/25", pergola: false },
  { bg: "bg-wall text-ink", sub: "text-ink", line: "border-ink/20", pergola: true },
];

export default function VenturesPage() {
  return (
    <main>
      <PageHero
        title="The things I build and run."
        intro="I stopped just advising and started building. These are the ventures I own, where the marketing craft points at something of my own."
      />

      <Section className="space-y-6 py-16 md:py-24">
        {ventures.map((v, i) => {
          const r = rooms[i % rooms.length];
          return (
            <Reveal key={v.slug} as="article">
              <div
                className={`relative overflow-hidden rounded-[6px] p-8 md:p-14 ${r.bg}`}
              >
                {r.pergola && <Pergola variant="soft" />}
                <div className="relative grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <h2 className="display text-5xl md:text-7xl">{v.name}</h2>
                    <p className={`mt-3 text-lg font-semibold ${r.sub}`}>{v.role}</p>
                    <p className={`prose-body mt-6 text-lg leading-relaxed ${r.sub}`}>
                      {v.description}
                    </p>
                    <div className="mt-9">
                      {v.external ? (
                        <a
                          href={v.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-arrow"
                        >
                          {v.linkLabel}
                          <ArrowUpRight size={16} weight="bold" aria-hidden />
                        </a>
                      ) : (
                        <Link href={v.href} className="link-arrow">
                          {v.linkLabel}
                          <ArrowRight size={16} weight="bold" aria-hidden />
                        </Link>
                      )}
                    </div>
                  </div>
                  <dl className="lg:col-span-4 lg:col-start-9 lg:self-end">
                    {v.metrics.filter((m) => m.label !== "Role").map((m) => (
                      <div
                        key={m.label}
                        className={`flex items-baseline justify-between gap-6 border-t py-4 ${r.line}`}
                      >
                        <dt className={`text-sm ${r.sub}`}>{m.label}</dt>
                        <dd className="display-md num text-right text-3xl md:text-4xl">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Section>

      <Closing
        title="Building something of your own?"
        body="I'm always happy to talk shop with founders and marketers."
      />
    </main>
  );
}
