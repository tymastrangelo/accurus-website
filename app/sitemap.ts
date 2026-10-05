import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // ponytail: /information-gap is a noindex campaign page, deliberately left out.
  const routes = nav.map((item) => (item.href === "/" ? "" : item.href));
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
