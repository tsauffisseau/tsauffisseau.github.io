import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Download } from "lucide-react";
import { PROFILE } from "@/lib/content";
import { Title, buttonPrimary, buttonSecondary } from "@/components/ui";
import { PdfIcon } from "@/components/icons";
// Imports statiques : dimensions réelles connues au build et flou de chargement automatique.
import resumeThumb from "@/public/assets/resumethumb.jpg";
import posterEssiThumb from "@/public/assets/poster_ESSI2025thumb.jpg";
import posterSocietyThumb from "@/public/assets/poster_societythumb.jpg";

export const metadata: Metadata = {
  title: "CV et posters",
  description: "CV de Théophile Sauffisseau et supports de présentation de ses projets.",
};

type Doc = {
  /** Titre, avec {groupes de mots} insécables (voir Title). */
  title: string;
  meta: string;
  href: string;
  thumb: StaticImageData;
};

const DOCS: Doc[] = [
  {
    title: "Poster : {Détection d'Alzheimer} par CNN",
    meta: "1er prix au Colloque ESSI 2025",
    href: "/assets/poster_ESSI2025.pdf",
    thumb: posterEssiThumb,
  },
  {
    title: "Society : {Présentation produit} et technique",
    meta: "Pitch deck, 2026",
    href: "/assets/poster_society.pdf",
    thumb: posterSocietyThumb,
  },
];

/**
 * Miniature à largeur fixe (plus étroite sur mobile) : la hauteur suit le ratio
 * réel du document, portrait ou paysage.
 */
function Thumb({ src, width, mobileWidth }: { src: StaticImageData; width: number; mobileWidth: number }) {
  return (
    <div
      className="shrink-0 w-[var(--w-mobile)] sm:w-[var(--w)]"
      style={{ "--w": `${width}px`, "--w-mobile": `${mobileWidth}px` } as React.CSSProperties}
    >
      <Image
        src={src}
        alt=""
        placeholder="blur"
        sizes={`${width}px`}
        className="w-full h-auto rounded-md border border-[var(--border)]"
      />
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-12 sm:py-16">
      <div className="max-w-[760px]">
        <h1 className="text-4xl sm:text-5xl mb-4">CV et posters</h1>
        <p className="text-lg text-[var(--muted)] mb-12 leading-relaxed">
          Mon CV et les supports de présentation de mes principaux projets.
        </p>

        <div className="flex gap-4 sm:gap-6 pb-10 mb-10 border-b border-[var(--border)]">
          <Thumb src={resumeThumb} width={110} mobileWidth={84} />
          <div className="flex flex-col gap-2 min-w-0">
            <h2 className="text-2xl">CV</h2>
            <p className="text-[var(--muted)]">
              {PROFILE.title}. {PROFILE.availability}.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <a href={PROFILE.cvPath} download={PROFILE.cvDownloadName} className={buttonPrimary}>
                <Download className="h-4 w-4" aria-hidden="true" /> Télécharger
              </a>
              <a href={PROFILE.cvPath} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
                <PdfIcon /> Ouvrir le PDF
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-2xl mb-2">Posters et présentations</h2>
        <ul>
          {DOCS.map((doc) => {
            const landscape = doc.thumb.width > doc.thumb.height;
            return (
              <li key={doc.href} className="border-b border-[var(--border)] last:border-b-0">
                <a href={doc.href} target="_blank" rel="noopener noreferrer" className="group flex gap-4 sm:gap-6 py-6">
                  <Thumb
                    src={doc.thumb}
                    width={landscape ? 170 : 96}
                    mobileWidth={landscape ? 128 : 72}
                  />
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="text-base sm:text-lg leading-snug group-hover:text-[var(--primary)] transition-colors">
                      <Title text={doc.title} />
                    </h3>
                    <p className="text-sm text-[var(--muted)]">{doc.meta}</p>
                    <span className="inline-flex items-center gap-2 text-sm mt-3">
                      <PdfIcon /> Ouvrir le PDF
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
