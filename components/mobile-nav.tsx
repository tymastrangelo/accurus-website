"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Logo } from "./logo";
import { MenuIcon, CloseIcon } from "./icons";

/**
 * Mobile menu. The trigger lives in the header, but the scrim + slide-in panel
 * are portaled to <body> so they escape the header's stacking context and
 * containing block (the header's backdrop-filter would otherwise trap the fixed
 * overlay inside the 74px bar). Full keyboard support: focus moves into the
 * panel on open, is trapped while open, Escape closes, focus returns to trigger.
 */
export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Portals need document.body, which doesn't exist during SSR. Gating on a
  // mount flag keeps the first client render matching the server (no overlay),
  // then mounts it. This is the intended pattern for client-only portals.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // header shadow on scroll
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // body scroll lock + focus management while open
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const getFocusables = () =>
      panelRef.current
        ? Array.from(
            panelRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
            ),
          )
        : [];

    // Focus on the next frame, once the panel has flipped to visible
    // (you can't focus an element while it's still visibility:hidden).
    const raf = requestAnimationFrame(() => getFocusables()[0]?.focus());

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "Tab") {
        const focusables = getFocusables();
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, close]);

  const overlay = (
    <>
      <div className={`scrim${open ? " open" : ""}`} onClick={close} aria-hidden="true" />
      <aside
        id="mobile-panel"
        ref={panelRef}
        className={`panel${open ? " open" : ""}`}
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="ptop">
          <Logo markSize={30} uid="mobile" />
          <button className="menu-btn" aria-label="Close menu" onClick={close}>
            <CloseIcon size={26} />
          </button>
        </div>
        {nav.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              className="link"
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          );
        })}
        <a className="btn btn-primary" href={`mailto:${site.email}`} onClick={close}>
          Let&rsquo;s talk
        </a>
      </aside>
    </>
  );

  return (
    <>
      <button
        ref={triggerRef}
        className="menu-btn"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-panel"
        onClick={() => setOpen(true)}
      >
        <MenuIcon size={28} />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
