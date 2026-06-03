import Image from "next/image";
import Link from "next/link";
import { photos } from "../lib/photos";
import { Reveal } from "./reveal";

export function PlanSection() {
  return (
    <section className="relative overflow-hidden bg-boreal-silver py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center md:gap-16 md:px-10">
        <Reveal variant="left" className="md:pr-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-boreal-forest-deep">
            Aménagement
          </p>
          <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight text-boreal-ink md:text-5xl">
            Pensé pour le terrain,
            <br />
            fini comme un plan d&apos;architecte
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-boreal-ink/75">
            Chaque unité est configurée selon vos besoins : dimensions, divisions,
            électricité et livraison. Vous décrivez le projet — nous validons la
            solution.
          </p>
          <Link
            href="/location"
            className="btn-lift mt-10 inline-flex h-12 items-center bg-boreal-ink px-8 text-sm font-medium text-boreal-mist hover:bg-boreal-ink-soft"
          >
            Soumettre une demande
          </Link>
        </Reveal>

        <Reveal
          variant="scale"
          delay={120}
          className="plan-float relative md:-mr-4 lg:-mr-10"
        >
          <div className="relative aspect-[5/4] overflow-hidden shadow-[0_32px_64px_rgba(11,13,14,0.15)]">
            <Image
              src={photos.lac.src}
              alt={photos.lac.alt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <Image
            src="/plan-sketch.svg"
            alt=""
            width={160}
            height={120}
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-4 w-28 opacity-90 drop-shadow-lg md:w-36"
          />
        </Reveal>
      </div>
    </section>
  );
}
