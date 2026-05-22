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
    accent: "from-[#00e5ff]/20 to-[#8b5cf6]/20",
    border: "hover:border-[#00e5ff]/30",
  },
  {
    id: "bodysuits",
    title: "Performance Bodysuits",
    tag: "Full Coverage",
    description:
      "Premium one-pieces with mesh cut-outs, gloss texturing, and specialized Pilates & yoga styles.",
    accent: "from-[#ff00aa]/20 to-[#8b5cf6]/20",
    border: "hover:border-[#ff00aa]/30",
  },
  {
    id: "leggings",
    title: "Sculpting Leggings & Shorts",
    tag: "Compression",
    description:
      "High-waisted compression with concealed waistband pockets and robust stretch memory.",
    accent: "from-[#8b5cf6]/20 to-[#00e5ff]/20",
    border: "hover:border-[#8b5cf6]/30",
  },
  {
    id: "tops",
    title: "Layering Tops & Mesh Tees",
    tag: "Layering",
    description:
      "Breathable sheer shirts and tie-up athletic tees designed to layer over sports bras.",
    accent: "from-white/10 to-[#00e5ff]/15",
    border: "hover:border-white/25",
  },
];

export function Collections() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="collections"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div className="glow-orb holo-gradient absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff00aa]">
            Product Lines
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
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
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${item.accent} p-6 sm:min-h-[260px] sm:p-8 ${item.border} transition-all duration-300`}
              >
                <div>
                  <span className="inline-block rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                    {item.tag}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
                <div className="mt-6 h-px w-full shimmer-line opacity-30" />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
