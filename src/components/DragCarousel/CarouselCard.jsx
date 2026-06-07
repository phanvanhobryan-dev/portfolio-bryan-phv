import { useState } from "react";
import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import Tag from "../Tag/Tag";
import CornerOrnaments from "../CornerOrnaments/CornerOrnaments";

export default function CarouselCard({ item, index, isMobile, navigate, isGrid }) {
  const [hovered, setHovered] = useState(false);
  const isClickable = !!item.page && !!navigate;

  // Hauteur et largeur selon le mode
  const cardHeight = isGrid
    ? (isMobile ? 320 : 400)
    : (isMobile ? 300 : 340);

  const sizeStyle = isGrid
    ? { width: "100%", height: cardHeight }
    : { minWidth: isMobile ? 240 : 280, height: cardHeight, flexShrink: 0 };

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isClickable && navigate(item.page)}
      style={{
        ...sizeStyle,
        background: C.indigo,
        border: `1px solid ${hovered ? item.accent + "55" : "rgba(212,165,116,.15)"}`,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: isClickable ? "pointer" : "default",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,.5),0 0 24px ${item.accent}20`
          : "0 4px 16px rgba(0,0,0,.3)",
        transition: "all .3s cubic-bezier(.4,0,.2,1)",
        animation: `fadeUp .6s ${index * 80}ms ease both`,
      }}
    >
      {/* Image de fond — cover + centrage optimisé pour thumbnails 16:9 */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        filter: `brightness(${hovered ? .42 : .32}) saturate(.65)`,
        transition: "filter .35s ease",
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(26,31,56,.2) 0%, rgba(11,13,26,.92) 60%)",
      }} />

      {/* Glow hover */}
      {hovered && (
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 200, height: 200,
          background: `radial-gradient(circle,${item.accent}25 0%,transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}

      <CornerOrnaments color={item.accent} />

      {/* Contenu */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        height: "100%", padding: isGrid ? 24 : 20,
      }}>
        <div>
          <div style={{
            fontFamily: FONT_BODY, fontSize: 9, letterSpacing: 2.5,
            color: item.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 10,
          }}>
            {item.category} · {item.year}
          </div>
          <h3 style={{
            fontFamily: FONT_DISPLAY,
            fontSize: isGrid ? (isMobile ? 22 : 26) : 22,
            fontWeight: 400, color: C.peach, fontStyle: "italic", lineHeight: 1.15,
          }}>
            {item.title}
          </h3>
        </div>

        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
            {item.tags.map(t => <Tag key={t.label} label={t.label} cat={t.cat} />)}
          </div>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingTop: 14, borderTop: `1px solid ${item.accent}25`,
          }}>
            <span style={{
              fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2,
              color: isClickable ? item.accent : "rgba(251,190,180,.4)",
              textTransform: "uppercase", fontWeight: 600,
            }}>
              {isClickable ? "Voir le projet" : "Bientôt disponible"}
            </span>
            <span style={{
              color: item.accent, fontSize: 18,
              transform: hovered && isClickable ? "translateX(4px)" : "translateX(0)",
              transition: "transform .2s",
            }}>
              {isClickable ? "→" : "·"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
