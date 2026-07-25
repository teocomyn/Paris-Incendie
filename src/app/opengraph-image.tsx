import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Paris Incendie, Installation Sprinkler & RIA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #050505 0%, #1a0a00 50%, #050505 100%)",
          padding: 64,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(252,80,0,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#FC5000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            🛡
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: "#ffffff" }}>Paris Incendie</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#FC5000", letterSpacing: 4, textTransform: "uppercase" }}>
              Sprinkler · RIA · APSAD
            </span>
          </div>
        </div>
        <p style={{ fontSize: 48, fontWeight: 800, color: "#ffffff", lineHeight: 1.1, maxWidth: 900, margin: 0 }}>
          Installation & maintenance sprinkler et RIA
        </p>
        <p style={{ fontSize: 22, color: "#9a9a9a", marginTop: 16, maxWidth: 700 }}>
          Agréé APSAD · Île-de-France · Devis gratuit sous 24h
        </p>
      </div>
    ),
    { ...size }
  );
}
