"use client";

import { SectionReveal } from "./SectionReveal";
import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    title: "Durability",
    description:
      "Nylon-elastane blends engineered for squat-proof thickness and lasting compression.",
  },
  {
    title: "Function",
    description:
      "Moisture-wicking technology, waist-sculpting support, and stretch memory that moves with you.",
  },
  {
    title: "Fashion",
    description:
      "Runway-inspired silhouettes with holographic patterns, glossy paneling, and metallic prints.",
  },
];

export function Philosophy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="philosophy"
      className="relative border-t border-neutral-200/80 bg-page py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0097b2]">
                Core Philosophy
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Discipline, redefined
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
              Merging durability and functional design with runway-inspired
              fashion — encouraging a consistent, active lifestyle across the
              UAE.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.1}>
              <motion.article
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.25 } }
                }
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="holo-gradient absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-15 blur-2xl" />
                </div>
                <span className="font-display text-5xl font-bold text-neutral-100">
                  0{i + 1}
                </span>
                <h3 className="font-display relative mt-4 text-xl font-semibold text-neutral-900">
                  {pillar.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                  {pillar.description}
                </p>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
