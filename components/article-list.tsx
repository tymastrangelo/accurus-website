import Link from "next/link";
import type { Article } from "@/lib/articles";

/** Linked article titles, each with Doug's summary underneath. */
export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <ul className="article-list">
      {articles.map((a) => (
        <li key={a.slug}>
          <Link href={`/insights/${a.slug}`}>{a.title}</Link>
          <p>{a.summary}</p>
        </li>
      ))}
    </ul>
  );
}
