import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Magnetic from "@/components/motion/Magnetic";
import { SplitReveal } from "@/components/motion/Reveal";

const socials = [
  { href: "https://instagram.com/bygheith", label: "Instagram" },
  { href: "https://www.linkedin.com/in/ahmed-gheith-7321b4106", label: "LinkedIn" },
  { href: "https://www.tiktok.com/@gheith2026", label: "TikTok" },
];

const pages = [
  { href: "/ventures", label: "Ventures" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/golf", label: "Golf" },
  { href: "/podcast", label: "Podcast" },
];

/** Every page lands here: the big ask, then the footer. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-chalk">
      <div className="px-5 pb-10 pt-28 sm:px-8 md:pt-40">
        <SplitReveal as="p" className="label text-mute">
          Building something, or want to talk shop?
        </SplitReveal>
        <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SplitReveal as="h2" className="display text-[19vw] leading-[0.82] md:text-[13vw]">
            Let&apos;s talk.
          </SplitReveal>
          <Magnetic strength={0.4} className="self-start md:mb-[2vw] md:self-auto">
            <Link
              href="/book"
              className="group grid size-36 place-items-center rounded-full bg-signal text-center text-signal-ink transition-transform duration-300 hover:scale-105 active:scale-95 md:size-44"
            >
              <span className="flex flex-col items-center gap-1 text-base font-semibold">
                <ArrowUpRight size={28} weight="bold" aria-hidden className="transition-transform duration-500 group-hover:rotate-45" />
                Get in touch
              </span>
            </Link>
          </Magnetic>
        </div>

        <div className="mt-24 grid gap-10 border-t border-line pt-10 text-[0.95rem] md:grid-cols-12">
          <p className="max-w-xs text-mute md:col-span-5">
            Ahmed Gheith. Founder & operator across MENA, building LearnLoop and
            Beyond Reason. Played like golf.
          </p>
          <nav aria-label="Pages" className="md:col-span-3">
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="link-u">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social" className="md:col-span-4">
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-u">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-2 text-sm text-mute-dark sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} ByGheith. Cairo, Egypt.</span>
          <span>Play the long game.</span>
        </div>
      </div>
    </footer>
  );
}
