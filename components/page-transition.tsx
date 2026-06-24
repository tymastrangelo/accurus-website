"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * A gentle cross-page fade on client-side navigation. The first paint is not
 * animated (so initial-load LCP stays fast); each later route change replays
 * the `page-in` fade by re-adding the class. Opacity-only, so it layers with
 * the per-section scroll reveals, and it's disabled under reduced-motion in CSS.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-transition");
    void el.offsetWidth; // reflow so the animation restarts
    el.classList.add("page-transition");
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
