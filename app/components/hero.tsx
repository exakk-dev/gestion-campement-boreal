import Link from "next/link";
import { HeroMedia } from "./hero-media";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-boreal-ink">
      <HeroMedia />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 sm:pt-44 md:px-10 md:pb-28 md:pt-48 lg:pt-52">
        <p className="hero-enter hero-enter-1 mb-4 max-w-md text-xs font-medium uppercase tracking-[0.25em] text-boreal-silver-mid">
          Location premium · Québec
        </p>
        <h1 className="hero-enter hero-enter-2 font-display max-w-[14ch] text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.02] tracking-tight text-boreal-mist">
          Roulottes aménagées, prêtes à livrer
        </h1>
        <p className="hero-enter hero-enter-3 mt-6 max-w-[42ch] text-lg leading-relaxed text-boreal-silver md:text-xl">
          Chantier, bureau ou espace modulaire — une demande, une réponse rapide.
          Sans complication.
        </p>
        <div className="hero-enter hero-enter-4 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
    </section>
  );
}
