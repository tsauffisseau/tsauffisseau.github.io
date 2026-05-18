export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] py-6">
      <div className="container mx-auto px-4 flex justify-center max-w-[980px]">
        <p className="text-sm text-[var(--muted)] text-center">
          © {new Date().getFullYear()} Théophile Sauffisseau
        </p>
      </div>
    </footer>
  );
}