"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/golf", label: "Golf" },
  { href: "/podcast", label: "Podcast" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--pine)] text-[var(--bone)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-[0.15em]"
          onClick={() => setOpen(false)}
        >
          BY GHEITH
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--sage)] transition-colors hover:text-[var(--bone)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-md bg-[var(--brass)] px-4 py-2 text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
          >
            Book a call
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-[var(--bone)]" />
          <span className="mt-1.5 block h-0.5 w-6 bg-[var(--bone)]" />
          <span className="mt-1.5 block h-0.5 w-6 bg-[var(--bone)]" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-6 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm text-[var(--sage)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 inline-block rounded-md bg-[var(--brass)] px-4 py-2 text-sm font-medium text-[var(--pine)]"
            onClick={() => setOpen(false)}
          >
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
