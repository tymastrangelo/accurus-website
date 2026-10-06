import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { Arc } from "@/components/arc";
import { MailIcon, PhoneIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Doug Cox about an executive presentation, the two-day survey workshop, or an experienced second set of eyes on an upcoming survey.",
  alternates: { canonical: "/contact" },
};

const reasons = [
  "You may be considering an executive presentation for your leadership team.",
  "You may want to develop survey research capability within your organization.",
  "You may have an upcoming survey and want an experienced second set of eyes.",
  "Or you may simply be wondering whether Accurus Research is a good fit for what your organization needs.",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-intro">
        <div className="wrap reveal">
          <Eyebrow>Contact</Eyebrow>
          <h1>Start a Conversation</h1>
          <ul className="qlist plain contact-reasons">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="lead" style={{ marginTop: "1.4rem" }}>
            <b>Let&rsquo;s talk.</b>
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <h2 className="contact-h">Contact Doug</h2>
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
                <a className="method qr" href={site.hihello} target="_blank" rel="noopener noreferrer">
                  <Image src="/hihello-qr.png" alt="QR code for Doug Cox's HiHello digital business card" width={600} height={600} sizes="112px" />
                  <span>
                    <span className="k">Digital business card</span>
                    <span className="v">Scan to save Doug&rsquo;s contact</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="quotebox reveal">
              <Arc variant="quote" uid="contact" />
              <p className="qt">There is no need to have everything figured out before reaching out.</p>
              <p className="at">
                Tell us what prompted the conversation, what you are trying to accomplish and what
                questions you have. We can begin there.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
