import { ImageResponse } from "next/og";
import { markDataUri } from "@/lib/mark-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon: the mark on a brand-navy field (iOS rounds the corners).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B2A4A",
        }}
      >
        <img width={120} height={120} src={markDataUri(120)} alt="" />
      </div>
    ),
    size,
  );
}
