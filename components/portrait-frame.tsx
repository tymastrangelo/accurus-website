import Image from "next/image";
import { Arc } from "./arc";

/**
 * Deliberate portrait placeholder. A navy→blue frame with the signature arc
 * behind it, a quiet line-art bust, a frosted caption, and a "coming soon" pill.
 *
 * Dropping in Doug's real photo later is a one-line change: pass `photoSrc`
 * (and `photoAlt`) and the same frame renders a next/image fill instead of the
 * placeholder figure - no layout change.
 */
function Bust() {
  return (
    <div className="figure" aria-hidden="true">
      <svg viewBox="0 0 200 230" fill="none">
        <path
          d="M100 120c26 0 47-23 47-52s-21-52-47-52-47 23-47 52 21 52 47 52Z"
          fill="rgba(255,255,255,.16)"
        />
        <path d="M28 230c0-44 32-78 72-78s72 34 72 78" fill="rgba(255,255,255,.14)" />
      </svg>
    </div>
  );
}

export function PortraitFrame({
  variant = "hero",
  uid = "portrait",
  reveal = false,
  photoSrc,
  photoAlt,
  aspectRatio,
  caption,
  role,
}: {
  variant?: "hero" | "mini";
  uid?: string;
  reveal?: boolean;
  photoSrc?: string;
  photoAlt?: string;
  /** Override the default 4 / 4.5 portrait ratio (e.g. "5 / 4" for a landscape shot). */
  aspectRatio?: string;
  caption?: string;
  role?: string;
}) {
  if (variant === "mini") {
    return (
      <div className={`mini-portrait${reveal ? " reveal" : ""}`}>
        {photoSrc ? (
          <Image className="photo" src={photoSrc} alt={photoAlt ?? "Doug Cox"} fill sizes="(max-width:880px) 80vw, 360px" />
        ) : (
          <>
            <span className="tag">Photo coming soon</span>
            <div className="figure" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none">
                <path
                  d="M100 108c24 0 43-21 43-47S124 14 100 14 57 35 57 61s19 47 43 47Z"
                  fill="rgba(255,255,255,.16)"
                />
                <path d="M30 200c0-40 31-70 70-70s70 30 70 70" fill="rgba(255,255,255,.14)" />
              </svg>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`portrait${reveal ? " reveal" : ""}`}>
      <Arc variant="portrait" uid={uid} />
      <div className="pcard" style={aspectRatio ? { aspectRatio } : undefined}>
        {photoSrc ? (
          <Image
            className="photo"
            src={photoSrc}
            alt={photoAlt ?? "Doug Cox, founder of Accurus Research"}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width:880px) 80vw, 440px"
          />
        ) : (
          <>
            <div className="grain" />
            <span className="tag">Portrait coming soon</span>
            <Bust />
          </>
        )}
        <div className="cap">
          <div className="nm">{caption ?? "Doug Cox"}</div>
          <div className="rl">{role ?? "Founder · Accurus Research"}</div>
        </div>
      </div>
    </div>
  );
}
