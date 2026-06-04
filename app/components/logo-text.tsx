import Image from "next/image";
import Link from "next/link";
import { brand } from "../lib/brand";

type LogoTextProps = {
  className?: string;
  linked?: boolean;
  priority?: boolean;
};

export function LogoText({
  className = "h-auto w-[min(88vw,28rem)] sm:w-[min(75vw,32rem)] md:w-[min(55vw,36rem)] lg:w-[40rem]",
  linked = false,
  priority = false,
}: LogoTextProps) {
  const { src, width, height } = brand.logos.text;

  const image = (
    <Image
      src={src}
      alt={brand.name}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      className="inline-block transition-opacity duration-300 hover:opacity-90"
    >
      {image}
    </Link>
  );
}
