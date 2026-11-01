import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { seatsTaken } from "@/lib/registrations";
import { workshop, workshopFullTitle } from "@/lib/workshop";
import { RegistrationForm } from "./form";

// Reached from the QR code / printed URL in Doug's mailing. Unlisted: not in
// nav or the sitemap, and noindex. Rendered per request so the seat count is live.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Workshop Registration",
  description: `Register for the Accurus Research complimentary pilot workshop: ${workshopFullTitle}.`,
  alternates: { canonical: "/register" },
  robots: { index: false, follow: false },
};

export default async function RegisterPage() {
  const seats = await seatsTaken();
  const full = seats !== null && seats >= workshop.capacity;

  return (
    <>
      <section className="page-hero register-hero">
        <div className="wrap">
          <div>
            <Eyebrow>{workshop.kicker}</Eyebrow>
            <h1>
              {workshop.title}: <em>{workshop.subtitle}</em>
            </h1>
            {full ? (
              <>
                <p className="lead">
                  Thank you for your interest in the Accurus Research pilot workshop. Registration for the pilot
                  workshop has reached capacity. However, cancellations may create additional openings.
                </p>
                <p className="lead">
                  If you would like to be notified should space become available, please complete the information
                  below to join our waiting list.
                </p>
              </>
            ) : (
              <>
                <p className="lead">
                  Thank you for your interest in the Accurus Research pilot workshop. This complimentary two-day
                  program is designed to help professionals develop practical skills for obtaining reliable
                  information to support better business decisions.
                </p>
                <p>
                  Lunch, morning and afternoon refreshments, and all workshop materials will be provided both days.
                </p>
                <p>
                  Participants are asked to attend both days, participate actively in discussions and exercises, and
                  provide candid feedback about their experience.
                </p>
                <p>
                  <b>Please complete the information below to register one or two participants from your
                  organization.</b>{" "}
                  To maintain an interactive learning environment, registration is limited, with places confirmed in
                  the order received.
                </p>
              </>
            )}
          </div>
          <dl className="event-card">
            <dt>Dates</dt>
            <dd>{workshop.dates}</dd>
            <dt>Time</dt>
            <dd>{workshop.time}</dd>
            <dt>Location</dt>
            <dd>
              {workshop.venue}
              <br />
              {workshop.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </dd>
            <dt>Cost</dt>
            <dd>Complimentary</dd>
          </dl>
        </div>
      </section>

      <section className="register-body">
        <div className="wrap">
          <RegistrationForm mode={full ? "waitlist" : "register"} />
        </div>
      </section>
    </>
  );
}
