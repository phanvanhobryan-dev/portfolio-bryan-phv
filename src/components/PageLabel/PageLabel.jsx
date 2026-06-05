import { C, FONT_BODY } from "../../constants/tokens";

export default function PageLabel({ label, num }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{
        fontFamily: FONT_BODY, fontSize: 11, color: C.gold, letterSpacing: 2,
        textTransform: "uppercase", fontWeight: 700,
        padding: "4px 10px",
        background: "rgba(212,165,116,.1)",
        border: `1px solid ${C.gold}`, borderRadius: 4,
      }}>
        {num}
      </span>
      <span style={{
        fontFamily: FONT_BODY, fontSize: 11, color: "rgba(212,165,116,.7)",
        letterSpacing: 3, textTransform: "uppercase", fontWeight: 600,
      }}>
        {label}
      </span>
    </div>
  );
}
