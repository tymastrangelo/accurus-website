import { Arc } from "./arc";
import { CTA } from "./cta";
import { site } from "@/lib/site";

/** The dark closing band with the signature arc, shared across all pages. */
export function FinalCta({
  uid,
  heading = "Let’s talk about how better survey design leads to better decisions",
  children = "Whether you’re considering a workshop for your team or want expert eyes on a survey already in motion, I’d be glad to talk it through.",
}: {
  uid: string;
  heading?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="final">
      <Arc variant="final" uid={uid} />
      <div className="wrap">
        <h2 className="reveal">{heading}</h2>
        <p className="reveal">{children}</p>
        <div className="btn-row reveal">
          <CTA href={`mailto:${site.email}`} variant="light" withArrow>
            Email Doug
          </CTA>
          <CTA href={`tel:${site.phone}`} variant="outline">
            Call {site.phoneDisplay}
          </CTA>
        </div>
        <div className="contacts reveal">
          <span>
            Email <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
          <span>
            Phone <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </span>
          <span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
