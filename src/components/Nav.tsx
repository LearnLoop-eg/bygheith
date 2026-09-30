"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/ventures", label: "Ventures" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/golf", label: "Golf" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-wall-shade/40 bg-wall text-ink">
      <nav className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-baseline gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="inscription text-[0.95rem] font-bold tracking-[0.18em]">
            By Gheith
          </span>
          <span lang="ar" className="arabic text-base text-wall-deep">
            غيث
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.95rem] font-medium underline-offset-[7px] transition-[text-decoration-color] duration-200 ${
                  active
                    ? "underline decoration-ink decoration-2"
                    : "underline decoration-transparent decoration-2 hover:decoration-ink/40"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/book" className="btn btn-primary !px-5 !py-2.5 !text-sm">
            Get in touch
          </Link>
        </div>

        <button
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-wall-shade/40 px-5 pb-6 pt-2 sm:px-8 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="display-md block py-3 text-2xl"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="btn btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
