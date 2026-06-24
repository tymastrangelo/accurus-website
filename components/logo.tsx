import { LogoMark } from "./logo-mark";

/**
 * Full Accurus Research lockup: the vectorized mark beside (or above) the
 * wordmark, set in Fraunces so it matches the brand's display face exactly and
 * stays real, selectable, crisp text. Used in the header (horizontal) and the
 * footer (stacked, with tagline).
 */
export function Logo({
  variant = "horizontal",
  markSize = 38,
  uid = "logo",
  withTagline = false,
}: {
  variant?: "horizontal" | "stacked";
  markSize?: number;
  uid?: string;
  withTagline?: boolean;
}) {
  return (
    <span className={`logo${variant === "stacked" ? " stacked" : ""}`}>
      <LogoMark size={markSize} uid={uid} />
      <span className="wordmark">
        <span className="word-main">ACCURUS</span>
        <span className="word-sub">
          <span className="word-sub-t">RESEARCH</span>
        </span>
        {withTagline ? (
          <span className="tagline">Better Surveys. Better Decisions.</span>
        ) : null}
      </span>
    </span>
  );
}
