"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-triggered reveal controller. Adds `animate` to <body> only when motion
 * is allowed, then fades in `.reveal` / `.stagger` blocks and draws `.arc-draw`
 * as they enter the viewport.
 *
 * Re-runs on every route change: the layout (and this component) persist across
 * client-side navigations, so without re-observing, a new page's `.reveal`
 * elements would never be seen by the observer and would stay hidden. With
 * reduced-motion, `animate` is never added and everything shows immediately.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    document.body.classList.add("animate");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
    );

    // observe on the next frame so the freshly-navigated DOM is in place
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal, .stagger, .arc-draw").forEach((el) => {
        if (!el.classList.contains("in")) observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
