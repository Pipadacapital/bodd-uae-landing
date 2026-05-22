"use client";

import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
};

const dimensions = {
  sm: "h-8 w-[4.5rem]",
  md: "h-10 w-[5.5rem] sm:h-11 sm:w-[6.25rem]",
  lg: "h-14 w-[7.75rem] sm:h-16 sm:w-[9rem]",
  xl: "h-20 w-[11rem] sm:h-24 sm:w-[13.25rem] md:h-28 md:w-[15.5rem]",
};

export function BrandLogo({
  className = "",
  size = "md",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Bodd Active UAE"
      width={1800}
      height={900}
      priority={priority}
      className={`object-contain object-left ${dimensions[size]} ${className}`}
    />
  );
}
