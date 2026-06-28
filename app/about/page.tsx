import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PortraitFrame } from "@/components/portrait-frame";
import { FinalCta } from "@/components/final-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Doug Cox brings more than 40 years of survey research for business, political, government, and nonprofit clients to decision makers at growing organizations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="page-hero has-portrait">
        <div className="wrap">
          <div className="reveal">
            <Eyebrow>About Doug</Eyebrow>
            <h1>Four decades of survey research, in your corner</h1>
            <p className="lead">
              After a four-decade career designing and leading survey research for a wide range of
              clients, I now bring that experience to decision makers at growing small and mid-sized
              organizations, helping them run surveys effectively and use the results to drive
              action.
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
          </div>
          <PortraitFrame
            variant="hero"
            uid="about"
            reveal
            photoSrc="/doug-cox-workshop.jpg"
            photoAlt="Doug Cox leading a two-day survey research workshop"
            aspectRatio="5 / 4"
            role="Leading a survey research workshop"
          />
        </div>
      </section>

      {/* BELIEF + APPROACH */}
      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">A simple belief</span>
              <h2>Surveys earn their value through care</h2>
            </div>
            <div className="body">
              <p>
                My work rests on a simple belief: surveys have value only when they&rsquo;re
                designed and interpreted properly. Many organizations recognize the need for better
                information but lack the in-house expertise to design sound surveys, interpret
                findings, and build dependable follow-up.
              </p>
              <p>My program is built to close that gap.</p>
            </div>
          </div>

          <div className="feature reveal">
            <div>
              <span className="label">My approach</span>
              <h2>Practical, not academic</h2>
            </div>
            <div className="body">
              <p>
                This training has not been designed for academicians, statisticians, or as a
                certification program. Instead, it involves the practical application of sound
                research methods based on 40-plus years of real-world experience leading survey
                research projects.
              </p>
              <p>
                I help clients sidestep common problems and focus on what they need to know: setting
                clear objectives, building sound samples, writing better questions, and interpreting
                findings with discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE + CREDENTIALS */}
      <section className="intro">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <p className="statement">
                Whether I&rsquo;m leading a workshop or advising on a project, my goal is the same:
                help your team strengthen its survey practices and get <em>more value</em> from the
                information it collects.
              </p>
            </div>
            <div className="reveal">
              <div className="note-card">
                <h3>More about Doug</h3>
                <p>
                  Doug&rsquo;s career spans four decades across the business, political, government,
                  and nonprofit sectors. Connect on LinkedIn to learn more.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--blue-ink)", fontWeight: 700 }}
                  >
                    View Doug&rsquo;s LinkedIn profile →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta uid="about" />
    </>
  );
}
