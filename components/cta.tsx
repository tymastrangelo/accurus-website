import Link from "next/link";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "ghost" | "light" | "outline";

/**
 * Brand button rendered as the right element for its destination:
 *  - internal path  → next/link
 *  - mailto:/tel:/http → plain anchor (with rel for external)
 * Every CTA names its real action via `children` (no "Learn more"/"Submit").
 */
export function CTA({
  href,
  variant = "primary",
  withArrow = false,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = `btn btn-${variant}${className ? ` ${className}` : ""}`;
  const inner = (
    <>
      {children}
      {withArrow ? (
        <span className="arr" aria-hidden="true">
          <ArrowRightIcon size={18} />
        </span>
      ) : null}
    </>
  );

  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={cls}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}
