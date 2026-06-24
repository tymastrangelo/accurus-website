import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { markDataUri } from "@/lib/mark-svg";
import { site } from "@/lib/site";

export const alt = "Accurus Research · Better Surveys. Better Decisions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Decorative ember→gold arc, bottom-left, echoing the on-site motif.
const arc = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="420" viewBox="0 0 500 300" fill="none"><defs><linearGradient id="f" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#E0531F"/><stop offset="1" stop-color="#F2A01E"/></linearGradient></defs><path d="M0 260 C 160 130, 360 110, 520 170" stroke="url(#f)" stroke-width="30" stroke-linecap="round"/></svg>`,
).toString("base64")}`;

export default async function OpengraphImage() {
  const [fraunces, hanken] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Fraunces-600.woff")),
    readFile(join(process.cwd(), "public/fonts/HankenGrotesk-700.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 80px",
          background: "linear-gradient(135deg, #1B2A4A 0%, #15223C 100%)",
          color: "#ffffff",
          fontFamily: "Fraunces",
          position: "relative",
        }}
      >
        <img
          src={arc}
          width={700}
          height={420}
          alt=""
          style={{ position: "absolute", left: -40, bottom: -120, opacity: 0.8 }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img width={76} height={76} src={markDataUri(76)} alt="" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 34, letterSpacing: 6, color: "#fff" }}>ACCURUS</span>
            <span
              style={{
                fontSize: 19,
                letterSpacing: 9,
                color: "#ED7A14",
                fontFamily: "Hanken",
                marginTop: 6,
              }}
            >
              RESEARCH
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 88, lineHeight: 1.02, color: "#fff" }}>Better Surveys.</span>
          <span style={{ fontSize: 88, lineHeight: 1.05, color: "#fff" }}>Better Decisions.</span>
        </div>

        <span style={{ fontSize: 24, color: "#aebbd4", fontFamily: "Hanken", letterSpacing: 1 }}>
          Survey research training &amp; advisory · {site.url.replace("https://", "")}
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Hanken", data: hanken, weight: 700, style: "normal" },
      ],
    },
  );
}
