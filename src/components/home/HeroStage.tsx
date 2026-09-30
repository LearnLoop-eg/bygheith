"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { gsap, SplitText, registerGsap, prefersReducedMotion } from "@/components/motion/gsap";
import Magnetic from "@/components/motion/Magnetic";

/**
 * The signature moment. Name on the left, portrait framed on the right.
 * Scrolling pins the stage: the name slides away and the portrait grows
 * to fill the screen, then the line lands over it.
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
    const name = el.querySelector<HTMLElement>(".hero-name")!;
    const lines = el.querySelectorAll<HTMLElement>(".hero-line");
    const tail = el.querySelector<HTMLElement>(".hero-tail")!;
    const after = el.querySelector<HTMLElement>(".hero-after")!;
    const shade = el.querySelector<HTMLElement>(".hero-shade")!;

    const mm = gsap.matchMedia();
    const splits: SplitText[] = [];

    const intro = () => {
      if (reduce) return;
      const chars: Element[] = [];
      lines.forEach((l) => {
        const s = SplitText.create(l, { type: "chars", mask: "chars", charsClass: "char" });
        splits.push(s);
        chars.push(...s.chars);
      });
      gsap
        .timeline()
        .from(chars, { yPercent: 115, duration: 1.2, stagger: 0.035, ease: "expo.out" })
        .fromTo(
          photo,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.out", clearProps: "clipPath" },
          0.15,
        )
        .from(img, { scale: 1.35, duration: 1.8, ease: "expo.out" }, 0.15)
        .from(tail.children, { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08, ease: "expo.out" }, 0.5);
    };

    // Desktop: the framed portrait grows into a full-bleed cover while pinned.
    mm.add("(min-width: 768px)", () => {
      if (reduce) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tl.to(
        photo,
        {
          top: 0,
          right: 0,
          bottom: 0,
          width: () => window.innerWidth,
          borderRadius: 0,
          ease: "power2.inOut",
        },
        0,
      )
        .to(name, { xPercent: -30, autoAlpha: 0, ease: "power2.in", duration: 0.6 }, 0)
        .to(tail, { autoAlpha: 0, y: -30, ease: "power2.in", duration: 0.4 }, 0)
        .fromTo(img, { objectPosition: "62% 22%" }, { objectPosition: "58% 6%", ease: "power2.inOut" }, 0)
        .fromTo(shade, { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.5 }, 0.3)
        .fromTo(after, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 }, 0.6);
    });

    mm.add("(max-width: 767px)", () => {
      if (reduce) return;
      gsap.fromTo(
        img,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: photo, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });

    let off: (() => void) | undefined;
    if (window.__bgIntroDone) intro();
    else {
      gsap.set([name, photo, tail], { autoAlpha: 0 });
      const go = () => {
        gsap.set([name, photo, tail], { autoAlpha: 1 });
        intro();
      };
      window.addEventListener("bg:intro", go, { once: true });
      off = () => window.removeEventListener("bg:intro", go);
    }

    return () => {
      off?.();
      mm.revert();
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ink md:h-[100dvh]"
      aria-label="Ahmed Gheith"
    >
      {/* Name + intro, left */}
      <div className="relative z-10 flex flex-col px-4 pt-28 sm:px-6 md:absolute md:inset-y-0 md:left-0 md:w-[60vw] md:justify-center md:px-8 md:pt-16">
        <h1 className="hero-name display text-[22vw] leading-[0.9] md:text-[11.5vw]">
          <span className="hero-line block">Ahmed</span>
          <span className="hero-line block">
            Gheith<span className="text-signal">.</span>
          </span>
        </h1>

        <div className="hero-tail mt-8 flex flex-col gap-7 md:mt-12">
          <p className="max-w-[36ch] text-lg leading-snug text-chalk/90 md:text-xl">
            Founder of LearnLoop. Partner at Beyond Reason. Leading marketing at
            Core Livings, Mountain View.
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
      </div>

      {/* Portrait: a tall frame on the right that grows to full-bleed */}
      <div className="hero-photo relative z-0 mx-4 mt-10 aspect-[4/5] overflow-hidden rounded-[22px] sm:mx-6 md:absolute md:bottom-[5vh] md:right-[2.5vw] md:top-[13vh] md:mx-0 md:mt-0 md:aspect-auto md:w-[33vw]">
        <Image
          src="/images/shoot/club-shoulder.jpg"
          alt="Ahmed Gheith on the course, club over his shoulder"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_22%]"
        />
        <div
          aria-hidden
          className="hero-shade absolute inset-0 hidden opacity-0 md:block"
          style={{
            background:
              "linear-gradient(90deg, rgb(15 31 69 / 0.75), rgb(15 31 69 / 0.1) 55%, rgb(15 31 69 / 0) 75%), linear-gradient(to top, rgb(15 31 69 / 0.55), transparent 40%)",
          }}
        />
      </div>

      {/* Lands once the portrait fills the screen (desktop) */}
      <div className="hero-after pointer-events-none invisible absolute inset-y-0 left-0 z-20 hidden items-end px-8 pb-14 md:flex">
        <p className="display max-w-[12ch] text-[6vw] leading-[0.95] text-chalk">
          Brand. Ecommerce. Performance. Played like golf.
        </p>
      </div>
    </section>
  );
}
