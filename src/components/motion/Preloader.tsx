"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "./gsap";

declare global {
  interface Window {
    __bgIntroDone?: boolean;
  }
}

function finish() {
  window.__bgIntroDone = true;
  window.dispatchEvent(new Event("bg:intro"));
}

/** First-visit intro: a count to 100, the wordmark, then the curtain lifts. */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    registerGsap();
    const el = root.current;
    if (!el) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem("bg-intro") === "1";
      sessionStorage.setItem("bg-intro", "1");
    } catch {}

    if (seen || prefersReducedMotion()) {
      gsap.to(el, {
        autoAlpha: 0,
        duration: seen ? 0.35 : 0.2,
        onComplete: () => setGone(true),
      });
      finish();
      return;
    }

    const counter = { v: 0 };
    const tl = gsap.timeline({ onComplete: () => setGone(true) });
    tl.to(".pl-word span", {
      yPercent: 0,
      duration: 0.9,
      stagger: 0.035,
      ease: "expo.out",
    })
      .to(
        counter,
        {
          v: 100,
          duration: 1.4,
          ease: "power3.inOut",
          onUpdate: () => {
            if (count.current)
              count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
          },
        },
        0,
      )
      .to(".pl-bar", { scaleX: 1, duration: 1.4, ease: "power3.inOut" }, 0)
      .to(".pl-word span", {
        yPercent: -110,
        duration: 0.6,
        stagger: 0.02,
        ease: "expo.in",
      })
      .add(finish, "-=0.1")
      .to(
        el,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1,
          ease: "expo.inOut",
        },
        "-=0.25",
      );
    return () => {
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="preloader fixed inset-0 z-[70] flex flex-col justify-between bg-ink p-5 text-chalk sm:p-8"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="label text-mute">ByGheith</div>
      <div className="pl-word display overflow-clip text-center text-[18vw] leading-[0.85] sm:text-[13vw]">
        {"GHEITH".split("").map((c, i) => (
          <span key={i} className="inline-block translate-y-[110%]">
            {c}
          </span>
        ))}
      </div>
      <div>
        <div className="flex items-end justify-between">
          <span className="label text-mute">Play the long game</span>
          <span ref={count} className="display num text-6xl sm:text-8xl">
            000
          </span>
        </div>
        <div className="pl-bar mt-4 h-px origin-left scale-x-0 bg-signal" />
      </div>
      <style>{`.preloader{animation:pl-failsafe 0s 5s forwards}@keyframes pl-failsafe{to{visibility:hidden}}`}</style>
    </div>
  );
}
