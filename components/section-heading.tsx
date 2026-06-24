import { Eyebrow } from "./eyebrow";

/**
 * Eyebrow + h2 + optional lead, in the standard section-head rhythm.
 * `reveal` opts the block into the scroll fade-up.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  reveal = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  reveal?: boolean;
}) {
  return (
    <div className={`sec-head${reveal ? " reveal" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
