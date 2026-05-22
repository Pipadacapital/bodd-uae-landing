import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bodd Active UAE | Luxury Activewear",
  description:
    "Premium UAE-based luxury activewear. Build Optimal Daily Discipline — high-performance gym gear fused with runway-inspired fashion.",
  keywords: [
    "Bodd Active",
    "UAE activewear",
    "luxury gym wear",
    "matching sets",
    "compression leggings",
  ],
  openGraph: {
    title: "Bodd Active UAE",
    description: "Fitness meets high fashion. Premium luxury activewear.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} bg-page text-neutral-900`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-screen bg-page font-sans antialiased text-neutral-900">
        {children}
      </body>
    </html>
  );
}
