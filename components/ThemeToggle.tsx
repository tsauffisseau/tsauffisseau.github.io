"use client";

import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
      aria-label="Changer de thème"
    >
      <Sun className="h-[18px] w-[18px]" />
    </button>
  );
}
