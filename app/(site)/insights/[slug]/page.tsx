import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/article-list";
import { FinalCta } from "@/components/final-cta";
import { allArticles, findArticle } from "@/lib/articles";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Doug signs his articles formally; the rest of the site uses site.founder ("Doug Cox").
const author = "Douglas Cox";

// Every article is prerendered; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = findArticle((await params).slug);
  if (!found) return {};
  const { article } = found;
  const url = `/insights/${article.slug}`;
  // Overriding openGraph drops the root opengraph-image (shallow merge), so name it again.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} · ${site.tagline}` };
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: url },
    // Shared links (LinkedIn especially) should preview the article, not the site default.
    openGraph: {
      type: "article",
      siteName: site.name,
      title: article.title,
      description: article.summary,
      url,
      locale: "en_US",
      authors: [author],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const found = findArticle((await params).slug);
  if (!found) notFound();
  const { article, category } = found;
  const { Body } = article;
  const related = category.articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <section className="page-hero">
        <div className="wrap reveal">
          <Link className="eyebrow" href={`/insights#${category.id}`}>
            Insights · {category.title}
          </Link>
          <h1 className="article-title">{article.title}</h1>
          <p className="lead">{article.summary}</p>
          <p className="byline">
            By {author} · {site.name}
          </p>
          <a className="btn btn-ghost article-pdf" href={`/articles/${article.slug}.pdf`} download>
            Download the PDF
          </a>
        </div>
      </section>

      {/* no .reveal here: a long body never reaches the observer's 16% visibility threshold */}
      <section className="article-section">
        <div className="wrap">
          <article className="article-body">
            <Body />
          </article>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="wrap">
          <div className="feature reveal">
            <div>
              <span className="label">About the author</span>
              <h2>{author}</h2>
            </div>
            <div className="body">
              <p>
                {author} is President of Accurus Research and has more than 40 years of experience
                in survey research. Today, he helps organizations strengthen their survey research
                capabilities, close critical information gaps, and turn reliable evidence into
                better business decisions.
              </p>
              <p>
                <Link className="text-link" href="/about">
                  More about Doug
                </Link>
              </p>
              <p className="fine">
                <Link href="/insights#ai-disclosure">Editorial and AI Disclosure</Link>
              </p>
            </div>
          </div>

          {related.length ? (
            <div className="feature reveal">
              <div>
                <span className="label">Keep reading</span>
                <h2>More on {category.title}</h2>
              </div>
              <ArticleList articles={related} />
            </div>
          ) : null}
        </div>
      </section>

      <FinalCta uid="article" />
    </>
  );
}
