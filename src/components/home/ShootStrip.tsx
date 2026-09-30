"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/components/motion/gsap";

const frames = [
  { src: "/images/shoot/call-fairway.jpg", alt: "On a call on the fairway", h: "md:h-[68vh]", pos: "50% 25%" },
  { src: "/images/shoot/laptop-look.jpg", alt: "Working outdoors on a laptop", h: "md:h-[48vh]", wide: true, pos: "60% 40%" },
  { src: "/images/shoot/club-shoulder.jpg", alt: "Club over the shoulder by the lake", h: "md:h-[74vh]", pos: "50% 30%" },
  { src: "/images/shoot/ipad-wall.jpg", alt: "Mid-conversation, tablet in hand", h: "md:h-[58vh]", pos: "50% 25%" },
  { src: "/images/shoot/fairway-walk.jpg", alt: "Walking the fairway with the bag", h: "md:h-[70vh]", pos: "50% 55%" },
  { src: "/images/shoot/call-sofa.jpg", alt: "Taking a call between rounds", h: "md:h-[52vh]", pos: "50% 30%" },
  { src: "/images/shoot/cart-frame.jpg", alt: "Seen through the golf cart", h: "md:h-[66vh]", pos: "50% 55%" },
];

/** Pinned horizontal film strip of the shoot. Vertical scroll pans it sideways. */
export default function ShootStrip() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const t = track.current!;
      const distance = () => t.scrollWidth - window.innerWidth;
      const pan = gsap.to(t, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      // inner parallax: each photo drifts against the pan
      t.querySelectorAll<HTMLElement>("[data-drift]").forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -8 },
          {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              containerAnimation: pan,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden bg-ink md:h-[100dvh]">
      <div
        ref={track}
        className="flex flex-col gap-4 px-4 py-24 sm:px-6 md:h-full md:w-max md:flex-row md:items-center md:gap-[2.5vw] md:px-[6vw] md:py-0"
      >
        <div className="md:w-[34vw] md:shrink-0 md:pr-[4vw]">
          <h2 className="display text-[15vw] md:text-[7.2vw]">
            On the call.
            <br />
            <span className="text-signal">On the course.</span>
          </h2>
          <p className="mt-6 max-w-[34ch] text-lg text-mute">
            Most of the work happens between the two. Deals, ideas and decisions,
            made in the open air.
          </p>
        </div>
        {frames.map((f) => (
          <figure
            key={f.src}
            className={`relative shrink-0 overflow-hidden rounded-[18px] bg-ink-3 ${
              f.wide ? "aspect-[3/2] md:aspect-auto md:w-[72vh]" : "aspect-[3/4] md:aspect-auto md:w-[40vh]"
            } ${f.h}`}
          >
            <div data-drift className="absolute -inset-x-[10%] inset-y-0">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 92vw, 45vh"
                className="object-cover"
                style={{ objectPosition: f.pos }}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
