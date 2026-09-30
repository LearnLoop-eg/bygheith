"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/components/motion/gsap";

const links = [
  { href: "/ventures", label: "Ventures" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/golf", label: "Golf" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlay.current;
    if (!el) return;
    const reduce = prefersReducedMotion();
    if (open) {
      document.documentElement.style.overflow = "hidden";
      gsap.set(el, { display: "flex" });
      gsap.fromTo(
        el,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: reduce ? 0 : 0.8, ease: "expo.inOut" },
      );
      gsap.fromTo(
        el.querySelectorAll(".m-link"),
        { yPercent: 110 },
        { yPercent: 0, duration: reduce ? 0 : 0.9, stagger: 0.06, ease: "expo.out", delay: reduce ? 0 : 0.35 },
      );
    } else {
      document.documentElement.style.overflow = "";
      gsap.to(el, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: reduce ? 0 : 0.6,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(el, { display: "none" });
        },
      });
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-20 items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="pointer-events-auto flex h-11 items-center rounded-full bg-ink/75 px-5 text-chalk shadow-[0_8px_30px_-12px_rgb(0_0_0/0.4)] backdrop-blur-md"
            aria-label="ByGheith home"
          >
            <span className="display text-lg leading-none tracking-[-0.02em]">
              By<span className="text-signal">.</span>Gheith
            </span>
          </Link>

          <div className="pointer-events-auto hidden items-center gap-2 md:flex">
            <div className="flex h-11 items-center gap-7 rounded-full bg-ink/75 px-6 text-chalk shadow-[0_8px_30px_-12px_rgb(0_0_0/0.4)] backdrop-blur-md">
              {links.map((l) => {
                const active = pathname?.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-u text-[0.95rem] font-medium ${active ? "!bg-[length:100%_1.5px]" : ""}`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
            <Link href="/book" className="btn btn-signal !h-11 !px-5 !py-0 !text-sm">
              Get in touch
            </Link>
          </div>

          <button
            className="pointer-events-auto relative z-[56] flex h-11 items-center gap-3 rounded-full bg-chalk px-4 text-sm font-semibold text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-overlay"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="relative block h-2.5 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${open ? "top-1 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${open ? "top-1 -rotate-45" : "top-2"}`}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        ref={overlay}
        id="menu-overlay"
        className="fixed inset-0 z-[55] hidden flex-col justify-between bg-signal px-5 pb-8 pt-28 text-signal-ink sm:px-8"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <ul className="space-y-1">
          {[{ href: "/", label: "Home" }, ...links, { href: "/work", label: "Work" }].map((l) => (
            <li key={l.href} className="overflow-hidden">
              <Link href={l.href} onClick={() => setOpen(false)} className="m-link display block text-[15vw] leading-[0.95]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/book" onClick={() => setOpen(false)} className="btn btn-chalk w-full !text-base">
          Get in touch
        </Link>
      </div>
    </>
  );
}
