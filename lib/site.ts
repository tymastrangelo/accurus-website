/**
 * Single source of truth for site-wide constants: contact details, nav,
 * and canonical URL. Real data only - nothing invented.
 */

export const site = {
  name: "Accurus Research",
  founder: "Doug Cox",
  tagline: "Better Surveys. Better Decisions.",
  description:
    "Practical survey research training and advisory for small and mid-sized organizations. Two-day workshops and expert guidance from a 40-year survey professional.",
  url: "https://accurusresearch.com",
  email: "dougcox@accurusresearch.com",
  // E.164 for tel: links; display version kept separate so punctuation stays human.
  phone: "+13362600012",
  phoneDisplay: "336.260.0012",
  linkedin: "https://linkedin.com/in/douglascox1",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
