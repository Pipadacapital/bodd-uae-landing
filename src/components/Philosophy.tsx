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
      className="relative border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00e5ff]">
                Core Philosophy
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Discipline, redefined
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
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
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#111] p-8 transition-colors hover:border-white/15"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="holo-gradient absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-10 blur-2xl" />
                </div>
                <span className="font-display text-5xl font-bold text-white/10">
                  0{i + 1}
                </span>
                <h3 className="font-display relative mt-4 text-xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-400">
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
