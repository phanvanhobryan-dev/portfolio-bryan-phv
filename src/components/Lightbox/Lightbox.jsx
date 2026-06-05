import { useState, useEffect } from "react";
import { C, FONT_BODY } from "../../constants/tokens";

export default function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowRight")  setCurrent(c => (c + 1) % images.length);
      if (e.key === "ArrowLeft")   setCurrent(c => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(11,13,26,0.96)",
        backdropFilter: "blur(20px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "fadeIn .25s ease both",
      }}
    >
      {/* Image courante */}
      <img
        src={images[current]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "88vw", maxHeight: "85vh",
          objectFit: "contain", borderRadius: 6,
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          animation: "fadeUp .3s ease both",
        }}
      />

      {/* Bouton fermer */}
      <button onClick={onClose} style={{
        position: "fixed", top: 24, right: 32,
        background: "transparent", border: "none",
        color: C.peach, fontSize: 28, lineHeight: 1,
        fontFamily: FONT_BODY, fontWeight: 300, opacity: 0.7, cursor: "pointer",
      }}>✕</button>

      {/* Navigation gauche / droite */}
      {images.length > 1 && <>
        <button
          onClick={(e) => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length); }}
          style={{
            position: "fixed", left: 24, top: "50%", transform: "translateY(-50%)",
            background: "rgba(26,31,56,0.7)", border: `1px solid ${C.border}`,
            borderRadius: 4, color: C.peach, fontSize: 20,
            width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(12px)", cursor: "pointer",
          }}
        >←</button>
        <button
          onClick={(e) => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length); }}
          style={{
            position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)",
            background: "rgba(26,31,56,0.7)", border: `1px solid ${C.border}`,
            borderRadius: 4, color: C.peach, fontSize: 20,
            width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(12px)", cursor: "pointer",
          }}
        >→</button>
      </>}

      {/* Pastilles + compteur */}
      <div style={{
        position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              style={{
                width: i === current ? 20 : 6, height: 6, borderRadius: 3,
                background: i === current ? C.gold : "rgba(251,190,180,.35)",
                border: "none", cursor: "pointer", transition: "all .2s ease",
              }}
            />
          ))}
        </div>
        <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(251,190,180,.5)", letterSpacing: 2 }}>
          {current + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
