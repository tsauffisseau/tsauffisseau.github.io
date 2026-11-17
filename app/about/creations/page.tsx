import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { textLink } from "@/components/ui";

import crea1 from "@/public/assets/creations/crea1.jpg";
import crea2 from "@/public/assets/creations/crea2.jpg";
import crea3 from "@/public/assets/creations/crea3.jpg";

export const metadata: Metadata = { title: "Créations personnelles" };

const CREATIONS = [
  { src: crea1, alt: "Collage 01" },
  { src: crea2, alt: "Collage 02" },
  { src: crea3, alt: "Collage 03" },
];

export default function Creations() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-10 sm:py-14">
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> À propos
      </Link>

      <h1 className="text-4xl sm:text-5xl mb-4">Créations personnelles</h1>
      <p className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed mb-10">
        Je crée des images par collage numérique, et par création traditionnelle et digitale. Je les publie sur{" "}
        <a href="https://instagram.com/philes_art" target="_blank" rel="noopener noreferrer" className={`text-[var(--foreground)] ${textLink}`}>
          Instagram
        </a>{" "}
        et sur{" "}
        <a href="https://www.youtube.com/@PhilesArt" target="_blank" rel="noopener noreferrer" className={`text-[var(--foreground)] ${textLink}`}>
          YouTube
        </a>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CREATIONS.map((c) => (
          <div key={c.alt} className="relative aspect-square w-full overflow-hidden rounded-md bg-[var(--card)]">
            <Image
              src={c.src}
              alt={c.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 300px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
