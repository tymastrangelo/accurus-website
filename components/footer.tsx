import Link from "next/link";
import { Logo } from "./logo";
import { nav, site } from "@/lib/site";

/** Shared footer: stacked brand lockup, navigation, and real contact details. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <Logo variant="footer" />
          <p className="ftag">
            Practical survey research training and advisory for organizations that want stronger
            data and better decisions.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Get in touch</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Accurus Research. All rights reserved.</span>
        <span>Better Surveys. Better Decisions.</span>
      </div>
    </footer>
  );
}
