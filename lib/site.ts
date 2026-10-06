/**
 * Single source of truth for site-wide constants: contact details, nav,
 * and canonical URL. Real data only - nothing invented.
 */

export const site = {
  name: "Accurus Research",
  founder: "Doug Cox",
  tagline: "Better Surveys. Better Decisions.",
  description:
    "Accurus Research helps organizations recognize critical information gaps and build the internal survey capability to close them with reliable evidence: an executive presentation, a two-day workshop, and advisory support.",
  url: "https://accurusresearch.com",
  email: "dougcox@accurusresearch.com",
  // E.164 for tel: links; display version kept separate so punctuation stays human.
  phone: "+13362606451",
  phoneDisplay: "336.260.6451",
  linkedin: "https://linkedin.com/in/douglascox1",
  hihello: "https://hihello.com/p/03b0aa2e-fcb9-491d-bd83-cc0f379ede7b",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/executive-presentation", label: "Executive Presentation" },
  { href: "/workshop", label: "Workshop" },
  { href: "/advisory", label: "Advisory Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
