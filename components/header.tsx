import Link from "next/link";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";

/** Sticky site header: brand lockup, desktop nav, and the mobile menu trigger. */
export function Header() {
  return (
    <header className="site-header" id="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/">
          <Logo markSize={46} uid="header" />
        </Link>
        <NavLinks />
        <MobileNav />
      </div>
    </header>
  );
}
