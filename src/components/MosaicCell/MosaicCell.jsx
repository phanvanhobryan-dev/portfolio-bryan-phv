import { useState } from "react";
import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import Tag from "../Tag/Tag";
import CornerOrnaments from "../CornerOrnaments/CornerOrnaments";

export default function MosaicCell({ project: p, delay, isMobile, navigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mosaic-cell"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isMobile ? setHovered(h => !h) : navigate && navigate(`projet-${p.id}`)}
      style={{
        border: `1px solid ${hovered ? p.accent + "55" : "rgba(212,165,116,.12)"}`,
        boxShadow: hovered ? `0 0 48px ${p.accent}18` : "none",
        transition: "border-color .4s, box-shadow .4s",
        animation: `fadeUp .7s ${delay}ms ease both`,
      }}
    >
      <div className="cell-image" style={{ backgroundImage: `url(${p.image})` }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: `linear-gradient(135deg,${p.accent}15 0%,rgba(11,13,26,.3) 100%)`, transition: "opacity .4s", opacity: hovered ? 0 : 1 }} />
      <div className="mosaic-scanline" />
      <div className="glitch-layer glitch-layer-1" style={{ backgroundImage: `url(${p.image})` }} />
      <div className="glitch-layer glitch-layer-2" style={{ backgroundImage: `url(${p.image})` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "70%", background: "linear-gradient(transparent,rgba(11,13,26,.95))", zIndex: 2 }} />

      {/* Contenu repos */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(18px,3vw,28px)" }}>
        <div className="mosaic-bottom-default">
          <div style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2.5, color: p.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>{p.category} · {p.year}</div>
          <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(22px,3vw,30px)", fontWeight: 400, color: C.peach, fontStyle: "italic", lineHeight: 1.1 }}>{p.title}</h3>
        </div>
      </div>

      {/* Contenu hover */}
      <div className="mosaic-hover-content">
        <div style={{ position: "relative", zIndex: 5 }}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2.5, color: p.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>{p.category} · {p.year}</div>
          <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(22px,3vw,30px)", fontWeight: 400, color: C.peach, fontStyle: "italic", lineHeight: 1.1, marginBottom: 10 }}>{p.title}</h3>
          <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "rgba(251,190,180,.8)", lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 18 }}>
            {p.tags.map(t => <Tag key={t.label} label={t.label} cat={t.cat} />)}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); navigate && navigate(`projet-${p.id}`); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, color: p.accent, borderBottom: `1px solid ${p.accent}50`, paddingBottom: 2, background: "transparent", border: "none", cursor: "pointer" }}
          >
            Voir le projet <span style={{ animation: "arrowBounce 1.5s ease infinite" }}>→</span>
          </button>
        </div>
      </div>

      <CornerOrnaments color={p.accent} />
    </div>
  );
}
