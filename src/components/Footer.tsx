"use client";

import { SectionReveal } from "./SectionReveal";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <BrandLogo size="sm" />
              <p className="mt-3 max-w-xs text-center text-xs text-neutral-600 sm:text-left">
                Build Optimal Daily Discipline — premium luxury activewear,
                crafted for the UAE.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
              <a href="#philosophy" className="transition-colors hover:text-neutral-900">
                Philosophy
              </a>
              <a href="#collections" className="transition-colors hover:text-neutral-900">
                Collections
              </a>
              <a href="#performance" className="transition-colors hover:text-neutral-900">
                Performance
              </a>
              <a href="#contact" className="transition-colors hover:text-neutral-900">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
            <p className="text-xs text-neutral-500">
              © {year} Bodd Active UAE. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500">
              Fitness × Fashion × Discipline
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
