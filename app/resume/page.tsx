import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Download } from "lucide-react";
import { PROFILE } from "@/lib/content";
import { Badge, buttonPrimary, buttonSecondary } from "@/components/ui";
import { PdfIcon } from "@/components/icons";
// Imports statiques : dimensions réelles connues au build (aucun recadrage)
// et flou de chargement généré automatiquement.
import resumeThumb from "@/public/assets/resumethumb.jpg";
import posterEssiThumb from "@/public/assets/poster_ESSI2025thumb.jpg";
import posterSocietyThumb from "@/public/assets/poster_societythumb.jpg";

export const metadata: Metadata = {
  title: "CV & Posters",
  description: "CV de Théophile Sauffisseau et supports de présentation de ses projets.",
};

type Doc = {
  title: string;
  meta: string;
  tags: string[];
  href: string;
  thumb: StaticImageData;
};

const DOCS: Doc[] = [
  {
    title: "Poster : détection d'Alzheimer par CNN",
    meta: "2025 · 1er prix · Colloque ESSI · PDF",
    tags: ["Deep Learning", "PyTorch"],
    href: "/assets/poster_ESSI2025.pdf",
    thumb: posterEssiThumb,
  },
  {
    title: "Society : présentation produit & technique",
    meta: "2026 · Pitch deck · PDF",
    tags: ["Architecture", "Produit"],
    href: "/assets/poster_society.pdf",
    thumb: posterSocietyThumb,
  },
];

/** Miniature à largeur fixe : la hauteur suit le ratio réel du document (portrait ou paysage). */
function Thumb({ src, width }: { src: StaticImageData; width: number }) {
  return (
    <div className="shrink-0 hidden sm:flex items-start" style={{ width }}>
      <Image
        src={src}
        alt=""
        placeholder="blur"
        sizes={`${width}px`}
        className="w-full h-auto rounded-lg border border-[var(--border)] shadow-sm"
      />
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[760px] py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">CV & Posters</h1>
      <p className="text-[var(--muted)] mb-10 leading-relaxed">
        Mon CV et les supports de présentation de mes principaux projets.
      </p>

      {/* CV */}
      <div className="flex gap-5 sm:gap-6 p-5 sm:p-6 border border-[var(--border)] rounded-2xl bg-[var(--card)] mb-10">
        <Thumb src={resumeThumb} width={110} />
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="font-bold text-xl leading-snug">CV · {PROFILE.name}</h2>
          <p className="text-[var(--muted)] text-sm">{PROFILE.title} · Disponible janvier 2027</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge>Conseil Data</Badge>
            <Badge>BI & Modélisation</Badge>
            <Badge>Produit</Badge>
          </div>
          <div className="flex flex-wrap gap-3 mt-auto">
            <a href={PROFILE.cvPath} download={PROFILE.cvDownloadName} className={buttonPrimary}>
              <Download className="h-4 w-4" aria-hidden="true" /> Télécharger
            </a>
            <a href={PROFILE.cvPath} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              <PdfIcon /> Ouvrir le PDF
            </a>
          </div>
        </div>
      </div>

      {/* Posters */}
      <h2 className="text-xl font-bold mb-4">Posters & présentations</h2>
      <div className="flex flex-col gap-4">
        {DOCS.map((doc) => {
          const landscape = doc.thumb.width > doc.thumb.height;
          return (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 sm:gap-6 p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
            >
              <Thumb src={doc.thumb} width={landscape ? 170 : 96} />
              <div className="flex flex-col gap-1.5 py-1 flex-1">
                <h3 className="font-bold text-lg leading-snug group-hover:text-[var(--primary)] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2">{doc.meta}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {doc.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold mt-auto">
                  <PdfIcon /> Ouvrir le PDF →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
