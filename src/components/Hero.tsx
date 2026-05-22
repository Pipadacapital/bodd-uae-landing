"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-page pt-20 pb-12 sm:pt-24 sm:pb-16">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="glow-orb holo-gradient absolute -top-20 left-1/4 h-[220px] w-[220px] rounded-full sm:-top-32 sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />
      <div className="glow-orb absolute -bottom-10 right-0 h-[180px] w-[180px] rounded-full bg-[#ff00aa]/20 sm:-bottom-20 sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={prefersReducedMotion ? undefined : stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6 sm:mb-8">
            <BrandLogo size="md" priority className="sm:hidden" />
            <BrandLogo size="lg" priority className="hidden sm:block" />
          </motion.div>

          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 sm:text-sm"
          >
            Premium UAE Activewear
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Fitness meets{" "}
            <span className="holo-text">high fashion</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg md:mt-8"
          >
            Bodd Active fuses runway-inspired design with high-performance
            gym gear — built for the UAE lifestyle, from intense workouts to
            everyday elegance.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:mt-10"
          >
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full holo-gradient px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Collections
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-medium tracking-wide text-neutral-900 shadow-sm transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              Our Philosophy
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:pt-8 md:gap-10"
          >
            <div className="shrink-0">
              <p className="font-display text-xl font-bold text-neutral-900 sm:text-2xl md:text-3xl">
                BODD
              </p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 sm:text-xs">
                Build Optimal Daily Discipline
              </p>
            </div>
            <div className="hidden h-10 w-px shrink-0 bg-neutral-200 md:block" />
            <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
              Vibrant aesthetics. Squat-proof fabrics. Seamless transition from
              studio to street.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-neutral-400 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
