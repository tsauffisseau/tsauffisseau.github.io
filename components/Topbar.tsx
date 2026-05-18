"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Posters", href: "/posters" },
    { name: "Resume", href: "/resume" },
    { name: "About me", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 relative flex h-16 max-w-[980px] items-center justify-center">
        
        {/* Navigation */}
        <nav className="flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
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

        {/* Bouton Thème positionné à droite */}
        <div className="absolute right-4 sm:right-0">
          <ThemeToggle />
        </div>
        
      </div>
    </header>
  );
}