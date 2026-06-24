/**
 * The Accurus "A" mark as a raw SVG string - shared by the favicon (icon.svg)
 * and the generated apple-icon / OG image (embedded as a data URI for satori).
 * Kept identical to <LogoMark> so every surface shows the same mark.
 */
export function markSvg(px = 120): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 120 120" fill="none">
<defs><linearGradient id="s" x1="10" y1="104" x2="116" y2="42" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#E0531F"/><stop offset="0.55" stop-color="#ED7A14"/><stop offset="1" stop-color="#F2A01E"/></linearGradient></defs>
<path d="M60 8 L114 112 L86 112 L60 52 L34 112 L6 112 Z" fill="#4A7BC4"/>
<path d="M60 72 L72 110 L48 110 Z" fill="#F2A01E"/>
<path d="M6 98 C 40 78, 84 54, 116 42 C 98 58, 56 78, 16 106 Z" fill="url(#s)"/></svg>`;
}

export function markDataUri(px = 120): string {
  return `data:image/svg+xml;base64,${Buffer.from(markSvg(px)).toString("base64")}`;
}
