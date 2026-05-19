"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar() {
  const pathname = usePathname();
  
  // Fusion de Posters et Resume
  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Posters & Resume", href: "/resume" }, // On pointera vers /resume pour la page fusionnée
    { name: "About me", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex min-h-16 max-w-[980px] items-center justify-between py-2 sm:py-0 gap-4">
        
        {/* Logo Home (à gauche) */}
        <Link href="/" className="flex shrink-0 items-center transition-transform hover:scale-105">
          <Image 
            src="/assets/favicon.svg" 
            alt="Home" 
            width={24} 
            height={24} 
            className="dark:invert" // S'adapte au mode sombre si ton SVG est noir
          />
        </Link>
        
        {/* Navigation (au centre) */}
        <nav className="flex flex-1 items-center justify-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/resume' && pathname === '/posters');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm sm:text-base font-semibold whitespace-nowrap transition-colors hover:text-[var(--foreground)] ${
                  isActive ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bouton Thème (à droite) */}
        <div className="flex shrink-0 items-center">
          <ThemeToggle />
        </div>
        
      </div>
    </header>
  );
}