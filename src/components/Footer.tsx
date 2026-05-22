"use client";

import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src="/logo.png"
                alt="Bodd Active"
                width={120}
                height={40}
                className="h-8 w-auto opacity-90"
              />
              <p className="mt-3 max-w-xs text-center text-xs text-neutral-500 sm:text-left">
                Build Optimal Daily Discipline — premium luxury activewear,
                crafted for the UAE.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <a href="#philosophy" className="hover:text-white transition-colors">
                Philosophy
              </a>
              <a href="#collections" className="hover:text-white transition-colors">
                Collections
              </a>
              <a href="#performance" className="hover:text-white transition-colors">
                Performance
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-neutral-600">
              © {year} Bodd Active UAE. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600">
              Fitness × Fashion × Discipline
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
