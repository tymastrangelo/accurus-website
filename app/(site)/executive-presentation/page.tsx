import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { PortraitFrame } from "@/components/portrait-frame";
import { FinalCta } from "@/components/final-cta";
import { CTA } from "@/components/cta";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Executive Presentation",
  description:
    "The Cost of Not Knowing: a 60–75 minute executive presentation on how information gaps develop, why credible-looking survey data can mislead, and how better evidence leads to better decisions.",
  alternates: { canonical: "/executive-presentation" },
};

const questions = [
  "What do we actually know?",
  "What are we assuming?",
  "What evidence supports those assumptions?",
  "Whose perspective might be missing?",
  "What would we like to know that we don’t know now?",
  "Would knowing it change our decision?",
];

const explores = [
  "How to distinguish symptoms from underlying questions",
  "How information gaps develop inside organizations",
  "Why leadership perceptions and stakeholder experiences can differ",
  "When surveys can help reduce uncertainty—and when they cannot",
  "How poorly designed surveys can create false confidence",
  "Why large numbers of responses do not automatically produce reliable evidence",
  "How better information can support better decisions",
];

export default function ExecutivePresentationPage() {
  return (
    <>
      <section className="page-hero has-portrait">
        <div className="wrap">
          <div className="reveal">
            <Eyebrow>Executive Presentation</Eyebrow>
            <h1>The Cost of Not Knowing</h1>
            <p className="lead">
              <b>Close the information gaps behind your next important business decision.</b>
            </p>
            <p className="lead lead-follow">
              Organizations rarely suffer from a shortage of information. They suffer from
              uncertainty about <b>which information can be trusted.</b>
            </p>
          </div>
          <PortraitFrame
            variant="hero"
            uid="exec"
            reveal
            photoSrc="/doug-cox-executive-presentation.jpg"
            photoAlt="Doug Cox presenting The Cost of Not Knowing to a group of leaders"
            aspectRatio="3 / 2"
            caption="Doug Cox"
            role="Presenting to leaders and management teams"
          />
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p>
                Leaders make decisions using performance measures, customer feedback, employee
                comments, online reviews, sales data, surveys, conversations and years of
                experience.
              </p>
            </div>
            <div className="reveal">
              <p className="statement">
                But what happens when those sources don&rsquo;t answer the question that really
                matters? Or worse—when the information <em>appears convincing but is wrong?</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">60–75 minutes</span>
              <h2>A Conversation About Decisions</h2>
            </div>
            <div className="body">
              <p>
                <b>The Cost of Not Knowing</b> is a 60–75 minute executive presentation designed for
                leadership teams, professional associations and other groups whose decisions depend
                on understanding customers, employees, members or other stakeholders.
              </p>
              <p>This is not a condensed course in survey methodology.</p>
              <p>
                It is a conversation about what happens when important decisions are made while
                important information is missing—or when unreliable information is mistaken for
                reliable evidence.
              </p>
              <p>
                Participants examine how information gaps develop, why assumptions and anecdotes can
                become accepted as facts, and how survey research can help when the right
                information is unavailable.
              </p>
            </div>
          </div>

          <div className="feature reveal">
            <div>
              <span className="label">Before making an important decision</span>
              <h2>The Questions Leaders Should Be Asking</h2>
            </div>
            <div className="body">
              <ol className="qlist">
                {questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
                <li>
                  And if we collect new information, <b>can we trust the answer?</b>
                </li>
              </ol>
            </div>
          </div>

          <div className="feature reveal">
            <div>
              <span className="label">Key topics</span>
              <h2>What the Presentation Examines</h2>
            </div>
            <div className="body">
              <ul className="checklist">
                {explores.map((item) => (
                  <li key={item}>
                    <span className="tick">
                      <CheckIcon size={13} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="reassure">
        <div className="wrap">
          <SectionHeading eyebrow="What comes next" title="From Awareness to Capability" reveal>
            For some organizations, the presentation is enough to change how leaders think about
            information and evidence. For others, it raises another question:
          </SectionHeading>
          <p className="statement closing reveal">
            Do we have people inside our organization who know how to investigate an important
            information gap <em>properly when one arises?</em>
          </p>
          <p className="reveal" style={{ marginTop: "1.4rem" }}>
            The Accurus Research two-day workshop is designed to build that capability.
          </p>
          <div className="hero-cta reveal">
            <CTA href="/workshop" variant="ghost" withArrow>
              Explore the workshop
            </CTA>
          </div>
        </div>
      </section>

      <FinalCta uid="exec" heading="Bring The Cost of Not Knowing to Your Leadership Team or Organization" />
    </>
  );
}
