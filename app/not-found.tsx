import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap">
        <Eyebrow>Accurus Research</Eyebrow>
        <div className="code">404</div>
        <h1>Page not found</h1>
        <p>
          The page you&rsquo;re looking for isn&rsquo;t here. It may have moved. Head back home, or
          get in touch and I&rsquo;ll point you the right way.
        </p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <CTA href="/" variant="primary" withArrow>
            Back to home
          </CTA>
          <CTA href="/contact" variant="ghost">
            Contact Doug
          </CTA>
        </div>
      </div>
    </section>
  );
}
