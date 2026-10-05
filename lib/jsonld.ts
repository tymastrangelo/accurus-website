import { site } from "./site";

/**
 * Schema.org structured data - ProfessionalService with the founder as a
 * Person. Only real, given facts: name, contact details, sectors, service type.
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/opengraph-image`,
  slogan: site.tagline,
  description: site.description,
  areaServed: "United States",
  knowsAbout: [
    "Survey research",
    "Questionnaire design",
    "Sampling",
    "Survey methodology",
    "Data interpretation",
  ],
  serviceType: ["Executive presentation", "Survey research workshop", "Survey advisory services"],
  founder: {
    "@type": "Person",
    name: site.founder,
    jobTitle: "President",
    description:
      "Survey research professional with a 40-year career serving business, political, government, and nonprofit clients.",
    sameAs: [site.linkedin],
  },
};
