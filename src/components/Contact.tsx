"use client";

import { SectionReveal } from "./SectionReveal";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 py-24 sm:py-32"
    >
      <div className="glow-orb absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00e5ff]/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00e5ff]">
              UAE Launch
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Join the movement
            </h2>
            <p className="mt-4 text-neutral-400">
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
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30"
            />
            <motion.button
              type="submit"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="rounded-full holo-gradient px-8 py-4 text-sm font-semibold text-black"
            >
              Notify Me
            </motion.button>
          </motion.form>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center text-sm text-neutral-500">
            <a
              href="mailto:support@boddactive.ae"
              className="transition-colors hover:text-white"
            >
              support@boddactive.ae
            </a>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span>United Arab Emirates</span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span className="uppercase tracking-widest">Luxury Activewear</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
