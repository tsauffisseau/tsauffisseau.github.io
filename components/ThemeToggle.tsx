"use client";

import * as React from "react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[var(--foreground)] transition-all hover:border-[var(--border)] hover:bg-[var(--muted)]/10"
      aria-label="Toggle theme"
    >
      <Sun className="h-[18px] w-[18px] transition-transform duration-300 hover:rotate-90" />
    </button>
  );
}