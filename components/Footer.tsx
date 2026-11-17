import { PROFILE } from "@/lib/content";

export function Footer() {
  const links = [
    { label: "E-mail", href: `mailto:${PROFILE.email}` },
    { label: "LinkedIn", href: PROFILE.linkedin },
    { label: "GitHub", href: PROFILE.github },
  ];
  return (
    <footer className="mt-auto border-t border-[var(--border)] py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-[980px]">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <nav className="flex gap-5 text-sm text-[var(--muted)]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
