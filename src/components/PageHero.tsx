import Image from "next/image";
import { Section, Pergola } from "@/components/Section";

/** Inner-page opening: a terracotta wall with the page title, optional arch photo. */
export default function PageHero({
  title,
  intro,
  image,
  imageAlt = "",
  imagePosition = "center",
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-wall text-ink">
      <Pergola />
      <Section
        className={`relative grid gap-10 pb-16 pt-14 md:pb-24 md:pt-20 ${
          image ? "md:grid-cols-12 md:items-end" : ""
        }`}
      >
        <div className={image ? "md:col-span-7" : "max-w-4xl"}>
          <h1 className="display text-[2.6rem] sm:text-6xl lg:text-[5rem]">
            {title}
          </h1>
          {intro && (
            <p className="prose-body mt-7 text-lg leading-relaxed text-ink">
              {intro}
            </p>
          )}
        </div>
        {image && (
          <div className="md:col-span-4 md:col-start-9">
            <div className="arch arch-reveal relative mx-auto aspect-[3/4] w-full max-w-[340px] md:max-w-none">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                style={{ objectPosition: imagePosition }}
              />
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
