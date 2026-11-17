"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Projets", href: "/projects" },
  { name: "CV", href: "/resume" },
  { name: "À propos", href: "/about" },
];

/** Marge intérieure des liens : le trait rose ne couvre que le texte. */
const INSET = 8;

export function Topbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const shown = useRef(false);

  // Le trait rose glisse vers l'onglet actif à chaque changement de page.
  useLayoutEffect(() => {
    const place = (animate: boolean) => {
      const bar = barRef.current;
      const active = navRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
      if (!bar) return;
      if (!active) {
        // Pas d'onglet actif (accueil) : le trait se rétracte vers son centre.
        const left = parseFloat(bar.style.left || "0") + parseFloat(bar.style.width || "0") / 2;
        bar.style.left = `${left}px`;
        bar.style.width = "0px";
        shown.current = false;
        return;
      }
      const left = active.offsetLeft + INSET;
      const width = active.offsetWidth - 2 * INSET;
      if (shown.current && !animate) {
        // Redimensionnement ou chargement de la police : on recale sans animer,
        // seulement si la cible a changé (pour ne pas couper l'animation en cours).
        if (bar.style.left === `${left}px` && bar.style.width === `${width}px`) return;
        bar.style.transition = "none";
        bar.style.left = `${left}px`;
        bar.style.width = `${width}px`;
        void bar.offsetWidth;
        bar.style.transition = "";
        return;
      }
      if (!shown.current) {
        // Première apparition : le trait se dessine de gauche à droite.
        bar.style.transition = "none";
        bar.style.left = `${left}px`;
        bar.style.width = "0px";
        void bar.offsetWidth;
        bar.style.transition = "";
        shown.current = true;
      }
      bar.style.left = `${left}px`;
      bar.style.width = `${width}px`;
    };
    place(true);
    // La largeur des liens change quand la police web finit de charger.
    document.fonts?.ready.then(() => place(false));
    const onResize = () => place(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="container mx-auto max-w-[980px] px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link href="/" aria-label="Accueil" className="flex shrink-0 items-center">
          <Image
            src="/assets/favicon.png"
            alt=""
            width={22}
            height={22}
            priority
            className="invert dark:invert-0"
          />
        </Link>

        <nav ref={navRef} className="relative flex items-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar pb-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-2 py-1.5 text-sm whitespace-nowrap transition-colors ${
                  isActive ? "text-[var(--foreground)] font-medium" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <span
            ref={barRef}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1 h-[2px] w-0 rounded-full bg-[var(--pink)] transition-[left,width] duration-500 ease-[cubic-bezier(0.22,0.7,0.2,1)]"
          />
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
