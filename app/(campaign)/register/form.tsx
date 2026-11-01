"use client";

import { useActionState } from "react";
import { register, type FormState } from "./actions";

export type Mode = "register" | "waitlist";

// Doug's on-screen messages, verbatim.
const messages = {
  confirmed:
    "You're registered! Your place in the Accurus Research pilot workshop is confirmed. A confirmation email will be sent shortly.",
  waitlist: "You're on the waiting list. We'll contact you by email if space becomes available.",
  error:
    "We couldn't complete your registration. Please try again or contact Accurus Research. No place has been confirmed.",
};

function Field({
  id,
  label,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required ? null : <span className="opt"> (optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
      />
      {error ? (
        <span className="err" id={`${id}-err`}>
          {error}
        </span>
      ) : null}
    </div>
  );
}

export function RegistrationForm({ mode }: { mode: Mode }) {
  const [state, action, pending] = useActionState<FormState, FormData>(register, { status: "idle" });

  if (state.status !== "idle") {
    return (
      <div className={`reg-result${state.status === "error" ? " error" : ""}`} role="status" aria-live="polite">
        <p>{messages[state.status]}</p>
        {state.status === "error" ? (
          <p>
            <button type="button" className="btn btn-ghost" onClick={() => location.reload()}>
              Try again
            </button>
          </p>
        ) : null}
      </div>
    );
  }

  const e = state.errors ?? {};
  return (
    <form action={action} className="reg-form">
      <fieldset>
        <legend>Organization</legend>
        <Field id="organization" label="Organization name" required error={e.organization} autoComplete="organization" />
      </fieldset>
      <fieldset>
        <legend>Participant 1</legend>
        <Field id="name1" label="Name" required error={e.name1} autoComplete="name" />
        <Field id="email1" label="Email address" type="email" required error={e.email1} autoComplete="email" />
      </fieldset>
      <fieldset>
        <legend>Participant 2</legend>
        <Field id="name2" label="Name" error={e.name2} />
        <Field id="email2" label="Email address" type="email" error={e.email2} />
      </fieldset>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="reg-note">
        Email addresses will be used only for communications related to this workshop, not for marketing purposes.
      </p>
      <div>
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Submitting…" : mode === "register" ? "Register for Workshop" : "Join Waiting List"}
        </button>
      </div>
      <p className="reg-note">
        {mode === "register"
          ? "A confirmation will be sent to each registered participant by email."
          : "Joining the waiting list does not guarantee a place in the workshop. We will contact you by email if an opening becomes available."}
      </p>
    </form>
  );
}
