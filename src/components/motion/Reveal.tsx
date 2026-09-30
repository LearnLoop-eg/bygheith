"use client";

import { useEffect, useRef } from "react";
import { gsap, SplitText, registerGsap, prefersReducedMotion } from "./gsap";

type Tag = "h1" | "h2" | "h3" | "p" | "div";

/**
 * Lines rise out of a mask as the element enters view.
 * `intro` waits for the preloader before playing (for above-the-fold headings).
 */
export function SplitReveal({
  as: Tag = "h2",
  children,
  className = "",
  delay = 0,
  intro = false,
}: {
  as?: Tag;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  intro?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let split: SplitText | null = null;
    let tween: gsap.core.Tween | null = null;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "line",
        autoSplit: true,
        onSplit(self) {
          tween?.kill();
          tween = gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.1,
            stagger: 0.08,
            ease: "expo.out",
            delay,
            scrollTrigger: intro ? undefined : { trigger: el, start: "top 88%", once: true },
          });
          return tween;
        },
      });
    };

    document.fonts.ready.then(() => {
      if (intro && !window.__bgIntroDone) {
        gsap.set(el, { autoAlpha: 0 });
        const onIntro = () => {
          gsap.set(el, { autoAlpha: 1 });
          run();
        };
        window.addEventListener("bg:intro", onIntro, { once: true });
      } else run();
    });

    return () => {
      cancelled = true;
      tween?.kill();
      split?.revert();
    };
  }, [delay, intro]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}

/** Words light up one by one, scrubbed to scroll. */
export function WordScrub({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const split = SplitText.create(el, { type: "words" });
    const tween = gsap.fromTo(
      split.words,
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}

/** Photo revealed by a rising clip, with a slow settle in scale. Parallax optional. */
export function ImageReveal({
  children,
  className = "",
  parallax = 0,
}: {
  children: React.ReactNode;
  className?: string;
  parallax?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const inner = el.querySelector<HTMLElement>("[data-inner]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );
      if (inner) {
        gsap.fromTo(inner, { scale: 1.25 }, {
          scale: 1,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
        if (parallax) {
          gsap.fromTo(
            inner,
            { yPercent: -parallax },
            {
              yPercent: parallax,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }
      }
    }, el);
    return () => ctx.revert();
  }, [parallax]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

/** Counts from 0 to the value when it enters view. Keeps suffix/prefix/commas. */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const m = value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!m) return;
    const [, pre, digits, post] = m;
    const target = Number(digits.replace(/,/g, ""));
    const hasComma = digits.includes(",");
    const obj = { v: 0 };
    const fmt = (n: number) => {
      const r = Math.round(n);
      return pre + (hasComma ? r.toLocaleString("en-US") : String(r)) + post;
    };
    el.textContent = fmt(0);
    const tween = gsap.to(obj, {
      v: target,
      duration: 1.8,
      ease: "power3.out",
      onUpdate: () => (el.textContent = fmt(obj.v)),
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className={`num ${className}`}>
      {value}
    </span>
  );
}

/** Generic fade-up for small groups. */
export function Rise({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const tween = gsap.from(el, {
      y: 40,
      autoAlpha: 0,
      duration: 1.1,
      delay,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(el, { clearProps: "all" });
    };
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
