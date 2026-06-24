import Link from "next/link";
import { ArrowRightIcon } from "./icons";

/**
 * Offer card with the gradient top-bar and icon badge. When `href` is set the
 * whole card is a link to the matching Services section; the "more" label names
 * its destination. Content length is allowed to vary card to card.
 */
export function ServiceCard({
  icon,
  title,
  children,
  href,
  more,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  href?: string;
  more?: string;
}) {
  const body = (
    <>
      <span className="topbar" aria-hidden="true" />
      <div className="badge">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
      {more && href ? (
        <span className="more">
          {more}
          <span className="arr" aria-hidden="true">
            <ArrowRightIcon size={17} />
          </span>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link className="card" href={href}>
        {body}
      </Link>
    );
  }
  return <article className="card">{body}</article>;
}
