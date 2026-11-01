import { workshop } from "./workshop";

/**
 * Registration storage is a Google Sheet Doug can open, edit, and export to
 * Excel. A small Apps Script bound to the sheet (scripts/registration-sheet.gs)
 * counts confirmed seats and appends rows under a lock, so the capacity decision
 * is made in one place. Env:
 *   REGISTRATION_SHEET_URL    the Apps Script web-app URL (…/exec)
 *   REGISTRATION_SHEET_TOKEN  shared secret, must match TOKEN in the script
 */

export type Participant = { name: string; email: string };
export type RegistrationStatus = "confirmed" | "waitlist";

function endpoint() {
  const url = process.env.REGISTRATION_SHEET_URL;
  const token = process.env.REGISTRATION_SHEET_TOKEN;
  if (!url || !token) throw new Error("REGISTRATION_SHEET_URL / REGISTRATION_SHEET_TOKEN not set");
  return { url, token };
}

/**
 * Confirmed seats taken so far, or null when the sheet can't be reached. On
 * null the page shows the registration form and lets the write decide.
 */
export async function seatsTaken(): Promise<number | null> {
  try {
    const { url, token } = endpoint();
    const res = await fetch(`${url}?token=${encodeURIComponent(token)}`, { cache: "no-store" });
    const data = (await res.json()) as { seats?: unknown };
    return typeof data.seats === "number" ? data.seats : null;
  } catch (err) {
    console.error("seatsTaken failed", err);
    return null;
  }
}

/** Appends one row per participant and returns whether they were confirmed or waitlisted. */
export async function addRegistration(
  organization: string,
  participants: Participant[],
): Promise<{ status: RegistrationStatus; seats: number }> {
  const { url, token } = endpoint();
  const res = await fetch(url, {
    method: "POST",
    // text/plain is what Apps Script reliably exposes as e.postData.contents.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ token, organization, participants, capacity: workshop.capacity }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`sheet responded ${res.status}`);
  const data = (await res.json()) as { status?: string; seats?: number; error?: string };
  if (data.status === "Confirmed") return { status: "confirmed", seats: data.seats ?? 0 };
  if (data.status === "Waiting list") return { status: "waitlist", seats: data.seats ?? 0 };
  throw new Error(`sheet error: ${data.error ?? JSON.stringify(data)}`);
}
