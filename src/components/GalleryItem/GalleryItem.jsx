// Affiche une image, une vidéo locale (mp4/webm) ou un embed YouTube/Vimeo
export default function GalleryItem({ src, index, isFirst, isVid, isEmb, accent, onLightbox }) {

  // ── Vidéo locale ─────────────────────────────────────────────────────────
  if (isVid) {
    return (
      <div style={{
        width: "100%", borderRadius: 6, overflow: "hidden",
        border: "1px solid rgba(212,165,116,0.15)", background: "#000",
      }}>
        <div style={{
          fontFamily: "'Manrope',sans-serif", fontSize: 9, letterSpacing: 2,
          color: "rgba(212,165,116,0.6)", textTransform: "uppercase",
          fontWeight: 700, padding: "8px 12px",
        }}>▶ Vidéo</div>
        <video src={src} controls style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    );
  }

  // ── Embed YouTube / Vimeo ─────────────────────────────────────────────────
  if (isEmb) {
    return (
      <div style={{
        width: "100%", borderRadius: 6, overflow: "hidden",
        border: "1px solid rgba(212,165,116,0.15)", background: "#000", position: "relative",
      }}>
        <div style={{
          fontFamily: "'Manrope',sans-serif", fontSize: 9, letterSpacing: 2,
          color: "rgba(212,165,116,0.6)", textTransform: "uppercase",
          fontWeight: 700, padding: "8px 12px",
        }}>▶ Vidéo</div>
        <iframe
          src={src}
          style={{ width: "100%", aspectRatio: "16/9", border: "none", display: "block" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen loading="lazy" title={`video-${index}`}
        />
      </div>
    );
  }

  // ── Image ─────────────────────────────────────────────────────────────────
  return (
    <div
      onClick={onLightbox}
      style={{
        width: "100%", borderRadius: 6, overflow: "hidden",
        border: "1px solid rgba(212,165,116,0.15)",
        cursor: "zoom-in", position: "relative",
        background: "rgba(11,13,26,0.6)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <img
        src={src} alt="" loading="lazy"
        style={{ width: "100%", height: "auto", objectFit: "contain", display: "block", transition: "transform .4s ease, filter .4s ease" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.filter = "brightness(1.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)";    e.currentTarget.style.filter = "brightness(1)"; }}
      />
      {/* Icône zoom */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: 0, transition: "opacity .25s",
        background: "rgba(11,13,26,0.25)", pointerEvents: "none",
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = 1}
        onMouseLeave={e => e.currentTarget.style.opacity = 0}
      >
        <div style={{
          width: isFirst ? 48 : 40, height: isFirst ? 48 : 40,
          borderRadius: "50%", background: "rgba(11,13,26,0.75)",
          backdropFilter: "blur(10px)", border: `1px solid ${accent}70`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: isFirst ? 20 : 16, color: accent,
        }}>⊕</div>
      </div>
    </div>
  );
}
