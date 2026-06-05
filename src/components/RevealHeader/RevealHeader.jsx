import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";

export default function RevealHeader({ label, title, sub, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? 28 : 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <div style={{ height: 1, width: 28, background: C.gold, opacity: .6 }} />
        <span style={{
          fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 3,
          color: C.gold, textTransform: "uppercase", fontWeight: 700,
        }}>
          {label}
        </span>
      </div>
      <h2 style={{
        fontFamily: FONT_DISPLAY,
        fontSize: isMobile ? "clamp(30px,8vw,46px)" : "clamp(36px,5vw,64px)",
        fontWeight: 400, color: C.peach, lineHeight: 1, letterSpacing: "-0.02em",
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{
          fontFamily: FONT_BODY, fontSize: 12, color: "rgba(251,190,180,.5)",
          letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, marginTop: 8,
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}
