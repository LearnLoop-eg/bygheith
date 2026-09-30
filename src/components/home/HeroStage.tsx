"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { gsap, SplitText, registerGsap, prefersReducedMotion } from "@/components/motion/gsap";
import Magnetic from "@/components/motion/Magnetic";

// Landscape frames only, so the band never crops a face awkwardly.
const slides = [
  { src: "/images/shoot/fairway-call-wide.jpg", alt: "Ahmed Gheith on a call on the fairway", pos: "50% 38%" },
  { src: "/images/shoot/laptop-look.jpg", alt: "Ahmed Gheith working outdoors", pos: "58% 30%" },
  { src: "/images/shoot/laptop-think.jpg", alt: "Ahmed Gheith thinking over his laptop", pos: "55% 30%" },
];

/**
 * Edge-to-edge cinema band that cycles the shoot with wipe transitions,
 * and the full name set across the width beneath it. Text never sits on
 * the photo. Scrolling pins the stage and the band opens to fill the screen.
 */
export default function HeroStage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const el = root.current;
    if (!el) return;
    const reduce = prefersReducedMotion();
    const band = el.querySelector<HTMLElement>(".hero-band")!;
    const frames = gsap.utils.toArray<HTMLElement>(".hero-slide", el);
    const imgs = frames.map((f) => f.querySelector("img")!);
    const bar = el.querySelector<HTMLElement>(".hero-bar")!;
    const name = el.querySelector<HTMLElement>(".hero-name")!;
    const nameText = el.querySelector<HTMLElement>(".hero-name-text")!;
    const tail = el.querySelector<HTMLElement>(".hero-tail")!;
    const slot = el.querySelector<HTMLElement>(".hero-slot")!;
    const cleanups: (() => void)[] = [];

    // Desktop: the band sits exactly over the flexible slot left between nav and text.
    const slotTop = () => slot.offsetTop;
    const slotBottom = () => el.offsetHeight - (slot.offsetTop + slot.offsetHeight);

    // Fit the name to the full width, whatever the viewport.
    const fit = () => {
      nameText.style.fontSize = "100px";
      const cs = getComputedStyle(name);
      const w = name.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const tw = nameText.scrollWidth;
      if (tw > 0) nameText.style.fontSize = `${Math.floor((100 * w) / tw)}px`;
    };
    fit();
    document.fonts.ready.then(fit);
    const place = () => {
      if (window.innerWidth < 768) return gsap.set(band, { clearProps: "top,bottom" });
      if (ScrollTriggerActive()) return;
      gsap.set(band, { top: slotTop(), bottom: slotBottom() });
    };
    const ScrollTriggerActive = () => el.parentElement?.classList.contains("pin-spacer") && window.scrollY > 0;
    const ro = new ResizeObserver(() => {
      fit();
      place();
    });
    ro.observe(name);
    ro.observe(el);
    place();
    cleanups.push(() => ro.disconnect());

    // Slideshow: each new frame wipes in from the right while settling in scale.
    gsap.set(frames, { zIndex: (i: number) => frames.length - i });
    let show: gsap.core.Timeline | null = null;
    if (!reduce && frames.length > 1) {
      let current = 0;
      let z = frames.length + 1;
      const next = () => {
        const n = (current + 1) % frames.length;
        const f = frames[n];
        gsap.set(f, { zIndex: ++z });
        gsap.fromTo(
          f,
          { clipPath: "inset(0% 0% 0% 100%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
        );
        gsap.fromTo(imgs[n], { scale: 1.22 }, { scale: 1.04, duration: 2.4, ease: "expo.out" });
        current = n;
      };
      show = gsap.timeline({ repeat: -1, paused: true });
      show.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 4.2, ease: "none" }).call(next);
      cleanups.push(() => show?.kill());

      // run only while the hero is on screen
      const io = new IntersectionObserver(([e]) => {
        if (!window.__bgIntroDone) return;
        if (e.isIntersecting) show?.play();
        else show?.pause();
      });
      io.observe(el);
      cleanups.push(() => io.disconnect());
    }

    // Subtle pointer drift on the photos (fine pointers only).
    if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const wraps = frames;
      const xTo = gsap.quickTo(wraps, "x", { duration: 1.4, ease: "power3.out" });
      const yTo = gsap.quickTo(wraps, "y", { duration: 1.4, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        xTo((e.clientX / window.innerWidth - 0.5) * -22);
        yTo((e.clientY / window.innerHeight - 0.5) * -12);
      };
      gsap.set(wraps, { scale: 1.04 });
      window.addEventListener("pointermove", move);
      cleanups.push(() => window.removeEventListener("pointermove", move));
    }

    // Intro after the preloader.
    let split: SplitText | null = null;
    const intro = () => {
      show?.play();
      if (reduce) return;
      fit();
      split = SplitText.create(nameText, { type: "chars", mask: "chars", charsClass: "char" });
      gsap
        .timeline()
        .fromTo(
          band,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut", clearProps: "clipPath" },
        )
        .from(imgs[0], { scale: 1.3, duration: 2.2, ease: "expo.out" }, 0.2)
        .from(split.chars, { yPercent: 110, duration: 1.2, stagger: 0.03, ease: "expo.out" }, 0.45)
        .from(tail.children, { y: 20, autoAlpha: 0, duration: 1, stagger: 0.08, ease: "expo.out" }, 0.7);
    };

    // Scroll: pin, the band opens to full screen, the name drops away.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (reduce) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=110%",
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          band,
          { top: () => slotTop(), bottom: () => slotBottom() },
          { top: 0, bottom: 0, ease: "power2.inOut", immediateRender: false },
          0,
        )
        .to(name, { yPercent: 80, autoAlpha: 0, ease: "power2.in", duration: 0.7 }, 0)
        .to(tail, { autoAlpha: 0, ease: "power2.in", duration: 0.4 }, 0);
    });
    cleanups.push(() => mm.revert());

    if (window.__bgIntroDone) intro();
    else {
      gsap.set([band, name, tail], { autoAlpha: 0 });
      const go = () => {
        gsap.set([band, name, tail], { autoAlpha: 1 });
        intro();
      };
      window.addEventListener("bg:intro", go, { once: true });
      cleanups.push(() => window.removeEventListener("bg:intro", go));
    }

    return () => {
      cleanups.forEach((c) => c());
      split?.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative flex flex-col overflow-hidden bg-ink md:h-[100dvh]" aria-label="Ahmed Gheith">
      <div aria-hidden className="hidden h-[5.5rem] shrink-0 md:block" />
      <div aria-hidden className="hero-slot hidden min-h-0 flex-1 md:block" />

      {/* Cinema band: edge to edge, photos only */}
      <div className="hero-band relative aspect-[4/3] overflow-hidden bg-ink-3 md:absolute md:inset-x-0 md:aspect-auto">
        {slides.map((s, i) => (
          <div key={s.src} className="hero-slide absolute -inset-[3%] overflow-hidden">
            <Image
              src={s.src}
              alt={i === 0 ? s.alt : ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: s.pos }}
            />
          </div>
        ))}
        <div className="hero-bar absolute bottom-0 left-0 z-[99] h-[3px] w-full origin-left scale-x-0 bg-signal" aria-hidden />
      </div>

      {/* Roles + actions */}
      <div className="hero-tail relative z-10 flex shrink-0 flex-col gap-6 px-4 pb-14 pt-7 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
        <p className="max-w-[46ch] text-lg leading-snug text-chalk/90 md:text-xl">
          Founder of LearnLoop. Partner at Beyond Reason. Leading marketing at Core
          Livings, Mountain View.
        </p>
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Link href="/book" className="btn btn-signal">
              Get in touch <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/ventures" className="btn btn-line text-chalk">
              See what I&apos;m building
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* The name, fitted to the full width */}
      <h1 className="hero-name relative z-10 order-first shrink-0 px-4 pb-6 pt-24 sm:px-6 md:order-last md:px-8 md:pb-[3vh] md:pt-0">
        <span className="hero-name-text display inline-block whitespace-nowrap leading-[0.86]">
          Ahmed Gheith<span className="text-signal">.</span>
        </span>
      </h1>
    </section>
  );
}
