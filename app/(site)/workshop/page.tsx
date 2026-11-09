import type { Metadata } from "next";
import Image from "next/image";
import { Arc } from "@/components/arc";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { PortraitFrame } from "@/components/portrait-frame";
import { FinalCta } from "@/components/final-cta";
import { ogImage, site } from "@/lib/site";

const title = "Survey Research Training Workshop";
const description =
  "Instructor-led survey research training that helps organizations strengthen their internal capabilities. A two-day workshop, in cohort or private formats.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/workshop" },
  // Without these, shared links inherit the homepage's og:title and og:url.
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    url: "/workshop",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
};

// Doug's copy, verbatim. Also emitted as FAQPage JSON-LD below.
const faqs = [
  [
    "Who should attend this workshop?",
    "The workshop is designed for business leaders, managers, and organizational professionals who need reliable information to make decisions or who are involved in planning, conducting, or using surveys. Participants may come from businesses, government agencies, nonprofit organizations, and other settings where understanding the needs, experiences, and opinions of people is important.",
  ],
  [
    "Do participants need previous survey research experience?",
    "No previous survey research experience is required. The workshop begins with the fundamentals and progresses through the seven steps of a successful survey project. Participants who have conducted surveys before will also benefit from strengthening their understanding of sound research practices and learning to recognize common mistakes that can compromise the reliability of survey results.",
  ],
  [
    "What will participants be able to do after completing the workshop?",
    "Participants will gain the knowledge, practical skills, and confidence to design and lead survey projects, from identifying information needs through analyzing results and using the findings to support decisions. Equally important, they will develop the judgment to recognize potential weaknesses in survey methods and findings, evaluate the reliability of the evidence, and make informed decisions throughout the research process.",
  ],
  [
    "Will I learn how to develop effective survey questions?",
    "Absolutely. Questionnaire design is an important part of the workshop. Participants learn how to determine what information a survey needs to collect, develop clear and unbiased questions, select appropriate question formats and response options, and organize questions into an effective questionnaire. They also learn why good questionnaire design begins with a clear understanding of the decisions the survey is intended to support.",
  ],
  [
    "Does the workshop cover analyzing survey results and using the findings?",
    "Yes. The workshop covers the entire survey research process, including data analysis, interpretation, and the use of findings to support decisions. Participants learn how to recognize meaningful patterns and differences, avoid misleading conclusions, and translate survey results into reliable evidence that can guide action.",
  ],
  [
    "Can an organization arrange a private workshop for its employees?",
    "Yes. Accurus Research offers private organizational workshops in addition to scheduled cohort workshops that bring together participants from different organizations. A private workshop provides an opportunity for employees to learn together, develop a common understanding of sound survey research practices, and strengthen their organization’s internal capabilities.",
  ],
  [
    "Will participants receive a certificate of completion?",
    "Yes. Participants who complete the two-day workshop receive a certificate of completion documenting 13.5 Professional Development Hours (PDH). Each participant also receives a printed Participant Workbook and Workshop Presentation Guide to support learning during the workshop and provide useful resources afterward.",
  ],
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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
            <h1>
              Survey Research for Better Business Decisions
              <span className="h1-sub">
                A Practical Guide to Designing, Conducting, and Using Surveys
              </span>
            </h1>
            <p className="lead">
              Accurus Research provides practical, instructor-led survey research training for
              organizations that want to strengthen their internal capabilities. Through a
              comprehensive two-day workshop, participants learn how to plan, design, conduct,
              analyze, and use surveys to produce reliable evidence for better business decisions.
            </p>
            <p className="lead">
              <b>From information gap to reliable evidence.</b>
            </p>
            <p className="lead lead-follow">
              Most organizations will encounter occasions when they need to know more than they
              currently know. The challenge is determining what information is missing and how to
              obtain reliable answers that can guide sound business decisions.
            </p>
          </div>
          <PortraitFrame
            variant="hero"
            uid="workshop"
            reveal
            photoSrc="/doug-cox-workshop-title.jpg"
            photoAlt="Doug Cox introducing the Survey Research for Better Business Decisions workshop"
            aspectRatio="4 / 3"
            caption="Doug Cox"
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
                <b>
                  Survey Research for Better Business Decisions: A Practical Guide to Designing,
                  Conducting, and Using Surveys
                </b>{" "}
                is a two-day, hands-on workshop
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
            <ol className="steps cycle-colors reveal">
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
              <span className="label">Two ways to learn</span>
              <h2>Workshop Formats</h2>
            </div>
            <div className="body">
              <p>The two-day workshop is offered in two formats:</p>
              <ul className="qlist plain">
                <li>
                  <b>Scheduled Cohort Workshops:</b> Individuals from different organizations
                  participate together in a collaborative learning environment, sharing experiences
                  and perspectives while developing practical survey research skills.
                </li>
                <li>
                  <b>Private Organizational Workshops:</b> Organizations may arrange a dedicated
                  workshop for their own employees, providing an opportunity for teams to develop a
                  common understanding of reliable survey research practices.
                </li>
              </ul>
              <p>
                Both formats provide 13.5 Professional Development Hours (PDH), practical
                exercises, and comprehensive participant materials.
              </p>
            </div>
          </div>

          <div className="feature reveal">
            <div>
              <span className="label">Take-home materials</span>
              <h2>Participants Leave with More Than Notes</h2>
            </div>
            <div className="body">
              <h3>Comprehensive Participant Materials</h3>
              <p>
                Each participant receives two professionally prepared, printed resources: a{" "}
                <b>Participant Workbook</b> containing exercises, case study materials, worksheets,
                and an extensive collection of references and resources; and a{" "}
                <b>Workshop Presentation Guide</b> containing the presentation slides used
                throughout the two-day program. Together, these complementary publications support
                active learning during the workshop and provide valuable resources for future use.
              </p>
              <p>
                Participants also receive a bonus resource titled{" "}
                <b>Online Surveys: Better Technology Doesn&rsquo;t Always Mean Better Data</b> that
                addresses the opportunities and challenges associated with modern online survey
                research.
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

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">Common questions</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            {/* native <details>: answers stay in the HTML, so search engines and AI crawlers read them */}
            <div className="body faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          // static, trusted copy from this file
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      <FinalCta uid="workshop" heading="Discuss Bringing the Workshop to Your Organization" />
    </>
  );
}
