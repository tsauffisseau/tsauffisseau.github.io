"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Projets", href: "/projects" },
  { name: "CV", href: "/resume" },
  { name: "À propos", href: "/about" },
];

export function Topbar() {
  const pathname = usePathname();

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

        <nav className="flex items-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar">
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
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
