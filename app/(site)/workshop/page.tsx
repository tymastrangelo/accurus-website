import type { Metadata } from "next";
import Image from "next/image";
import { Arc } from "@/components/arc";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { PortraitFrame } from "@/components/portrait-frame";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Two-Day Workshop",
  description:
    "Practical Survey Design for Decision Makers: a two-day, hands-on workshop that builds internal survey capability through the 7-Step Survey Success Cycle, a continuing case study, and a take-home workbook.",
  alternates: { canonical: "/workshop" },
};

const openers = [
  "What do customers really think?",
  "Why are employees responding the way they are?",
  "Why are customers leaving?",
  "Would people value a new service?",
  "How widespread is a concern?",
  "What are we missing?",
];

const cycle = [
  ["Defining Purpose", "What are we trying to learn—and what decision will the information support?"],
  ["Sampling", "Who needs to be represented, and how will they be selected?"],
  ["Data Collection Method", "What is the most appropriate way to gather the information?"],
  ["Questionnaire Design", "How do we ask questions that respondents can understand and answer accurately?"],
  ["Fieldwork", "How do we launch, monitor and manage the survey while protecting data quality?"],
  ["Data Analysis", "What does the data actually show?"],
  ["Turning Data into Action", "What do the findings mean—and what, if anything, should we do?"],
];

const choices = [
  "Who should we survey?",
  "How many people do we need?",
  "Which data collection approach makes sense?",
  "Is this question biased?",
  "What does this finding really tell us?",
  "Are two groups meaningfully different?",
  "Does the evidence support the conclusion we are about to make?",
];

const audiences = [
  "Customer experience",
  "Human resources",
  "Marketing",
  "Operations",
  "Membership organizations",
  "Strategic planning",
  "Organizational development",
  "Program management",
  "Research and analytics",
];

export default function WorkshopPage() {
  return (
    <>
      <section className="page-hero has-portrait">
        <div className="wrap">
          <div className="reveal">
            <Eyebrow>Two-Day Workshop</Eyebrow>
            <h1>Practical Survey Design for Decision Makers</h1>
            <p className="lead">
              <b>From information gap to reliable evidence.</b>
            </p>
            <p className="lead lead-follow">
              Most organizations will encounter occasions when they need to know more than they
              currently know.
            </p>
          </div>
          <PortraitFrame
            variant="hero"
            uid="workshop"
            reveal
            photoSrc="/doug-cox-workshop-slide.jpg"
            photoAlt="Douglas Cox introducing the Practical Survey Design for Decision Makers workshop"
            aspectRatio="4 / 3"
            caption="Douglas Cox"
            role="Leading the two-day workshop"
          />
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <ul className="qlist plain">
                {openers.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <p className="statement">
                A survey may help answer those questions. <em>But only if it is done well.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">The goal</span>
              <h2>Build a Capability Your Organization Can Use Again and Again</h2>
            </div>
            <div className="body">
              <p>
                <b>Practical Survey Design for Decision Makers</b> is a two-day, hands-on workshop
                designed to give participants a practical working knowledge of the survey research
                process.
              </p>
              <p>The goal is not to turn participants into professional survey researchers.</p>
              <p>
                It is to give them the knowledge and tools needed to approach an organizational
                survey thoughtfully, recognize common mistakes, make sound methodological choices
                and produce evidence that decision makers can use with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="wrap">
          <SectionHeading eyebrow="The framework" title="The 7-Step Survey Success Cycle" reveal>
            Participants work through the complete survey research process.
          </SectionHeading>
          <div className="cycle-grid">
            <figure className="figure-frame cycle reveal">
              <Image
                src="/survey-success-cycle.png"
                alt="The 7-Step Survey Success Cycle diagram, Accurus Research."
                width={1254}
                height={1254}
                sizes="(max-width: 880px) 90vw, 480px"
              />
            </figure>
            <ol className="steps reveal">
              {cycle.map(([title, q], i) => (
                <li key={title}>
                  <span className="num">{i + 1}</span>
                  <span>
                    <b>{title}</b>
                    {q}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="reassure">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>Hands-on</Eyebrow>
              <h2 className="h2">Learning by Doing</h2>
              <p style={{ marginTop: "1rem" }}>
                This is not two days of lecture. Participants work through exercises, examples and a continuing organizational case
                study that follows the survey process from an initial business concern through
                analysis and decision making. They confront the kinds of choices that occur in real
                research:
              </p>
              <ul className="qlist plain">
                {choices.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
            <div className="quotebox reveal">
              <Arc variant="quote" uid="workshop" />
              <p className="at" style={{ marginTop: 0 }}>
                The emphasis throughout is practical:
              </p>
              <p className="qt" style={{ marginTop: ".6rem" }}>
                What would you do—and why?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">Take-home materials</span>
              <h2>Participants Leave with More Than Notes</h2>
            </div>
            <div className="body">
              <p>
                Each participant receives a comprehensive workshop workbook designed to remain
                useful after the workshop ends.
              </p>
              <p>
                The workbook includes key concepts, exercises, planning tools, examples and
                reference material that participants can return to when an actual survey need
                arises.
              </p>
              <p>
                Participants also receive a bonus resource addressing{" "}
                <b>Online Surveys in Today&rsquo;s World</b> and the opportunities and challenges
                associated with modern online survey research.
              </p>
            </div>
          </div>

          <div className="feature reveal">
            <div>
              <span className="label">No previous survey research experience is required</span>
              <h2>Who Should Attend?</h2>
            </div>
            <div className="body">
              <p>
                The workshop is designed for people who may be asked to plan, conduct, oversee or
                interpret surveys as part of their responsibilities, including those working in:
              </p>
              <div className="pitfalls">
                {audiences.map((a) => (
                  <span key={a} className="chip">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <h2 className="h2">Your Organization Doesn&rsquo;t Need to Conduct Surveys Every Week</h2>
              <p style={{ marginTop: "1rem" }}>
                That isn&rsquo;t the point. The value comes when an important question arises once
                or twice a year and someone inside the organization knows how to respond.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Instead of immediately launching a few questions through an online survey platform,
                your team can first ask:
              </p>
            </div>
            <div className="reveal">
              <ol className="qlist">
                <li>
                  <b>What are we trying to learn?</b>
                </li>
                <li>
                  <b>Is a survey really the right way to learn it?</b>
                </li>
                <li>
                  <b>If it is, how do we do it well enough to trust the result?</b>
                </li>
              </ol>
              <p className="statement" style={{ marginTop: "1.6rem" }}>
                That is organizational survey capability. <em>And that is what this workshop is
                designed to build.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta uid="workshop" heading="Discuss Bringing the Workshop to Your Organization" />
    </>
  );
}
