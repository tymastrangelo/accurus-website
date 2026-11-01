"use server";

import { addRegistration, type Participant } from "@/lib/registrations";
import { sendOwnerNotice, sendParticipantEmail } from "@/lib/email";

export type FormState = {
  status: "idle" | "confirmed" | "waitlist" | "error";
  errors?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim().slice(0, 200) : "");

export async function register(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real users never see this field. Bots get a quiet "success".
  if (str(formData.get("website"))) return { status: "confirmed" };

  const organization = str(formData.get("organization"));
  const p1: Participant = { name: str(formData.get("name1")), email: str(formData.get("email1")) };
  const p2: Participant = { name: str(formData.get("name2")), email: str(formData.get("email2")) };

  const errors: Record<string, string> = {};
  if (!organization) errors.organization = "Please enter your organization's name.";
  if (!p1.name) errors.name1 = "Please enter the participant's name.";
  if (!EMAIL.test(p1.email)) errors.email1 = "Please enter a valid email address.";
  if (p2.name || p2.email) {
    if (!p2.name) errors.name2 = "Please enter the second participant's name.";
    if (!EMAIL.test(p2.email)) errors.email2 = "Please enter a valid email address.";
  }
  if (Object.keys(errors).length) return { status: "idle", errors };

  const participants = p2.name ? [p1, p2] : [p1];

  let result;
  try {
    result = await addRegistration(organization, participants);
  } catch (err) {
    console.error("registration failed", err);
    return { status: "error" };
  }

  // The seat is recorded; an email failure shouldn't turn success into an error.
  const sent = await Promise.allSettled([
    ...participants.map((p) => sendParticipantEmail(p, result.status)),
    sendOwnerNotice(organization, participants, result.status, result.seats),
  ]);
  for (const s of sent) if (s.status === "rejected") console.error("registration email failed", s.reason);

  return { status: result.status };
}
