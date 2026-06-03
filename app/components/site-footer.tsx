import Link from "next/link";
import { brand } from "../lib/brand";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-boreal-silver-mid/30 bg-boreal-ink text-boreal-silver-mid">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <BrandLogo variant="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Location de roulottes de chantier et unités aménagées — livraison,
            installation et service réactif.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:items-end">
          <Link
            href="/location"
            className="text-boreal-mist transition-colors hover:text-white"
          >
            Demande de location
          </Link>
          <a
            href={`tel:${brand.phone.tel}`}
            className="group text-boreal-mist transition-colors hover:text-white"
          >
            <span className="block font-medium tracking-wide">
              {brand.phone.vanity}
            </span>
            <span className="mt-0.5 block text-boreal-silver-mid transition-colors group-hover:text-boreal-silver">
              {brand.phone.numeric}
            </span>
          </a>
          <a
            href={`mailto:${brand.email}`}
            className="transition-colors hover:text-boreal-mist"
          >
            {brand.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-5 text-center text-xs text-boreal-silver-mid/70 md:px-10">
        © {new Date().getFullYear()} {brand.name}
      </div>
    </footer>
  );
}
