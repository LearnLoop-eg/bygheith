"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { gsap, SplitText, registerGsap, prefersReducedMotion } from "@/components/motion/gsap";
import Magnetic from "@/components/motion/Magnetic";

/**
 * The signature moment. The name frames a single portrait; scrolling pins the
 * stage, the name splits apart and the portrait opens to fill the screen.
 */
export default function HeroStage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const el = root.current;
    if (!el) return;
    const reduce = prefersReducedMotion();
    const photo = el.querySelector<HTMLElement>(".hero-photo")!;
    const img = el.querySelector<HTMLElement>(".hero-photo img")!;
    const first = el.querySelector<HTMLElement>(".hero-first")!;
    const last = el.querySelector<HTMLElement>(".hero-last")!;
    const tail = el.querySelector<HTMLElement>(".hero-tail")!;
    const after = el.querySelector<HTMLElement>(".hero-after")!;

    const mm = gsap.matchMedia();
    let splitA: SplitText | null = null;
    let splitB: SplitText | null = null;

    // card geometry (desktop): centered portrait card inside a full-bleed layer
    const card = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = Math.min(vw * 0.24, vh * 0.5, 440);
      const h = w * 1.34;
      const top = (vh - h) / 2 + vh * 0.02;
      const side = (vw - w) / 2;
      return { "--t": `${top}px`, "--s": `${side}px`, "--b": `${vh - top - h}px`, "--rad": "20px" };
    };

    const intro = () => {
      if (reduce) return;
      splitA = SplitText.create(first, { type: "chars", mask: "chars" });
      splitB = SplitText.create(last, { type: "chars", mask: "chars" });
      const tl = gsap.timeline();
      tl.from([...splitA.chars, ...splitB.chars], {
        yPercent: 115,
        duration: 1.2,
        stagger: 0.035,
        ease: "expo.out",
      })
        .from(img, { scale: 1.4, duration: 1.8, ease: "expo.out" }, 0.1)
        .from(photo, { autoAlpha: 0, duration: 0.6, ease: "power2.out" }, 0.1)
        .from(tail.children, { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08, ease: "expo.out" }, 0.5);
    };

    mm.add("(min-width: 768px)", () => {
      const apply = () => gsap.set(photo, card());
      apply();
      window.addEventListener("resize", apply);
      if (reduce) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=140%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(
        photo,
        { ...card(), immediateRender: false },
        { "--t": "0px", "--s": "0px", "--b": "0px", "--rad": "0px", ease: "power2.inOut" },
        0,
      )
        .to(img, { scale: 1.08, ease: "none" }, 0)
        .to(first, { xPercent: -60, autoAlpha: 0, ease: "power2.in" }, 0)
        .to(last, { xPercent: 60, autoAlpha: 0, ease: "power2.in" }, 0)
        .to(tail, { autoAlpha: 0, y: -40, ease: "power2.in", duration: 0.4 }, 0)
        .fromTo(after, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.45 }, 0.55);
      return () => window.removeEventListener("resize", apply);
    });

    mm.add("(max-width: 767px)", () => {
      photo.style.clipPath = "none";
      if (reduce) return;
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: photo, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });

    let off: (() => void) | undefined;
    if (window.__bgIntroDone) intro();
    else {
      gsap.set([first, last, photo, tail], { autoAlpha: 0 });
      const go = () => {
        gsap.set([first, last, photo, tail], { autoAlpha: 1 });
        intro();
      };
      window.addEventListener("bg:intro", go, { once: true });
      off = () => window.removeEventListener("bg:intro", go);
    }

    return () => {
      off?.();
      mm.revert();
      splitA?.revert();
      splitB?.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ink md:h-[100dvh]"
      aria-label="Ahmed Gheith"
    >
      {/* Name */}
      <h1 className="relative z-10 px-4 pt-24 sm:px-6 md:pointer-events-none md:absolute md:inset-x-0 md:top-0 md:z-20 md:pt-[10vh] md:text-chalk md:mix-blend-difference">
        <span className="hero-first display block text-[25vw] md:text-[18.5vw]">Ahmed</span>
        <span className="hero-last display -mt-[2vw] block text-right text-[25vw] md:mt-[14vh] md:text-[18.5vw]">
          Gheith
        </span>
      </h1>

      {/* Portrait: a card on desktop that opens to full-bleed */}
      <div className="hero-photo relative z-10 mx-4 mt-6 aspect-[3/4] overflow-hidden rounded-[18px] sm:mx-6 md:absolute md:inset-0 md:z-10 md:m-0 md:aspect-auto md:rounded-none">
        <Image
          src="/images/shoot/golf-cap.jpg"
          alt="Ahmed Gheith on the course, club in hand"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_22%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{ background: "linear-gradient(to top, rgb(11 12 11 / 0.8), rgb(11 12 11 / 0.05) 45%, rgb(11 12 11 / 0) 70%, rgb(11 12 11 / 0.45))" }}
        />
      </div>

      {/* Intro + actions */}
      <div className="hero-tail relative z-20 flex flex-col gap-6 px-4 pb-14 pt-8 sm:px-6 md:absolute md:inset-x-0 md:bottom-0 md:flex-row md:items-end md:justify-between md:px-8 md:pb-10">
        <p className="max-w-[30ch] text-lg leading-snug text-chalk md:text-xl">
          Founder & operator. I build and run ventures across MENA.
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

      {/* Revealed once the portrait fills the screen (desktop) */}
      <div className="hero-after pointer-events-none invisible absolute inset-x-0 bottom-0 z-20 hidden px-8 pb-14 md:block">
        <p className="display max-w-[14ch] text-[6.5vw] leading-[0.9] text-chalk">
          Brand. Ecommerce. Performance. Played like golf.
        </p>
      </div>
    </section>
  );
}
