"use client";

import { SectionReveal } from "./SectionReveal";
import { motion, useReducedMotion } from "framer-motion";

const collections = [
  {
    id: "sets",
    title: "Coordinated Sets",
    tag: "Matching Sets",
    description:
      "Form-fitting matching sets with bold holographic patterns, glossy paneling, and metallic prints.",
    accent: "from-cyan-50 to-violet-50",
    border: "hover:border-cyan-300/60",
  },
  {
    id: "bodysuits",
    title: "Performance Bodysuits",
    tag: "Full Coverage",
    description:
      "Premium one-pieces with mesh cut-outs, gloss texturing, and specialized Pilates & yoga styles.",
    accent: "from-fuchsia-50 to-violet-50",
    border: "hover:border-fuchsia-300/60",
  },
  {
    id: "leggings",
    title: "Sculpting Leggings & Shorts",
    tag: "Compression",
    description:
      "High-waisted compression with concealed waistband pockets and robust stretch memory.",
    accent: "from-violet-50 to-cyan-50",
    border: "hover:border-violet-300/60",
  },
  {
    id: "tops",
    title: "Layering Tops & Mesh Tees",
    tag: "Layering",
    description:
      "Breathable sheer shirts and tie-up athletic tees designed to layer over sports bras.",
    accent: "from-neutral-50 to-cyan-50",
    border: "hover:border-neutral-300",
  },
];

export function Collections() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="collections"
      className="relative overflow-hidden border-t border-neutral-200/80 bg-white py-16 sm:py-24 md:py-32"
    >
      <div className="glow-orb holo-gradient absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4007a]">
            Product Lines
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Engineered for every movement
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {collections.map((item, i) => (
            <SectionReveal key={item.id} delay={i * 0.08}>
              <motion.article
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { scale: 1.01, transition: { duration: 0.3 } }
                }
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br ${item.accent} p-6 shadow-sm sm:min-h-[260px] sm:p-8 ${item.border} transition-all duration-300 hover:shadow-md`}
              >
                <div>
                  <span className="inline-block rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-600">
                    {item.tag}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-bold text-neutral-900 sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
                <div className="mt-6 h-px w-full shimmer-line opacity-50" />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
