import Image from "next/image";
import { photos } from "../lib/photos";
import { Reveal } from "./reveal";

export function PhotoBreak() {
  return (
    <section className="relative h-[min(70vh,720px)] overflow-hidden bg-boreal-ink">
      <Reveal variant="fade" className="absolute inset-0">
        <Image
          src={photos.nuit.src}
          alt={photos.nuit.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-boreal-ink/80 via-boreal-ink/30 to-transparent"
          aria-hidden
        />
      </Reveal>
      <div className="relative mx-auto flex h-full max-w-[1400px] items-end px-6 pb-16 md:px-10 md:pb-20">
        <Reveal variant="up" delay={120} className="max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-boreal-silver-mid">
            Sur le terrain
          </p>
          <p className="font-display mt-3 text-3xl leading-tight text-boreal-mist md:text-4xl">
            Installé, éclairé, prêt à travailler — même la nuit
          </p>
        </Reveal>
      </div>
    </section>
  );
}
