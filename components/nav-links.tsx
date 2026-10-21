"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, services } from "@/lib/site";
import { CTA } from "./cta";
import { ChevronDownIcon } from "./icons";

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

/**
 * Desktop primary navigation with active-page underline via aria-current.
 * Contact is left out here: the CTA is Contact. Home is listed explicitly even
 * though the logo links home, since not every visitor knows that convention.
 * The three offerings sit in one Services menu so the bar doesn't crowd.
 */
export function NavLinks() {
  const pathname = usePathname();
  const [home, ...rest] = nav.filter(
    (item) => item.href !== "/contact" && !services.some((s) => s.href === item.href),
  );
  const link = (item: (typeof nav)[number]) => (
    <Link
      key={item.href}
      className="link"
      href={item.href}
      aria-current={isActive(item.href, pathname) ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
  return (
    <nav className="nav-links" aria-label="Primary">
      {link(home)}
      <ServicesMenu pathname={pathname} />
      {rest.map(link)}
      <CTA href="/contact" variant="primary" className="nav-cta">
        Start a conversation
      </CTA>
    </nav>
  );
}

/**
 * Disclosure menu (button + list of links, the WAI-ARIA pattern for site nav).
 * Closes on Escape, a click outside, focus leaving it, or picking a page.
 */
function ServicesMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="nav-menu"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="link"
        aria-expanded={open}
        aria-controls="services-menu"
        data-active={services.some((s) => isActive(s.href, pathname)) || undefined}
        onClick={() => setOpen((o) => !o)}
      >
        Services
        <ChevronDownIcon size={16} />
      </button>
      <ul id="services-menu" className="nav-dropdown" hidden={!open}>
        {services.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              aria-current={isActive(s.href, pathname) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
