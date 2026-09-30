import Link from "next/link";

const socials = [
  { href: "https://instagram.com/bygheith", label: "Instagram" },
  {
    href: "https://www.linkedin.com/in/ahmed-gheith-7321b4106",
    label: "LinkedIn",
  },
  { href: "https://www.tiktok.com/@gheith2026", label: "TikTok" },
];

const pages = [
  { href: "/ventures", label: "Ventures" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/golf", label: "Golf" },
  { href: "/podcast", label: "Podcast" },
];

export default function Footer() {
  return (
    <footer className="bg-dusk text-dusk-text">
      <div className="mx-auto max-w-[1320px] px-5 pb-10 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-t border-dusk-line pt-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="display text-[2.4rem] text-[#fbe9e1] sm:text-5xl">
              Play the
              <br />
              long game.
            </p>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
              Founder & operator across MENA. Building LearnLoop and Beyond
              Reason, played like golf.
            </p>
          </div>
          <nav aria-label="Pages" className="md:col-span-3">
            <ul className="space-y-3 text-[0.95rem]">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="transition-colors hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social" className="md:col-span-3">
            <ul className="space-y-3 text-[0.95rem]">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/book" className="transition-colors hover:text-white">
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-2 text-sm text-[#c9a79c] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} By Gheith. Cairo, Egypt.</span>
          <span lang="ar" className="arabic text-base">
            غيث
          </span>
        </div>
      </div>
    </footer>
  );
}
