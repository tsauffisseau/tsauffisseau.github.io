import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Gallery } from "@/components/Gallery";

import crea1 from "@/public/assets/creations/crea1.jpg";
import crea2 from "@/public/assets/creations/crea2.jpg";
import crea3 from "@/public/assets/creations/crea3.jpg";

export const metadata: Metadata = { title: "Créations personnelles" };

const ARTWORKS = [
  { src: crea1, alt: "Collage 01" },
  { src: crea2, alt: "Collage 02" },
  { src: crea3, alt: "Collage 03" },
];

const pillLink =
  "inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-full bg-[var(--card)] hover:-translate-y-1 hover:shadow-lg transition-all font-semibold text-sm";

export default function Creations() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-10 sm:py-12">
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> À propos
      </Link>

      <div className="flex flex-col items-center text-center mt-6">
        <h1 className="text-3xl font-bold mb-4">Créations personnelles</h1>
        <p className="text-[var(--muted)] max-w-2xl leading-relaxed mb-8">
          Je crée des images par collage numérique et par création <strong>traditionnelle et digitale</strong>,
          autour de compositions personnelles. Retrouvez-les sur Instagram et YouTube.
        </p>

        <a href="https://instagram.com/philes_art" target="_blank" rel="noopener noreferrer" className={`${pillLink} mb-12`}>
          <Image src="/assets/icon-instagram.svg" alt="" width={18} height={18} />
          Compte Instagram
        </a>

        <Gallery items={ARTWORKS} />

        <a href="https://www.youtube.com/@PhilesArt" target="_blank" rel="noopener noreferrer" className={pillLink}>
          <Image src="/assets/icon-youtube.svg" alt="" width={18} height={18} />
          Chaîne YouTube
        </a>
      </div>
    </div>
  );
}
