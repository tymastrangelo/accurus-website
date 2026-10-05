import { Arc } from "./arc";
import { CTA } from "./cta";
import { site } from "@/lib/site";

/** The dark closing band with the signature arc, shared across all pages. */
export function FinalCta({
  uid,
  heading = "Better Surveys. Better Decisions.",
  note,
  children = "Whether you’re considering an executive presentation, the two-day workshop, or a second set of eyes on an upcoming survey, a conversation is the right place to start.",
}: {
  uid: string;
  heading?: string;
  children?: React.ReactNode;
  /** Small italic line under the buttons (e.g. "No sales presentation…"). */
  note?: string;
}) {
  return (
    <section className="final">
      <Arc variant="final" uid={uid} />
      <div className="wrap">
        <h2 className="reveal">{heading}</h2>
        <p className="reveal">{children}</p>
        <div className="btn-row reveal">
          <CTA href="/contact" variant="light" withArrow>
            Start a conversation
          </CTA>
          <CTA href={`mailto:${site.email}`} variant="outline">
            Email Doug
          </CTA>
        </div>
        {note ? <p className="final-note reveal">{note}</p> : null}
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
