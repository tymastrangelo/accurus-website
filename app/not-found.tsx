import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  // The root layout carries no chrome (it lives in the route-group layouts), so add it here.
  return (
    <>
      <Header />
      <main id="main">
    <section className="notfound">
      <div className="wrap">
        <Eyebrow>Accurus Research</Eyebrow>
        <div className="code">404</div>
        <h1>Page not found</h1>
        <p>
          The page you&rsquo;re looking for isn&rsquo;t here. It may have moved. Head back home, or
          start a conversation and we&rsquo;ll point you the right way.
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
      </main>
      <Footer />
    </>
  );
}
