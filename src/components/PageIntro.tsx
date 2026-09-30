import Image from "next/image";
import { SplitReveal, ImageReveal, Rise } from "@/components/motion/Reveal";

/** Opening for inner pages: a big rising title, a line of intro, a wide photo. */
export default function PageIntro({
  title,
  intro,
  image,
  imageAlt = "",
  imagePos = "50% 40%",
}: {
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  imagePos?: string;
}) {
  return (
    <section className="px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-44">
      <SplitReveal as="h1" intro className="display max-w-[14ch] text-[15vw] md:text-[9.5vw]">
        {title}
      </SplitReveal>
      {intro && (
        <Rise delay={0.2}>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-mute md:ml-[40%] md:text-xl">
            {intro}
          </p>
        </Rise>
      )}
      {image && (
        <ImageReveal parallax={8} className="mt-16 aspect-[4/5] rounded-[18px] md:mt-24 md:aspect-[21/9]">
          <div data-inner className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: imagePos }}
            />
          </div>
        </ImageReveal>
      )}
    </section>
  );
}
