"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Artwork = { src: StaticImageData; alt: string };

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

      {current && open !== null && (
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
          <div className="relative h-[85vh] w-[92vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              key={open}
              src={current.src}
              alt={current.alt}
              fill
              placeholder="blur"
              sizes="92vw"
              className="object-contain page-in"
            />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Œuvre précédente"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Œuvre suivante"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
                {open + 1} / {items.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
