import Image from "next/image";
import Link from "next/link";
import { brand } from "../lib/brand";

const HEADER_LOGO = {
  width: 192,
  height: 240,
  expanded:
    "h-[5.5rem] w-auto sm:h-[6.5rem] md:h-32 lg:h-[8.5rem]",
  compact: "h-11 w-auto sm:h-12 md:h-14",
} as const;

const sizes = {
  header: HEADER_LOGO,
  footer: {
    width: 176,
    height: 220,
    className: "h-28 w-auto sm:h-32 md:h-36",
  },
} as const;

type BrandLogoProps = {
  variant?: keyof typeof sizes;
  linked?: boolean;
  priority?: boolean;
  /** Navbar : logo réduit après scroll */
  compact?: boolean;
};

export function BrandLogo({
  variant = "header",
  linked = true,
  priority = false,
  compact = false,
}: BrandLogoProps) {
  if (variant === "header") {
    const { width, height, expanded, compact: compactClass } = HEADER_LOGO;
    const image = (
      <Image
        src="/logos/logo-dark.png"
        alt={brand.name}
        width={width}
        height={height}
        className={`object-contain object-left transition-[height] duration-500 ease-out ${
          compact ? compactClass : expanded
        }`}
        priority={priority}
      />
    );

    if (!linked) return image;

    return (
      <Link
        href="/"
        className="inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90"
      >
        {image}
      </Link>
    );
  }

  const { width, height, className } = sizes.footer;

  const image = (
    <Image
      src="/logos/logo-dark.png"
      alt={brand.name}
      width={width}
      height={height}
      className={`${className} object-contain object-left`}
      priority={priority}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90"
    >
      {image}
    </Link>
  );
}
