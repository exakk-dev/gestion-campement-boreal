import Image from "next/image";
import Link from "next/link";
import { brand } from "../lib/brand";

const { mark, text } = brand.logos;

const headerTextSizes = {
  expanded:
    "h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[13rem] md:h-11 md:max-w-[15rem]",
  compact: "h-7 w-auto max-w-[8.5rem] sm:h-8 sm:max-w-[10rem]",
} as const;

type BrandLogoProps = {
  variant?: "header" | "footer";
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
  const isHeader = variant === "header";
  const asset = isHeader ? text : mark;

  const image = (
    <Image
      src={asset.src}
      alt={brand.name}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={
        isHeader
          ? `object-contain object-left transition-[height,max-width] duration-500 ease-out ${
              compact ? headerTextSizes.compact : headerTextSizes.expanded
            }`
          : "h-28 w-auto max-w-[10rem] object-contain object-left sm:h-32 sm:max-w-[11rem] md:h-36 md:max-w-[12rem]"
      }
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
