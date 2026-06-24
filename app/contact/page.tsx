import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { Arc } from "@/components/arc";
import { MailIcon, PhoneIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk with Doug Cox about a survey research workshop for your team or advisory support on a project already underway. Email, phone, or LinkedIn.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-intro">
        <div className="wrap reveal">
          <Eyebrow>Contact</Eyebrow>
          <h1>Let&rsquo;s talk</h1>
          <p className="lead">
            If your organization wants to improve how it designs, conducts, and interprets surveys,
            I&rsquo;d welcome the chance to talk, whether about a workshop for your team or an
            advisory role on a project already underway.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="wrap">
          <div className="contact-grid">
            {/* contact methods */}
            <div className="reveal">
              <h2 className="contact-h">The fastest way to reach me</h2>
              <div className="method-list">
                <a className="method" href={`mailto:${site.email}`}>
                  <span className="ic">
                    <MailIcon size={22} />
                  </span>
                  <span>
                    <span className="k">Email</span>
                    <span className="v">{site.email}</span>
                  </span>
                </a>
                <a className="method" href={`tel:${site.phone}`}>
                  <span className="ic">
                    <PhoneIcon size={22} />
                  </span>
                  <span>
                    <span className="k">Phone</span>
                    <span className="v">{site.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  className="method"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ic">
                    <LinkedinIcon size={22} />
                  </span>
                  <span>
                    <span className="k">LinkedIn</span>
                    <span className="v">View profile</span>
                  </span>
                </a>
              </div>
            </div>

            {/* warm aside */}
            <div className="quotebox reveal">
              <Arc variant="quote" uid="contact" />
              <p className="qt">Better survey design leads to better decisions.</p>
              <p className="at" style={{ color: "#cdd6e8" }}>
                Tell me about your organization and the people you need to survey, and I&rsquo;ll
                point you toward the workshop or advisory engagement that fits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
