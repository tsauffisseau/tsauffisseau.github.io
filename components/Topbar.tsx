"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Posters & Resume", href: "/resume" },
    { name: "About me", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[980px] min-h-16 relative">
        
        {/* Navigation : En haut sur mobile, centrée en absolu sur Desktop */}
        <nav className="flex items-center justify-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar w-full sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:w-auto">
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

        {/* Ligne 2 (Mobile) : Logo centré à gauche, Soleil centré à droite */}
        <div className="flex w-full justify-center gap-12 sm:w-auto sm:justify-start">
          <Link href="/" className="flex shrink-0 items-center transition-transform hover:scale-105">
            <Image 
              src="/assets/favicon.png" 
              alt="Home" 
              width={24} 
              height={24} 
              className="invert dark:invert-0"
            />
          </Link>
          {/* Soleil affiché uniquement sur mobile ici */}
          <div className="flex shrink-0 items-center sm:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Bouton Thème Desktop (Caché sur mobile) */}
        <div className="hidden sm:flex shrink-0 items-center">
          <ThemeToggle />
        </div>
        
      </div>
    </header>
  );
}