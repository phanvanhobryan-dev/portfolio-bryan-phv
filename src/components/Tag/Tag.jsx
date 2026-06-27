import { C, FONT_BODY } from "../../constants/tokens";

export default function Tag({ label, cat }) {
  const cfg = {
    domain:  { color: C.peach,    icon: "◆" },
    tool:    { color: C.gold,     icon: "⬢" },
    context: { color: "#6B8E8A", icon: "▲" },
  }[cat] || { color: C.peach, icon: "◆" };

  return (
    <span style={{
      fontFamily: FONT_BODY, fontSize: 11, padding: "5px 11px",
      background: `${cfg.color}12`, border: `0.5px solid ${cfg.color}55`,
      borderRadius: 2, color: cfg.color, letterSpacing: 1.5,
      textTransform: "uppercase", fontWeight: 700,
      display: "inline-flex", alignItems: "center", gap: 5, whiteSpace: "nowrap",
    }}>
      <span style={{ fontSize: 7 }}>{cfg.icon}</span>{label}
    </span>
  );
}
