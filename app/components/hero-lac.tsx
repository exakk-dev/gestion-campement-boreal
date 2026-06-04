import Image from "next/image";
import Link from "next/link";
import { photos } from "../lib/photos";
import { brand } from "../lib/brand";

export function HeroLac() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-boreal-ink">
      <Image
        src={photos.lac.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dégradé zinc : clair à gauche → gris foncé à droite */}
      <div
        className="absolute inset-0 bg-linear-to-r from-transparent via-zinc-800/40 to-zinc-950/90"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-zinc-900/45 via-transparent to-zinc-800/20"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1400px] items-center px-6 md:px-10">
        <div className="flex w-full max-w-3xl flex-col items-start justify-center py-24">
          <div className="hero-enter hero-enter-1">
           <Image src={brand.logos.mark.src} alt={brand.name} width={400} height={500} />
          </div>

          <div className="hero-enter hero-enter-2 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/location"
              className="btn-lift inline-flex h-14 items-center justify-center bg-boreal-mist px-10 text-base font-medium text-boreal-ink hover:bg-boreal-silver"
            >
              Commencer ma location
            </Link>
            <Link
              href="/#unites"
              className="btn-lift inline-flex h-14 items-center justify-center border border-boreal-silver-mid/50 px-8 text-base text-boreal-mist hover:border-boreal-mist hover:bg-white/5"
            >
              Voir les unités
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
