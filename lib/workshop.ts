/**
 * The workshop the /register page is currently taking registrations for.
 * For the next workshop, edit this file (dates, venue, capacity) and clear or
 * archive the Registrations sheet. Copy here is Doug's, verbatim.
 */
export const workshop = {
  kicker: "Complimentary Pilot Workshop",
  title: "Survey Research for Better Business Decisions",
  subtitle: "A Practical Guide to Designing, Conducting, and Using Surveys",
  dates: "February 16–17, 2027",
  time: "8:15 a.m. – 4:45 p.m. each day",
  venue: "The Conference Center at GTCC",
  address: ["7908 Leabourne Road", "Colfax, North Carolina 27235"],
  pdHours: "13.5 Professional Development Hours",
  /** Confirmed seats. Registrations beyond this go on the waiting list. */
  capacity: 19,
} as const;

export const workshopFullTitle = `${workshop.title}: ${workshop.subtitle}`;
