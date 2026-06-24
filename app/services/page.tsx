import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { FinalCta } from "@/components/final-cta";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two-day survey research workshops, customized in-house programs, and advisory support. Practical training for teams that want stronger data and better decisions.",
  alternates: { canonical: "/services" },
};

const outcomes = [
  "Define clear project objectives",
  "Choose the right data collection method",
  "Understand survey error and key sampling techniques",
  "Design solid questions",
  "Analyze and interpret findings",
  "Turn data into action",
];

export default function ServicesPage() {
  return (
    <>
      {/* INTRO */}
      <section className="page-hero">
        <div className="wrap reveal">
          <Eyebrow>Services</Eyebrow>
          <h1>Training and guidance for teams that rely on surveys</h1>
          <p className="lead">
            I provide practical survey research training and advisory services for organizations
            that want stronger data and better decisions, for the decision makers and teams who use
            surveys to understand customers, employees, stakeholders, voters, or the public.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section>
        <div className="wrap">
          <div id="workshop" className="anchor feature reveal">
            <div>
              <span className="label">Workshop Training</span>
              <h2>A two-day workshop</h2>
            </div>
            <div className="body">
              <p>
                A two-day workshop that teaches your team to design, conduct, and interpret surveys
                more effectively. Participants learn to:
              </p>
              <ul className="checklist">
                {outcomes.map((item) => (
                  <li key={item}>
                    <span className="tick">
                      <CheckIcon size={13} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                It includes a dedicated section on online surveys and what makes that form of data
                collection different.
              </p>
            </div>
          </div>

          <div id="customized" className="anchor feature reveal">
            <div>
              <span className="label">Customized Programs</span>
              <h2>Built for your industry</h2>
            </div>
            <div className="body">
              <p>
                Prefer in-house training? Workshop content can be tailored to your industry and the
                people you need to survey, so every example and exercise maps to the work your team
                actually does.
              </p>
            </div>
          </div>

          <div id="advisory" className="anchor feature reveal">
            <div>
              <span className="label">Advisory Support</span>
              <h2>Expert eyes on your project</h2>
            </div>
            <div className="body">
              <p>
                Beyond workshops, I give expert input on proposed and ongoing survey projects,
                across every phase of the process, from objectives and sampling through
                questionnaire review and interpretation.
              </p>
              <p>Engage me for a single review, or for ongoing support as the work unfolds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CLIENTS GAIN */}
      <section className="reassure">
        <div className="wrap">
          <SectionHeading
            eyebrow="What clients gain"
            title="More than a better grasp of the process"
            reveal
          >
            Clients build sound judgment, learn the pitfalls to avoid, and come away with real
            confidence in the data behind their decisions. The focus is always practical learning
            that leads to better decisions.
          </SectionHeading>
        </div>
      </section>

      <FinalCta uid="services" heading="Bring a workshop to your team">
        Tell me about your organization and the surveys you run, and I&rsquo;ll suggest a format
        that fits.
      </FinalCta>
    </>
  );
}
