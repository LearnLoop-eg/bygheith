"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { gsap, registerGsap, prefersReducedMotion } from "@/components/motion/gsap";

const lessons = [
  {
    title: "Precision over power.",
    body: "The longest drive means nothing if it's in the trees. Reach is worthless without aim.",
  },
  {
    title: "Composure under pressure.",
    body: "A bad hole doesn't lose the round; panicking does. Stay with the plan through a slow quarter.",
  },
  {
    title: "Play the long game.",
    body: "You don't win on one shot. You win over eighteen holes, over seasons, over years of deliberate decisions.",
  },
];

/** Scroll hits the shot: the ball flight draws across the screen, one lesson per third. */
export default function LongGame({ showLink = true }: { showLink?: boolean }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const el = root.current!;
    const path = el.querySelector<SVGPathElement>(".flight")!;
    const ball = el.querySelector<HTMLElement>(".ball")!;
    const svg = el.querySelector<SVGSVGElement>("svg")!;
    const items = gsap.utils.toArray<HTMLElement>(".lesson", el);
    const len = path.getTotalLength();

    if (prefersReducedMotion()) {
      gsap.set(path, { strokeDasharray: "none" });
      el.classList.add("lg-static");
      gsap.set(ball, { autoAlpha: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(items, { autoAlpha: 0, y: 40 });
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.6,
        },
      });
      const flight = { p: 0 };
      const place = () => {
        const pt = path.getPointAtLength(flight.p * len);
        const r = svg.getBoundingClientRect();
        const box = el.getBoundingClientRect();
        gsap.set(ball, {
          x: r.left - box.left + (pt.x / 1000) * r.width,
          y: r.top - box.top + (pt.y / 600) * r.height,
        });
      };
      place();
      tl.to(path, { strokeDashoffset: 0, duration: 3 }, 0).to(
        flight,
        { p: 1, duration: 3, onUpdate: place },
        0,
      );
      items.forEach((it, i) => {
        tl.to(it, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, i * 1 + 0.05);
        if (i < items.length - 1)
          tl.to(it, { autoAlpha: 0, y: -40, duration: 0.3, ease: "power2.in" }, i * 1 + 0.75);
      });
      gsap.fromTo(
        el.querySelector(".lg-bg"),
        { scale: 1.15 },
        { scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "+=300%", scrub: true } },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100dvh] overflow-hidden bg-ink">
      <div className="lg-bg absolute inset-0">
        <Image
          src="/images/shoot/fairway-walk.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_60%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-[14%] h-[62%] w-full"
      >
        <path
          d="M 40 560 C 260 -120, 720 -60, 960 520"
          fill="none"
          stroke="rgb(242 241 236 / 0.14)"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="flight"
          d="M 40 560 C 260 -120, 720 -60, 960 520"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div
        aria-hidden
        className="ball absolute left-0 top-0 z-10 -ml-2.5 -mt-2.5 size-5 rounded-full bg-chalk shadow-[0_0_0_6px_rgb(255_90_31/0.25)]"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-12 pt-28 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <h2 className="display text-[14vw] md:text-[8vw]">The long game.</h2>
          {showLink && (
            <Link href="/golf" className="btn btn-line mt-2 hidden text-chalk md:inline-flex">
              More on golf <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          )}
        </div>
        <div className="relative min-h-[40vh] md:min-h-[30vh]">
          {lessons.map((l) => (
            <div key={l.title} className="lesson absolute inset-x-0 bottom-0 md:max-w-[62vw]">
              <p className="display text-[11vw] md:text-[6vw]">{l.title}</p>
              <p className="mt-5 max-w-[46ch] text-lg text-chalk/80 md:text-xl">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
