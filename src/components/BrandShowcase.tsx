"use client";

import { SectionReveal } from "./SectionReveal";
import { BrandLogo } from "./BrandLogo";

export function BrandShowcase() {
  return (
    <section
      id="brand"
      aria-label="Bodd Active brand"
      className="relative border-y border-neutral-200/80 bg-white px-4 py-14 sm:px-0 sm:py-20 md:py-28"
    >
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">
        <SectionReveal>
          <BrandLogo
            size="lg"
            className="mx-auto sm:hidden [&_img]:object-center"
          />
          <BrandLogo
            size="xl"
            className="mx-auto hidden sm:block [&_img]:object-center"
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-base">
            Build Optimal Daily Discipline — premium luxury activewear designed
            in the UAE for those who train with intent and dress with purpose.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
