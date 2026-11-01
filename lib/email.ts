import { site } from "./site";
import { workshop, workshopFullTitle } from "./workshop";
import type { Participant, RegistrationStatus } from "./registrations";

/**
 * Transactional email through Resend's REST API (no SDK needed). Env:
 *   RESEND_API_KEY     from resend.com; the sending domain must be verified there
 *   REGISTRATION_FROM  e.g. "Douglas Cox <workshop@accurusresearch.com>"
 * Replies go to Doug's real inbox via reply_to.
 */

type Mail = { to: string; subject: string; text: string; replyTo?: string };

async function send(mail: Mail) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.REGISTRATION_FROM;
  if (!key || !from) throw new Error("RESEND_API_KEY / REGISTRATION_FROM not set");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [mail.to],
      reply_to: mail.replyTo ?? site.email,
      subject: mail.subject,
      text: mail.text,
    }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}: ${await res.text()}`);
}

const signature = `Best regards,

Douglas Cox
President, Accurus Research
${site.phoneDisplay}
${site.email}`;

const firstName = (name: string) => name.trim().split(/\s+/)[0];

function confirmationText(p: Participant) {
  return `Dear ${firstName(p.name)},

Thank you for registering for the Accurus Research complimentary pilot workshop: ${workshopFullTitle}.

I'm pleased to confirm your place and look forward to seeing you there.

Workshop Details
Dates: ${workshop.dates}
Time: ${workshop.time}
Location: ${workshop.venue}
${workshop.address.join("\n")}
Professional Development: ${workshop.pdHours}

Lunch, morning and afternoon refreshments, and all workshop materials will be provided both days.

The workshop combines practical instruction with discussions and exercises designed to help you obtain reliable information for better business decisions. Your participation and feedback will be an important part of this complimentary pilot program.

Please add the workshop dates to your calendar. I'll be in touch with additional information as the workshop approaches.

If your plans change or you have any questions, please contact me by replying to this email.

I look forward to seeing you in February.

${signature}`;
}

function waitlistText(p: Participant) {
  return `Dear ${firstName(p.name)},

Thank you for your interest in the Accurus Research complimentary pilot workshop: ${workshopFullTitle} on ${workshop.dates}.

The workshop has reached its registration capacity, but your name has been added to our waiting list.

If a space becomes available, I will contact you by email to offer you the opportunity to attend. No further action is needed at this time.

I appreciate your interest and hope we'll have an opportunity to see you.

${signature}`;
}

export function sendParticipantEmail(p: Participant, status: RegistrationStatus) {
  return send(
    status === "confirmed"
      ? { to: p.email, subject: `Your registration is confirmed: ${workshop.title}`, text: confirmationText(p) }
      : { to: p.email, subject: `Waiting list: ${workshop.title}`, text: waitlistText(p) },
  );
}

export function sendOwnerNotice(
  organization: string,
  participants: Participant[],
  status: RegistrationStatus,
  seats: number,
) {
  const label = status === "confirmed" ? "Confirmed" : "Waiting list";
  const text = `New ${label.toLowerCase()} registration from the website.

Organization: ${organization}
${participants.map((p, i) => `Participant ${i + 1}: ${p.name} <${p.email}>`).join("\n")}
Status: ${label}
Confirmed seats: ${seats} of ${workshop.capacity}

${status === "confirmed" ? "Confirmation emails" : "Waiting-list acknowledgments"} were sent to each participant.${
    process.env.REGISTRATION_SHEET_VIEW_URL ? `\n\nRegistration list: ${process.env.REGISTRATION_SHEET_VIEW_URL}` : ""
  }`;
  return send({
    to: site.email,
    replyTo: participants[0].email,
    subject: `Workshop registration (${label}): ${organization}`,
    text,
  });
}
