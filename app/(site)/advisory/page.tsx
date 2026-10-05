import type { Metadata } from "next";
import { Arc } from "@/components/arc";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Advisory Services",
  description:
    "An experienced second set of eyes for important or difficult surveys. Your team does the work; Accurus Research helps you do it well.",
  alternates: { canonical: "/advisory" },
};

const situations = [
  "The population may be difficult to reach.",
  "The questionnaire may involve sensitive issues.",
  "The sample may be small.",
  "The findings may appear contradictory.",
  "Or the decision riding on the results may be especially important.",
];

const support = [
  "Clarifying research objectives",
  "Reviewing research plans",
  "Evaluating sampling approaches",
  "Reviewing questionnaires before launch",
  "Identifying potential sources of bias",
  "Discussing fieldwork challenges",
  "Reviewing analysis plans",
  "Helping distinguish findings from interpretations",
  "Examining whether conclusions are supported by the evidence",
  "Thinking through what additional information may still be needed",
];

export default function AdvisoryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap reveal">
          <Eyebrow>Advisory Services</Eyebrow>
          <h1>An Experienced Second Set of Eyes</h1>
          <p className="lead">
            <b>Your Team Does the Work. Accurus Research Helps You Do It Well.</b>
          </p>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p className="statement">
                Completing the Accurus Research workshop does not mean your team will never
                encounter a difficult survey question. <em>Some projects are simply more complicated
                than others.</em>
              </p>
            </div>
            <div className="reveal">
              <ul className="qlist plain">
                {situations.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: "1.2rem" }}>
                <b>In those situations, a second set of experienced eyes can be valuable.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">Support may include</span>
              <h2>Practical Guidance When You Need It</h2>
            </div>
            <div className="body">
              <p>
                Accurus Research provides advisory support to organizations that want experienced
                survey research guidance while retaining ownership of their research.
              </p>
              <ul className="checklist">
                {support.map((item) => (
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
          <div className="grid">
            <div className="reveal">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="h2">Building Capability—Not Dependence</h2>
              <p style={{ marginTop: "1rem" }}>
                The purpose of Accurus Research advisory services is not to make your organization
                dependent on an outside consultant every time a question arises.
              </p>
              <p style={{ marginTop: "1rem" }}>
                It is to reinforce the capability you are developing internally. And when an
                unusually important or complicated project arises, experienced help is available.
              </p>
            </div>
            <div className="quotebox reveal">
              <Arc variant="quote" uid="advisory" />
              <p className="qt">
                Your people remain involved. Your people learn. Your organization becomes better
                prepared for the next question.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta uid="advisory" heading="Talk with Accurus Research About an Upcoming Survey" />
    </>
  );
}
