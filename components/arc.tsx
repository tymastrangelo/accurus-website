/**
 * The signature swoosh - the one bold motif, drawn from the logo's
 * ember→gold gradient. Used in exactly five approved places via `variant`:
 *   underline  → beneath the hero keyword "Decisions"
 *   portrait   → behind the hero portrait
 *   quote      → inside the navy quote card
 *   final      → behind the dark final CTA band
 * (The nav/link hover underline is the fifth, handled in CSS.)
 *
 * Decorative only: always aria-hidden. `uid` keeps gradient ids unique.
 */
type ArcVariant = "underline" | "portrait" | "quote" | "final";

export function Arc({
  variant,
  uid,
  className,
}: {
  variant: ArcVariant;
  uid: string;
  className?: string;
}) {
  const gradId = `arc-${uid}`;

  if (variant === "underline") {
    return (
      <span className={`arc-u arc-draw${className ? ` ${className}` : ""}`} aria-hidden="true">
        <svg viewBox="0 0 320 40" preserveAspectRatio="none" width="100%" height="100%">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#E0531F" />
              <stop offset="0.55" stopColor="#ED7A14" />
              <stop offset="1" stopColor="#F2A01E" />
            </linearGradient>
          </defs>
          <path
            d="M6 30 C 90 12, 230 8, 314 20"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (variant === "portrait") {
    return (
      <svg
        className={`bigarc${className ? ` ${className}` : ""}`}
        viewBox="0 0 600 300"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#E0531F" />
            <stop offset="0.6" stopColor="#ED7A14" />
            <stop offset="1" stopColor="#F2A01E" />
          </linearGradient>
        </defs>
        <path
          d="M20 250 C 200 120, 420 90, 580 150"
          stroke={`url(#${gradId})`}
          strokeWidth="26"
          strokeLinecap="round"
          opacity="0.22"
        />
      </svg>
    );
  }

  if (variant === "quote") {
    return (
      <svg className={`qarc${className ? ` ${className}` : ""}`} viewBox="0 0 300 200" fill="none" aria-hidden="true">
        <path
          d="M20 170 C 120 80, 230 70, 290 110"
          stroke="#ED7A14"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // final
  return (
    <svg className={`farc${className ? ` ${className}` : ""}`} viewBox="0 0 500 300" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#E0531F" />
          <stop offset="1" stopColor="#F2A01E" />
        </linearGradient>
      </defs>
      <path
        d="M0 260 C 160 130, 360 110, 520 170"
        stroke={`url(#${gradId})`}
        strokeWidth="30"
        strokeLinecap="round"
      />
    </svg>
  );
}
