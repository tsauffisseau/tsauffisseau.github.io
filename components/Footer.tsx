import { PROFILE } from "@/lib/content";

const textLink = "transition-colors hover:text-[var(--pink)]";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] py-8">
      <div className="container mx-auto max-w-[980px] px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-[var(--muted)]">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`mailto:${PROFILE.email}`} className={textLink}>
            {PROFILE.email}
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={textLink}>
            LinkedIn
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={textLink}>
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
