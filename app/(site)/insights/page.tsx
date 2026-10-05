import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking about surveys, evidence and better decisions: survey design, sampling, questionnaire development, data quality, analysis and information gaps.",
  alternates: { canonical: "/insights" },
};

// ponytail: topics only until the first articles are written; add an article list here then.
const topics = [
  ["Survey Design", "Practical guidance for designing research that answers the question you actually need answered."],
  ["Questionnaire Design", "How seemingly small wording choices can have surprisingly large effects on the information respondents provide."],
  ["Sampling", "Why who answers a survey matters just as much as how many people answer it."],
  ["Data Quality", "Understanding the factors that determine whether survey findings deserve to be trusted."],
  ["Analysis & Interpretation", "Moving beyond charts and averages to understand what the data actually shows—and what it doesn’t."],
  ["Information Gaps & Decisions", "Recognizing when important information is missing and determining whether survey research can help close the gap."],
];

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap reveal">
          <Eyebrow>Insights</Eyebrow>
          <h1>Practical Thinking About Surveys, Evidence and Better Decisions</h1>
          <p className="lead">Good survey research involves much more than writing questions.</p>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p>
                The Accurus Research Insights collection explores the practical issues organizations
                encounter when trying to understand customers, employees, members and other
                stakeholders.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Topics include survey design, sampling, questionnaire development, data quality,
                analysis, interpretation, information gaps and the connection between reliable
                evidence and organizational decision making.
              </p>
            </div>
            <div className="reveal">
              <p className="statement">
                The objective is simple: to help people think more carefully about{" "}
                <em>the information behind important decisions.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHeading eyebrow="Featured topics" title="What the Insights Collection Covers" reveal>
            The first articles are being written now and will be published here as they become
            available.
          </SectionHeading>
          <div className="cards stagger">
            {topics.map(([title, body]) => (
              <ServiceCard key={title} title={title}>
                {body}
              </ServiceCard>
            ))}
          </div>
        </div>
      </section>

      <FinalCta uid="insights" />
    </>
  );
}
