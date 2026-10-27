import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020817",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(59,130,246,0.25), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            color: "#f1f5f9",
            letterSpacing: "-2px",
          }}
        >
          <span>M. Nasif Hasan&nbsp;</span>
          <span style={{ color: "#3b82f6" }}>Noor</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "#3b82f6",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "#64748b",
          }}
        >
          React · Next.js · TypeScript · NestJS · PostgreSQL
        </div>
      </div>
    ),
    size,
  );
}
