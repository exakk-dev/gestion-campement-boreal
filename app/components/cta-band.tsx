import Link from "next/link";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="bg-boreal-ink py-20 md:py-24">
      <Reveal className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <h2 className="font-display max-w-[20ch] text-3xl leading-tight text-boreal-mist md:text-4xl">
          Prêt à louer? Une seule étape.
        </h2>
        <Link
          href="/location"
          className="btn-lift inline-flex h-14 shrink-0 items-center justify-center bg-boreal-mist px-12 text-base font-medium text-boreal-ink hover:bg-boreal-silver"
        >
          Accéder au formulaire
        </Link>
      </Reveal>
    </section>
  );
}
