import { Arc } from "@/components/arc";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { PortraitFrame } from "@/components/portrait-frame";
import { ServiceCard } from "@/components/service-card";
import {
  WorkshopIcon,
  CustomizeIcon,
  AdvisoryIcon,
  CheckIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <Eyebrow className="reveal">Survey research training &amp; advisory</Eyebrow>
            <h1 className="reveal">
              <span className="ln">Better Surveys.</span>
              <span className="ln">
                Better{" "}
                <span className="kw">
                  Decisions.
                  <Arc variant="underline" uid="hero" />
                </span>
              </span>
            </h1>
            <p className="lead reveal">
              I help organizations improve the quality of their surveys so they can make better
              decisions with confidence, drawing on more than 40 years of survey research for
              business, political, government, and nonprofit clients.
            </p>
            <div className="hero-cta reveal">
              <CTA href="/contact" variant="primary" withArrow>
                Start a conversation
              </CTA>
              <CTA href="/services" variant="ghost">
                Explore the workshop
              </CTA>
            </div>
            <div className="hero-meta reveal">
              <span>Workshops</span>
              <span className="dot" aria-hidden="true" />
              <span>Customized programs</span>
              <span className="dot" aria-hidden="true" />
              <span>Advisory support</span>
            </div>
          </div>

          <PortraitFrame
            variant="hero"
            uid="hero"
            reveal
            photoSrc="/doug-cox-headshot.jpg"
            photoAlt="Doug Cox, founder of Accurus Research"
          />
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>Why it matters</Eyebrow>
              <p className="statement" style={{ marginTop: "1rem" }}>
                Surveys guide important decisions, yet many fall short because the{" "}
                <em>fundamentals</em>
                {" aren’t handled well."}
              </p>
              <div className="pitfalls">
                <span className="chip">Unclear objectives</span>
                <span className="chip">Weak sampling</span>
                <span className="chip">Biased questions</span>
              </div>
            </div>
            <div className="reveal">
              <p>
                I help organizations strengthen every stage of the survey process: defining the
                objective, choosing the right method, building a sound sample, writing solid
                questions, and turning findings into action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section id="services">
        <div className="wrap">
          <SectionHeading
            eyebrow="How I help"
            title="Practical training and guidance, built around your team"
            reveal
          >
            Designed for decision makers and the people who use surveys to understand customers,
            employees, stakeholders, and members.
          </SectionHeading>
          <div className="cards stagger">
            <ServiceCard
              icon={<WorkshopIcon size={26} />}
              title="Two-Day Workshops"
              href="/services#workshop"
              more="Inside the workshop"
            >
              Hands-on training that teaches your team to design, conduct, and interpret surveys,
              including a focused section on online surveys.
            </ServiceCard>
            <ServiceCard
              icon={<CustomizeIcon size={26} />}
              title="Customized Programs"
              href="/services#customized"
              more="See tailoring options"
            >
              Prefer in-house training? Workshop content is tailored to your industry and the people
              you actually need to survey.
            </ServiceCard>
            <ServiceCard
              icon={<AdvisoryIcon size={26} />}
              title="Advisory Support"
              href="/services#advisory"
              more="How advisory works"
            >
              Expert input on a survey you&rsquo;re planning or already running: questionnaire
              review, sampling advice, and interpretation, one-time or ongoing.
            </ServiceCard>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* WHO IT'S FOR */}
      <section className="reassure">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <Eyebrow>Who it&rsquo;s for</Eyebrow>
              <h2
                style={{
                  marginTop: ".9rem",
                  fontSize: "clamp(1.95rem, 1.5rem + 1.8vw, 2.85rem)",
                }}
              >
                You don&rsquo;t need a statistician
              </h2>
              <p style={{ marginTop: "1rem", maxWidth: "34rem" }}>
                My approach isn&rsquo;t academic, statistics-driven, or overly technical. It&rsquo;s
                practical training grounded in real-world experience, built for leaders at growing
                small and mid-sized organizations and nonprofits.
              </p>
              <div className="gains">
                <div className="gain">
                  <span className="tick">
                    <CheckIcon size={14} />
                  </span>
                  <div>
                    <b>Sound judgment</b> about what to ask and what to avoid.
                  </div>
                </div>
                <div className="gain">
                  <span className="tick">
                    <CheckIcon size={14} />
                  </span>
                  <div>
                    <b>Fewer pitfalls</b>, sidestepping the errors that quietly ruin results.
                  </div>
                </div>
                <div className="gain">
                  <span className="tick">
                    <CheckIcon size={14} />
                  </span>
                  <div>
                    <b>Confidence</b> in the data you bring to the table.
                  </div>
                </div>
              </div>
            </div>

            <div className="quotebox reveal">
              <Arc variant="quote" uid="home" />
              <p className="qt">
                &ldquo;Surveys have value only when they&rsquo;re designed and interpreted properly.
                My job is to close that gap for your team.&rdquo;
              </p>
              <p className="at">Doug Cox, Accurus Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="about-teaser">
        <div className="wrap">
          <div className="grid">
            <PortraitFrame variant="mini" reveal photoSrc="/doug-cox-headshot.jpg" photoAlt="Doug Cox" />
            <div className="reveal">
              <Eyebrow>About Doug</Eyebrow>
              <h2
                style={{
                  marginTop: ".9rem",
                  fontSize: "clamp(1.85rem, 1.4rem + 1.7vw, 2.6rem)",
                }}
              >
                Four decades of survey research, now in your corner
              </h2>
              <p style={{ marginTop: "1rem" }}>
                After a four-decade career designing and leading survey research for business,
                political, government, and nonprofit clients, Doug now brings that experience
                directly to decision makers, helping teams run surveys effectively and use the
                results to drive action.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <div className="n">40+</div>
                  <div className="l">Years in survey research</div>
                </div>
                <div className="stat">
                  <div className="n">4</div>
                  <div className="l">Sectors served</div>
                </div>
                <div className="stat">
                  <div className="n">2-day</div>
                  <div className="l">Core workshop format</div>
                </div>
              </div>
              <div style={{ marginTop: "1.8rem" }}>
                <CTA href="/about" variant="ghost" withArrow>
                  More about Doug
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <Arc variant="final" uid="home" />
        <div className="wrap">
          <h2 className="reveal">
            Let&rsquo;s talk about how better survey design leads to better decisions
          </h2>
          <p className="reveal">
            Whether you&rsquo;re considering a workshop for your team or want expert eyes on a survey
            already in motion, I&rsquo;d be glad to talk it through.
          </p>
          <div className="btn-row reveal">
            <CTA href={`mailto:${site.email}`} variant="light" withArrow>
              Start a conversation
            </CTA>
            <CTA href="/contact" variant="outline">
              See all the ways to reach me
            </CTA>
          </div>
          <div className="contacts reveal">
            <span>
              Email <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
            <span>
              Phone <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </span>
            <span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
