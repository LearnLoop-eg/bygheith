"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerGsap, prefersReducedMotion } from "./gsap";

/** One endless band. Speeds up and flips direction with scroll velocity. */
export default function Marquee({
  items,
  className = "",
  dotClass = "bg-signal",
}: {
  items: string[];
  className?: string;
  dotClass?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = track.current;
    if (!el || prefersReducedMotion()) return;
    const loop = gsap.to(el, { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
    let dir = 1;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onUpdate(self) {
        const v = self.getVelocity();
        if (v !== 0) dir = v > 0 ? 1 : -1;
        const boost = 1 + Math.min(Math.abs(v) / 300, 6);
        gsap.to(loop, { timeScale: dir * boost, duration: 0.2, overwrite: true });
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2 });
      },
    });
    return () => {
      st.kill();
      loop.kill();
    };
  }, []);

  const row = (
    <>
      {items.map((t) => (
        <span key={t} className="flex items-center gap-[4vw] pr-[4vw]">
          <span>{t}</span>
          <span aria-hidden className={`inline-block size-[0.3em] rounded-full ${dotClass}`} />
        </span>
      ))}
    </>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={track} className="flex w-max whitespace-nowrap">
        <div className="flex">{row}</div>
        <div className="flex" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  );
}
