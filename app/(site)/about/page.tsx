import type { Metadata } from "next";
import { Arc } from "@/components/arc";
import { Eyebrow } from "@/components/eyebrow";
import { PortraitFrame } from "@/components/portrait-frame";
import { FinalCta } from "@/components/final-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Douglas Cox",
  description:
    "Douglas Cox, President of Accurus Research, brings more than 40 years of designing and leading survey research to teaching organizations the thinking behind good surveys.",
  alternates: { canonical: "/about" },
};

const seen = [
  "Surveys launched before anyone clearly defined what they needed to learn.",
  "Questions that unintentionally influenced the answers.",
  "Samples that did not represent the people the organization believed they represented.",
  "Results that were interpreted too broadly.",
  "And decisions made from research that looked far more reliable than it actually was.",
];

const hardParts = [
  "What are we really trying to learn?",
  "Who needs to be represented?",
  "Are we asking questions people can answer accurately?",
  "What might bias the results?",
  "What does the data actually tell us?",
  "And what conclusions are justified?",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero has-portrait">
        <div className="wrap">
          <div className="reveal">
            <Eyebrow>About Douglas Cox</Eyebrow>
            <h1>Four Decades of Survey Research Experience—Now Focused on Teaching Others</h1>
            <p className="lead">
              For more than 40 years, Doug has designed and led survey research projects for
              organizations seeking to understand their customers, employees and other
              stakeholders.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="n">40+</div>
                <div className="l">Years in survey research</div>
              </div>
              <div className="stat">
                <div className="n">7</div>
                <div className="l">Steps in the Survey Success Cycle</div>
              </div>
              <div className="stat">
                <div className="n">2-day</div>
                <div className="l">Hands-on workshop</div>
              </div>
            </div>
          </div>
          <PortraitFrame
            variant="hero"
            uid="about"
            reveal
            photoSrc="/doug-cox-office.jpg"
            photoAlt="Douglas Cox in the Accurus Research office"
            aspectRatio="1 / 1"
            caption="Douglas Cox"
            role="President, Accurus Research · Survey Research Educator & Consultant"
          />
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p>
                Over those years, he has seen well-designed research clarify difficult questions,
                challenge assumptions and provide leaders with evidence they could use confidently.
              </p>
              <p className="statement" style={{ marginTop: "1.2rem" }}>
                He has also seen <em>the opposite.</em>
              </p>
            </div>
            <div className="reveal">
              <ul className="qlist plain">
                {seen.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: "1.2rem" }}>
                <b>Those experiences have led to the Accurus Research of today.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">The difficult part</span>
              <h2>Why Accurus Research?</h2>
            </div>
            <div className="body">
              <p>
                Survey software has made it remarkably easy to conduct a survey. It has not made it
                easy to conduct a <b>good</b> survey.
              </p>
              <p>
                Anyone can type questions into an online platform, send a link and produce charts.
                The difficult part comes before and after that.
              </p>
              <ul className="qlist plain">
                {hardParts.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              <p>
                After more than 40 years designing and leading survey research projects, Doug
                transitioned Accurus Research to teach organizations the thinking behind those
                decisions.
              </p>
            </div>
          </div>

          <div className="feature reveal">
            <div>
              <span className="label">Designed for practitioners</span>
              <h2>Practical Rather Than Academic</h2>
            </div>
            <div className="body">
              <p>
                Accurus Research training is grounded in sound survey methodology, but it is
                designed for practitioners.
              </p>
              <p>
                The objective is not to teach research theory for its own sake. It is to help people
                make better choices when they face an actual survey assignment back at work.
              </p>
              <p>
                Participants learn not simply <b>what</b> to do, but <b>why</b> it matters—and what
                can happen when important steps are skipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reassure">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>The foundation</Eyebrow>
              <h2 className="h2">Better Surveys. Better Decisions.</h2>
              <p style={{ marginTop: "1rem" }}>Accurus Research began with a simple idea.</p>
              <p style={{ marginTop: "1rem" }}>
                That remains the foundation of everything Accurus Research does.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                <a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  View Doug&rsquo;s LinkedIn profile →
                </a>
              </p>
            </div>
            <div className="quotebox reveal">
              <Arc variant="quote" uid="about" />
              <p className="qt">
                Better survey research produces more reliable evidence. More reliable evidence
                reduces uncertainty. And reducing uncertainty helps leaders make better-informed
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta uid="about" heading="Start a Conversation with Doug" />
    </>
  );
}
