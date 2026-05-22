import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandShowcase } from "@/components/BrandShowcase";
import { Philosophy } from "@/components/Philosophy";
import { Collections } from "@/components/Collections";
import { Performance } from "@/components/Performance";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-page text-neutral-900">
      <Navbar />
      <Hero />
      <BrandShowcase />
      <Philosophy />
      <Collections />
      <Performance />
      <Contact />
      <Footer />
    </main>
  );
}
