import type { Metadata } from "next";
import { RentalForm } from "../components/rental-form";
import { Reveal } from "../components/reveal";
import { brand } from "../lib/brand";

export const metadata: Metadata = {
  title: "Demande de location",
  description: `Formulaire de location — ${brand.name}. ${brand.tagline}.`,
};

export default function LocationPage() {
  return (
    <main className="bg-boreal-mist">
      <section className="border-b border-boreal-silver-mid/30 bg-boreal-ink pt-40 pb-16 sm:pt-44 md:pb-20 md:pt-48 lg:pt-52">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal variant="fade" delay={0}>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-boreal-silver-mid">
              Location
            </p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="font-display mt-4 max-w-[16ch] text-4xl leading-tight tracking-tight text-boreal-mist md:text-5xl">
              Votre demande en quelques minutes
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-boreal-silver">
              Remplissez le formulaire — nous confirmons disponibilité, livraison
              et devis sans aller-retour inutile.
            </p>
            <p className="mt-6 text-boreal-silver-mid">
              Ou appelez-nous :{" "}
              <a
                href={`tel:${brand.phone.tel}`}
                className="font-medium text-boreal-mist transition-colors hover:text-white"
              >
                {brand.phone.vanity}
              </a>
              <span className="text-boreal-silver-mid/80">
                {" "}
                ({brand.phone.numeric})
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="formulaire"
        className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24"
      >
        <Reveal variant="up" delay={100}>
          <RentalForm />
        </Reveal>
      </section>
    </main>
  );
}
