"use client";

import { SectionReveal } from "./SectionReveal";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative border-t border-neutral-200/80 bg-white py-16 sm:py-24 md:py-32"
    >
      <div className="glow-orb absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-200/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0097b2]">
              UAE Launch
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Join the movement
            </h2>
            <p className="mt-4 text-neutral-600">
              Be the first to know when Bodd Active UAE drops new collections,
              exclusive sets, and limited releases.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 rounded-full border border-neutral-300 bg-[#f7f6f3] px-6 py-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-[#0097b2]/60 focus:ring-2 focus:ring-[#0097b2]/20"
            />
            <motion.button
              type="submit"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="rounded-full holo-gradient px-8 py-4 text-sm font-semibold text-white shadow-md"
            >
              Notify Me
            </motion.button>
          </motion.form>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center text-sm text-neutral-500 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
            <a
              href="mailto:support@boddactive.ae"
              className="transition-colors hover:text-neutral-900"
            >
              support@boddactive.ae
            </a>
            <span className="hidden text-neutral-300 sm:inline">|</span>
            <span>United Arab Emirates</span>
            <span className="hidden text-neutral-300 sm:inline">|</span>
            <span className="uppercase tracking-widest">Luxury Activewear</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
