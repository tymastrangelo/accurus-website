import Image from "next/image";
import { Arc } from "@/components/arc";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { PortraitFrame } from "@/components/portrait-frame";
import { ServiceCard } from "@/components/service-card";
import { Framework } from "@/components/framework";
import { FinalCta } from "@/components/final-cta";
import { WorkshopIcon, PeopleIcon, AdvisoryIcon, CheckIcon } from "@/components/icons";

const moments = [
  "A customer retention problem.",
  "An employee concern.",
  "A new service opportunity.",
  "A change in the marketplace.",
  "An important strategic decision.",
];

const capabilities = [
  "Recognize when a survey might help.",
  "Know how to define the question before writing the questionnaire.",
  "Understand who should be surveyed, what should be asked, how the survey should be administered and how the results should—and should not—be interpreted.",
  "Recognize when a survey may not be the right approach at all.",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <div className="hero-head">
              <Eyebrow className="reveal">Better Surveys. Better Decisions.</Eyebrow>
              <h1 className="reveal">
                Better Decisions Begin with Knowing What You{" "}
                <span className="kw">
                  Don&rsquo;t Know
                  <Arc variant="underline" uid="hero" />
                </span>
              </h1>
            </div>
            <div className="hero-body">
              <p className="lead reveal">
                Accurus Research helps organizations recognize critical information gaps and develop
                the internal survey research capability needed to close them with reliable evidence.
              </p>
              <div className="hero-cta reveal">
                <CTA href="/contact" variant="primary" withArrow>
                  Start a conversation
                </CTA>
                <CTA href="/workshop" variant="ghost">
                  Explore the workshop
                </CTA>
              </div>
              <div className="hero-meta reveal">
                <span>Executive Presentation</span>
                <span className="dot" aria-hidden="true" />
                <span>Two-Day Workshop</span>
                <span className="dot" aria-hidden="true" />
                <span>Advisory Services</span>
              </div>
            </div>
          </div>

          <PortraitFrame
            variant="hero"
            uid="hero"
            reveal
            photoSrc="/doug-cox-portrait.jpg"
            photoAlt="Douglas Cox, President of Accurus Research"
            role="President · Accurus Research"
          />
        </div>
      </section>

      {/* THE QUESTION */}
      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p className="statement">
                Organizations make important decisions every day. Some can be made confidently from
                experience, existing information and sound judgment. <em>Others cannot.</em>
              </p>
            </div>
            <div className="reveal">
              <p>
                Sometimes the most important question is not <b>&ldquo;What should we do?&rdquo;</b>{" "}
                It is:
              </p>
              <p className="pull">
                &ldquo;What don&rsquo;t we know that we need to know before we decide?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN WHAT YOU KNOW ISN'T ENOUGH */}
      <section className="reassure">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>The information gap</Eyebrow>
              <h2 className="h2">When What You Know Isn&rsquo;t Enough</h2>
              <div className="pitfalls">
                {moments.map((m) => (
                  <span key={m} className="chip">
                    {m}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: "1.4rem", maxWidth: "34rem" }}>
                Leaders frequently encounter situations in which something important is
                happening—but the information needed to fully understand it is incomplete.
              </p>
            </div>

            <div className="quotebox reveal">
              <Arc variant="quote" uid="home" />
              <p className="qt">
                Assumptions begin filling the gaps. Anecdotes become accepted as facts. The
                experiences of a few people begin representing the experiences of many. And
                decisions are made.
              </p>
              <p className="at">Sometimes those decisions work. Sometimes they don&rsquo;t.</p>
            </div>
          </div>
          <p className="statement closing reveal">
            The challenge is recognizing when{" "}
            <em>what you don&rsquo;t know matters enough to find out.</em>
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* FRAMEWORK */}
      <section>
        <div className="wrap">
          <SectionHeading eyebrow="The Accurus framework" title="From Business Problem to Better Decision" reveal>
            Accurus Research uses a straightforward framework.
          </SectionHeading>
          <Framework />
          <div className="intro-grid reveal">
            <p className="statement">Not every business problem requires a survey.</p>
            <p>
              But when important decisions depend on understanding what customers, employees,
              members or other stakeholders think, experience or need, a properly designed survey
              can provide evidence that assumptions and anecdotes cannot.
            </p>
          </div>
        </div>
      </section>

      {/* BUILD CAPABILITY */}
      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>Internal capability</Eyebrow>
              <h2 className="h2">Build Survey Capability Inside Your Organization</h2>
              <p style={{ marginTop: "1rem" }}>
                Most organizations don&rsquo;t need a full-time survey researcher. But there is
                considerable value in having one or two people who understand how good survey
                research works. People who:
              </p>
              <ul className="checklist">
                {capabilities.map((item) => (
                  <li key={item}>
                    <span className="tick">
                      <CheckIcon size={13} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1.4rem" }}>
                <b>Accurus Research helps organizations develop that capability.</b>
              </p>
            </div>
            <figure className="figure-frame cycle reveal">
              <Image
                src="/survey-success-cycle.png"
                alt="The 7-Step Survey Success Cycle: 1 Defining the Survey Purpose, 2 Sampling Approach, 3 Determining the Data Collection Method, 4 Questionnaire Design, 5 Survey Fieldwork, 6 Data Analysis, 7 Turning Data into Action."
                width={1254}
                height={1254}
                sizes="(max-width: 880px) 90vw, 520px"
              />
              <figcaption>The 7-Step Survey Success Cycle, taught in the two-day workshop.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* THREE WAYS */}
      <section id="services">
        <div className="wrap">
          <SectionHeading eyebrow="How it fits together" title="Three Ways to Work with Accurus Research" reveal>
            The executive presentation creates recognition. The workshop builds capability. Advisory
            services support that capability when it matters most.
          </SectionHeading>
          <div className="cards stagger">
            <ServiceCard
              icon={<WorkshopIcon size={26} />}
              title="Executive Presentation"
              kicker="Recognize the Information Gap"
              href="/executive-presentation"
              more="Learn about the executive presentation"
            >
              A 60–75 minute presentation for leaders and management teams exploring how
              information gaps develop, why seemingly credible survey data can be misleading, and
              how better evidence can lead to better decisions.
            </ServiceCard>
            <ServiceCard
              icon={<PeopleIcon size={26} />}
              title="Two-Day Workshop"
              kicker="Build Internal Survey Capability"
              href="/workshop"
              more="Explore the workshop"
            >
              An intensive, practical workshop that teaches participants how to move from a
              business question or information gap through the entire survey research process—and
              ultimately to evidence that can be used with confidence.
            </ServiceCard>
            <ServiceCard
              icon={<AdvisoryIcon size={26} />}
              title="Advisory Services"
              kicker="Get Experienced Guidance When It Matters"
              href="/advisory"
              more="Learn about advisory services"
            >
              When an important survey presents an unusual challenge, Accurus Research can provide
              experienced guidance to help your team think through methodology, questionnaire
              design, sampling, analysis or interpretation.
            </ServiceCard>
          </div>
        </div>
      </section>

      <FinalCta uid="home" heading="You Don’t Need to Become a Survey Researcher">
        You need to know enough to ask the right questions, avoid the mistakes that undermine survey
        results, and recognize whether the evidence in front of you deserves to be trusted. That is
        what Accurus Research teaches.
      </FinalCta>
    </>
  );
}
