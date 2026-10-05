import Image from "next/image";

/**
 * The Accurus information-gap framework. Doug's graphic on wider screens; below
 * 640px its labels would shrink past legibility, so the same five steps render
 * as a plain list instead (see `.framework` in globals.css).
 */
const steps = [
  { title: "Business Problem", question: "What is happening?" },
  { title: "Information Gap", question: "What don’t we know?" },
  { title: "Survey", question: "What should we ask—and who should we ask?" },
  { title: "Reliable Evidence", question: "Can we trust the answer?" },
  { title: "Better Decision", question: "What should we do?" },
];

export function Framework() {
  return (
    <figure className="framework figure-frame reveal">
      <Image
        src="/framework.png"
        alt={steps.map((s) => `${s.title}: ${s.question}`).join(" → ")}
        width={1774}
        height={887}
        sizes="(max-width: 1160px) 100vw, 1112px"
      />
      <ol>
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="num">{i + 1}</span>
            <span>
              <b>{s.title}</b>
              {s.question}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
