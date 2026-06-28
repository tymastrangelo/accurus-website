import Image from "next/image";

/**
 * Accurus Research brand lockup, using Doug's official artwork with the white
 * background keyed out to transparency. The header and footer get the full
 * horizontal lockup; the narrow mobile panel gets the compact "A" mark alone.
 * Display size is set per placement by the `brand-logo--*` CSS classes.
 */
const ASSETS = {
  header: {
    src: "/accurus-logo.png",
    width: 1159,
    height: 304,
    alt: "Accurus Research — Better Surveys. Better Decisions.",
  },
  footer: {
    src: "/accurus-logo.png",
    width: 1159,
    height: 304,
    alt: "Accurus Research — Better Surveys. Better Decisions.",
  },
  mobile: {
    src: "/accurus-mark.png",
    width: 240,
    height: 179,
    alt: "Accurus Research",
  },
} as const;

export function Logo({
  variant = "header",
  priority = false,
}: {
  variant?: keyof typeof ASSETS;
  priority?: boolean;
}) {
  const asset = ASSETS[variant];
  return (
    <Image
      className={`brand-logo brand-logo--${variant}`}
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
    />
  );
}
