/** Remonté à chaque changement de page : rejoue l'animation d'entrée. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
