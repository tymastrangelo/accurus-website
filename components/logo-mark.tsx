/**
 * The Accurus "A" mark, vectorized from Doug's logo so it stays crisp at any
 * size and sits cleanly on the warm paper background (no white JPG box).
 * A blue letter-A with an open base, a gold inner triangle, and the signature
 * ember→gold swoosh sweeping up across it.
 *
 * `uid` keeps the gradient id unique when several marks render on one page.
 */
export function LogoMark({
  size = 40,
  uid = "mark",
  className,
}: {
  size?: number;
  uid?: string;
  className?: string;
}) {
  const gradId = `accurus-swoosh-${uid}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="10" y1="104" x2="116" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E0531F" />
          <stop offset="0.55" stopColor="#ED7A14" />
          <stop offset="1" stopColor="#F2A01E" />
        </linearGradient>
      </defs>

      {/* blue A (open base) */}
      <path d="M60 8 L114 112 L86 112 L60 52 L34 112 L6 112 Z" fill="#4A7BC4" />
      {/* gold inner triangle */}
      <path d="M60 72 L72 110 L48 110 Z" fill="#F2A01E" />
      {/* ember→gold swoosh sweeping over the A */}
      <path d="M6 98 C 40 78, 84 54, 116 42 C 98 58, 56 78, 16 106 Z" fill={`url(#${gradId})`} />
    </svg>
  );
}
