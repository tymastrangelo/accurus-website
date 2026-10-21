import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { ArticleList } from "@/components/article-list";
import { ArrowRightIcon } from "@/components/icons";
import { FinalCta } from "@/components/final-cta";
import { aiDisclosure, categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical insights from more than 40 years of survey research experience: understanding the business problem, designing better surveys, recognizing bad data and turning reliable evidence into better decisions.",
  alternates: { canonical: "/insights" },
};

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
            Explore practical insights from more than 40 years of survey research
            experience&mdash;helping organizations ask better questions, recognize unreliable
            information, and make better-informed business decisions.
          </SectionHeading>
          <div className="cards two stagger">
            {categories.map((c) => {
              const featured = c.articles[0];
              return (
                <article key={c.id} className="card topic-card">
                  <span className="topbar" aria-hidden="true" />
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <div className="featured">
                    <span className="k">Featured article</span>
                    <Link href={`/insights/${featured.slug}`}>
                      {featured.title}
                      <span className="arr" aria-hidden="true">
                        <ArrowRightIcon size={17} />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="wrap">
          <SectionHeading eyebrow="All articles" title="Explore the Articles" reveal />
          <div className="article-groups">
            {categories.map((c) => (
              <div key={c.id} id={c.id} className="feature anchor reveal">
                <div>
                  <span className="label">{c.articles.length} articles</span>
                  <h3>{c.title}</h3>
                </div>
                <ArticleList articles={c.articles} />
              </div>
            ))}
          </div>
          {/* every article's "Editorial and AI Disclosure" link lands here */}
          <div id="ai-disclosure" className="note-card disclosure anchor reveal">
            <h3>Editorial and AI Disclosure</h3>
            <p className="fine">{aiDisclosure}</p>
          </div>
        </div>
      </section>

      <FinalCta uid="insights" />
    </>
  );
}
