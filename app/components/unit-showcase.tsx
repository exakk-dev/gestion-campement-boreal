import Image from "next/image";
import Link from "next/link";
import { photos } from "../lib/photos";
import { Reveal, RevealStagger } from "./reveal";

const units = [
  {
    name: "Roulotte de chantier",
    desc: "Base chauffée, vestiaire et espace pause pour vos équipes sur site.",
    tag: "Chantier",
    image: photos.accueil,
  },
  {
    name: "Bureau modulaire",
    desc: "Postes de travail, réunion et accueil — prêt pour vos plans de site.",
    tag: "Bureau",
    image: photos.nuit,
  },
  {
    name: "Unité sur mesure",
    desc: "Aménagement adapté : sanitaire, stockage, garde-manger ou polyvalent.",
    tag: "Sur mesure",
    image: photos.lac,
  },
] as const;

export function UnitShowcase() {
  return (
    <section id="unites" className="bg-boreal-mist py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-boreal-forest">
              Nos unités
            </p>
            <h2 className="font-display mt-3 text-4xl tracking-tight text-boreal-ink md:text-5xl">
              Choisissez, on s&apos;occupe du reste
            </h2>
          </div>
          <Link
            href="/location"
            className="link-slide text-sm font-medium text-boreal-forest-deep"
          >
            Toutes les options → formulaire
          </Link>
        </Reveal>

        <RevealStagger
          as="ul"
          className="mt-16 flex flex-col gap-20 md:gap-28"
          stagger={140}
        >
          {units.map((unit, index) => (
            <li
              key={unit.name}
              className={`group grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-boreal-ink">
                <Image
                  src={unit.image.src}
                  alt={unit.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-boreal-ink/10 transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <div className="md:py-4">
                <span className="text-xs font-medium uppercase tracking-widest text-boreal-silver-mid">
                  {unit.tag}
                </span>
                <h3 className="font-display mt-2 text-2xl text-boreal-ink md:text-3xl">
                  {unit.name}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-boreal-ink/70">
                  {unit.desc}
                </p>
                <Link
                  href="/location"
                  className="btn-lift mt-8 inline-flex h-11 items-center border border-boreal-ink px-6 text-sm font-medium group-hover:bg-boreal-ink group-hover:text-boreal-mist"
                >
                  Louer
                </Link>
              </div>
            </li>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
