"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header-enter fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
        scrolled
          ? "border-white/15 bg-boreal-ink/95 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "border-white/10 bg-boreal-ink/80"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 transition-[min-height] duration-500 ease-out md:px-10 ${
          scrolled ? "min-h-14" : "min-h-16 md:min-h-[4.5rem]"
        }`}
      >
        <BrandLogo variant="header" priority compact={scrolled} />
        <nav className="flex items-center gap-6 md:gap-10">
          <Link
            href="/#unites"
            className="link-slide hidden text-sm text-boreal-silver-mid transition-colors hover:text-boreal-mist sm:inline"
          >
            Unités
          </Link>
          <Link
            href="/location"
            className="btn-lift inline-flex h-10 items-center justify-center bg-boreal-mist px-5 text-sm font-medium tracking-wide text-boreal-ink hover:bg-boreal-silver"
          >
            Louer maintenant
          </Link>
        </nav>
      </div>
    </header>
  );
}
