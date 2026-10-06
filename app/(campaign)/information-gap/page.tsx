import type { Metadata } from "next";
import { Arc } from "@/components/arc";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { Framework } from "@/components/framework";
import { FinalCta } from "@/components/final-cta";
import { CheckIcon } from "@/components/icons";

// Campaign destination for ads and targeted outreach: reachable by URL, but kept
// out of navigation, the sitemap, and search results.
export const metadata: Metadata = {
  title: "Are You Making an Important Decision with Information You Can’t Trust?",
  description:
    "Before making the decision, make sure you know what you know—and what you don’t. Accurus Research helps organizations build the survey capability to close critical information gaps.",
  alternates: { canonical: "/information-gap" },
  robots: { index: false, follow: true },
};

const doubts = [
  "Were the right people surveyed?",
  "Were important groups underrepresented?",
  "Did the questions unintentionally influence the answers?",
  "Did respondents interpret the questions as intended?",
  "Are differences meaningful—or simply random variation?",
  "Does the evidence actually support the conclusion being drawn?",
];

const fiveQuestions = [
  "What decision are we trying to make?",
  "What do we already know?",
  "What are we assuming rather than knowing?",
  "What do we wish we knew?",
  "If we knew it, would it change what we do?",
];

const knowWhen = [
  "When a survey might help.",
  "When it won’t.",
  "How to design one properly.",
  "How to recognize unreliable evidence.",
  "And when a project is complicated enough to seek additional expertise.",
];

export default function InformationGapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap reveal">
          <Eyebrow>Better Surveys. Better Decisions.</Eyebrow>
          <h1>Are You Making an Important Decision with Information You Can&rsquo;t Trust?</h1>
          <p className="lead">
            <b>Before making the decision, make sure you know what you know—and what you don&rsquo;t.</b>
          </p>
          <div className="hero-cta">
            <CTA href="/contact" variant="primary" withArrow>
              Start a conversation
            </CTA>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p>
                Organizations make decisions every day based on experience, existing data, customer
                feedback, employee comments, surveys and assumptions about what is happening.
              </p>
              <p style={{ marginTop: "1rem" }}>
                But sometimes the information behind an important decision is incomplete. And
                sometimes information that appears credible isn&rsquo;t as reliable as it seems.
              </p>
            </div>
            <div className="reveal">
              <p className="statement">
                The danger isn&rsquo;t simply not having information. It is{" "}
                <em>believing you know something that isn&rsquo;t actually supported by reliable
                evidence.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reassure">
        <div className="wrap">
          <h2 className="h2 reveal">The Most Dangerous Information May Be the Information You Trust</h2>
          <div className="grid after-heading">
            <div className="quotebox reveal">
              <Arc variant="quote" uid="landing" />
              <p className="qt">
                A survey has 1,000 responses. The percentages are displayed to one decimal place.
                The charts look professional. The results appear convincing.
              </p>
            </div>
            <div className="reveal">
              <p className="statement">
                <em>But&hellip;</em>
              </p>
              <ul className="qlist plain">
                {doubts.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              <p style={{ marginTop: "1.2rem" }}>
                <b>A survey can look credible and still lead an organization in the wrong direction.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="wrap">
          <SectionHeading eyebrow="The Accurus framework" title="From Business Problem to Better Decision" reveal>
            Accurus Research helps organizations think through a disciplined process.
          </SectionHeading>
          <Framework />
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>A simple test</Eyebrow>
              <h2 className="h2">Start with Five Questions</h2>
              <p style={{ marginTop: "1rem" }}>
                Before launching another survey—or making the decision without one—ask:
              </p>
            </div>
            <div className="reveal">
              <ol className="qlist">
                {fiveQuestions.map((q) => (
                  <li key={q}>
                    <b>{q}</b>
                  </li>
                ))}
              </ol>
              <p style={{ marginTop: "1.2rem" }}>
                If the answer to that last question is yes, you may have identified an information
                gap worth closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">Internal capability</span>
              <h2>Your Organization May Already Have the People It Needs</h2>
            </div>
            <div className="body">
              <p>
                The answer is not necessarily hiring an outside research firm every time an
                important question arises.
              </p>
              <p>
                Your organization may simply need one or two people who understand enough about
                survey research to know:
              </p>
              <ul className="checklist">
                {knowWhen.map((item) => (
                  <li key={item}>
                    <span className="tick">
                      <CheckIcon size={13} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <b>Accurus Research helps organizations build that capability.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        uid="landing"
        heading="Better Surveys. Better Decisions."
        note="No sales presentation. Just a focused conversation about what your organization needs."
      >
        When important decisions depend on understanding what people think, experience or need,
        reliable evidence matters. Let&rsquo;s talk about how your organization currently approaches
        those questions—and whether stronger internal survey capability could help.
      </FinalCta>
    </>
  );
}
