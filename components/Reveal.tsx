"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".u-line:not(.is-visible), .marker:not(.is-visible)";

/** Révèle les soulignés et surlignés quand ils entrent à l'écran (voir .u-line et .marker dans globals.css). */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(SELECTOR);
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
