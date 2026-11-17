import type { Metadata } from "next";
import Image from "next/image";

import crea1 from "@/public/assets/creations/crea1.jpg";
import crea2 from "@/public/assets/creations/crea2.jpg";
import crea3 from "@/public/assets/creations/crea3.jpg";

export const metadata: Metadata = { title: "Créations personnelles" };

export default function Creations() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-12 flex flex-col items-center text-center">
      
      <h1 className="text-3xl font-bold mb-4">Créations personnelles</h1>
      <p className="text-[var(--muted)] max-w-2xl leading-relaxed mb-8">
        Je crée des images par collage numérique et par création <strong>traditionnelle et digitale</strong>, autour de compositions personnelles. Retrouvez-les sur Instagram et YouTube.
      </p>

      <a 
        href="https://instagram.com/philes_art" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-2 px-5 py-2.5 mb-12 border border-[var(--border)] rounded-full bg-[var(--card)] hover:-translate-y-1 hover:shadow-lg transition-all font-semibold text-sm"
      >
        <Image src="/assets/icon-instagram.svg" alt="Instagram" width={18} height={18} />
        Compte Instagram
      </a>

      {/* Galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-12">
                <div className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
          <Image src={crea1} alt="Collage 01" fill placeholder="blur" sizes="(min-width: 768px) 300px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
          <Image src={crea2} alt="Collage 02" fill placeholder="blur" sizes="(min-width: 768px) 300px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
          <Image src={crea3} alt="Collage 03" fill placeholder="blur" sizes="(min-width: 768px) 300px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>

      <a 
        href="https://www.youtube.com/@PhilesArt" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-full bg-[var(--card)] hover:-translate-y-1 hover:shadow-lg transition-all font-semibold text-sm"
      >
        <Image src="/assets/icon-youtube.svg" alt="YouTube" width={18} height={18} />
        Chaîne YouTube
      </a>
    </div>
  );
}