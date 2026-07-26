import Link from "next/link";

const socials = [
  { href: "https://instagram.com/bygheith", label: "Instagram" },
  {
    href: "https://www.linkedin.com/in/ahmed-gheith-7321b4106",
    label: "LinkedIn",
  },
  { href: "https://www.tiktok.com/@gheith2026", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--pine)] text-[var(--bone)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-medium">By Gheith</p>
            <p className="mt-2 max-w-sm text-sm text-[var(--sage)]">
              Founder & operator across MENA. Building LearnLoop and Beyond
              Reason — played like golf.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sage)] transition-colors hover:text-[var(--bone)]"
              >
                {s.label}
              </a>
            ))}
            <Link
              href="/book"
              className="text-[var(--sage)] transition-colors hover:text-[var(--bone)]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[var(--muted-soft)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} By Gheith. Cairo, Egypt.</span>
          <span className="tracking-[0.22em] text-[var(--brass-soft)]">
            PLAY THE LONG GAME
          </span>
        </div>
      </div>
    </footer>
  );
}
