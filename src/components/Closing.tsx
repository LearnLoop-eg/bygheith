import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Section, Pergola } from "@/components/Section";
import Reveal from "@/components/Reveal";

/** Dusk: every page ends on the same warm wall, with one direct line to Gheith. */
export default function Closing({
  title = "Building something, or want to talk shop?",
  body = "I'm always happy to hear from founders and marketers building something.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-dusk text-dusk-text">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%, rgb(207 127 104 / 0.38), transparent 60%)",
        }}
      />
      <Pergola variant="dusk" />
      <Section className="relative py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="display text-4xl text-[#fbe9e1] sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="prose-body mt-6 text-lg leading-relaxed">{body}</p>
          <div className="mt-10">
            <Link href="/book" className="btn btn-primary">
              Get in touch
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
