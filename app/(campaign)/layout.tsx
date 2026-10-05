import Link from "next/link";
import { Logo } from "@/components/logo";
import { CTA } from "@/components/cta";
import { site } from "@/lib/site";

/**
 * Campaign landing pages (ads, LinkedIn, speaking follow-up). Navigation is kept
 * minimal on purpose so the visitor has one primary action: start a conversation.
 */
export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <Link className="brand" href="/">
            <Logo variant="header" priority />
          </Link>
          <CTA href="/contact" variant="primary" className="campaign-cta">
            Start a conversation
          </CTA>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer campaign-footer">
        <div className="foot-bottom">
          <span>© Accurus Research. All rights reserved.</span>
          <span>{site.tagline}</span>
        </div>
      </footer>
    </>
  );
}
