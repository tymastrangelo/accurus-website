"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import { CTA } from "./cta";

/** Desktop primary navigation with active-page underline via aria-current. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="nav-links" aria-label="Primary">
      {nav.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            className="link"
            href={item.href}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
      <CTA href="/contact" variant="primary" className="nav-cta">
        Let&rsquo;s talk
      </CTA>
    </nav>
  );
}
