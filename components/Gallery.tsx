"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Artwork = { src: StaticImageData; alt: string };

const control =
  "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/85 hover:bg-white/20 hover:text-white transition-colors";

/** Largeur d'une vignette carrée sur ordinateur. */
const TILE = 300;

/**
 * Une image recadrée en carré (object-cover) doit être chargée assez large pour
 * remplir la hauteur : un bandeau 3:1 demande trois fois la largeur de la vignette.
 */
function tileSizes({ width, height }: StaticImageData) {
  const f = Math.max(1, width / height);
  return `(min-width: 768px) ${Math.round(TILE * f)}px, (min-width: 640px) ${Math.round(50 * f)}vw, ${Math.round(100 * f)}vw`;
}

/** Galerie en vignettes carrées ; un clic ouvre l'œuvre entière, avec navigation. */
export function Gallery({ items }: { items: Artwork[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-12">
        {items.map((item, i) => (
          <button
            key={item.alt}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Agrandir ${item.alt}`}
            className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)] cursor-zoom-in"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              placeholder="blur"
              sizes={tileSizes(item.src)}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Rendu dans <body> : l'animation de page (transform) piégerait sinon le fond sous le menu. */}
      {current &&
        open !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            {/* L'image garde ses proportions et tient dans l'écran, avec une marge pour les commandes. */}
            <Image
              key={open}
              src={current.src}
              alt={current.alt}
              placeholder="blur"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
              className="page-in h-auto w-auto max-h-[calc(100dvh-9rem)] max-w-[calc(100vw-2rem)] sm:max-h-[calc(100dvh-8rem)] sm:max-w-[calc(100vw-9rem)] rounded-md object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className={`${control} absolute top-3 right-3 sm:top-5 sm:right-5`}
            >
              <X className="h-6 w-6" />
            </button>

            {items.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-4 sm:static">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Œuvre précédente"
                  className={`${control} sm:absolute sm:left-5 sm:top-1/2 sm:-translate-y-1/2`}
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <p className="text-sm tabular-nums text-white/70 sm:absolute sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2">
                  {open + 1} / {items.length}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Œuvre suivante"
                  className={`${control} sm:absolute sm:right-5 sm:top-1/2 sm:-translate-y-1/2`}
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
