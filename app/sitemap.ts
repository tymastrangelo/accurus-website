import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";
import { allArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  // ponytail: /information-gap is a noindex campaign page, deliberately left out.
  const routes = nav.map((item) => (item.href === "/" ? "" : item.href));
  const pages = routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const articles = allArticles.map((a) => ({
    url: `${site.url}/insights/${a.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
