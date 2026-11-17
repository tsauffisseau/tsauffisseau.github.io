"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Projets", href: "/projects" },
    { name: "CV & Posters", href: "/resume" },
    { name: "À propos", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[980px] min-h-16 relative">
        
        {/* Ligne 1 (Mobile) : Liens de navigation tout en haut */}
        <nav className="flex items-center justify-center gap-1 sm:gap-3 overflow-x-auto no-scrollbar w-full sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:w-auto order-1 sm:order-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-2 py-1.5 text-sm sm:text-base font-semibold whitespace-nowrap transition-colors ${
                  isActive ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Ligne 2 (Mobile) : Home et Soleil en dessous, centrés avec décalage gauche */}
        <div className="flex w-full justify-center gap-12 items-center sm:w-auto sm:justify-start order-2 sm:order-1 mt-1 sm:mt-0">
          <Link href="/" className="flex shrink-0 items-center transition-transform hover:scale-105">
            <Image 
              src="/assets/favicon.png" 
              alt="Accueil"
              width={24} 
              height={24} 
              priority
              className="invert dark:invert-0" /* Devient noir en light mode, redevient blanc en dark mode */
            />
          </Link>
          {/* Version mobile du toggle du thème */}
          <div className="flex shrink-0 items-center sm:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Bouton Thème Desktop (Caché sur mobile) */}
        <div className="hidden sm:flex shrink-0 items-center order-3">
          <ThemeToggle />
        </div>
        
      </div>
    </header>
  );
}