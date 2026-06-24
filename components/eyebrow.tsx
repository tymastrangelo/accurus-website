/** Small uppercase kicker with the gradient tick, used above section headings. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={`eyebrow${className ? ` ${className}` : ""}`}>{children}</span>;
}
