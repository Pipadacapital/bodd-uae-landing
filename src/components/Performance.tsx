"use client";

import { SectionReveal } from "./SectionReveal";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Squat-proof", value: "Premium thickness" },
  { label: "Moisture-wicking", value: "Stay dry" },
  { label: "Compression", value: "Waist-sculpting" },
  { label: "Stretch memory", value: "Shape retention" },
  { label: "Transition", value: "Gym to street" },
  { label: "Origin", value: "UAE luxury" },
];

export function Performance() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-40, 40]
  );

  return (
    <section
      id="performance"
      ref={ref}
      className="relative border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5cf6]">
            Performance
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for intensity
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            High-performance fabrics that hold up through every rep, stretch,
            and stride — then carry you through the rest of your day in style.
          </p>
        </SectionReveal>

        <div className="mt-14 overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4 sm:gap-6">
            {[...specs, ...specs].map((spec, i) => (
              <div
                key={`${spec.label}-${i}`}
                className="flex shrink-0 flex-col rounded-xl border border-white/8 bg-[#111] px-6 py-5 sm:px-8 sm:py-6"
              >
                <span className="font-display text-lg font-bold whitespace-nowrap sm:text-xl">
                  {spec.label}
                </span>
                <span className="mt-1 text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                  {spec.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <SectionReveal delay={0.15}>
          <div className="mt-16 rounded-2xl border border-white/8 bg-gradient-to-r from-[#111] via-[#0a0a0a] to-[#111] p-8 sm:p-12">
            <blockquote className="font-display text-xl font-medium leading-snug sm:text-2xl md:text-3xl">
              &ldquo;From high-intensity workouts to casual everyday —
              <span className="holo-text"> one wardrobe, infinite discipline.</span>&rdquo;
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
