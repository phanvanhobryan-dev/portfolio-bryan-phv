import { useRef } from "react";
import { C, FONT_BODY } from "../../constants/tokens";
import CarouselCard from "./CarouselCard";

export default function DragCarousel({ items, isMobile, navigate }) {
  const trackRef = useRef(null);
  const drag = useRef({ on: false, startX: 0, scrollStart: 0, vel: 0, lastX: 0 });
  const raf  = useRef(null);

  // ── Mode grille pour ≤ 3 items ─────────────────────────────────────────────
  if (items.length <= 3) {
    const cols = isMobile ? 1 : Math.min(items.length, 3);
    return (
      <div style={{
        padding: isMobile ? "0 16px" : "0 64px",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: isMobile ? 16 : 24,
        }}>
          {items.map((item, i) => (
            <CarouselCard key={item.id} item={item} index={i} isMobile={isMobile} navigate={navigate} isGrid />
          ))}
        </div>
      </div>
    );
  }

  // ── Mode carousel drag pour > 3 items ──────────────────────────────────────
  const down = (e) => {
    const x = e.touches?.[0]?.pageX ?? e.pageX;
    drag.current = { on: true, startX: x, scrollStart: trackRef.current.scrollLeft, vel: 0, lastX: x };
    trackRef.current.classList.add("dragging");
    cancelAnimationFrame(raf.current);
  };

  const move = (e) => {
    if (!drag.current.on) return;
    if (!e.touches) e.preventDefault();
    const x = e.touches?.[0]?.pageX ?? e.pageX;
    drag.current.vel = x - drag.current.lastX;
    drag.current.lastX = x;
    trackRef.current.scrollLeft = drag.current.scrollStart - (x - drag.current.startX);
  };

  const up = () => {
    if (!drag.current.on) return;
    drag.current.on = false;
    trackRef.current.classList.remove("dragging");
    const glide = () => {
      if (Math.abs(drag.current.vel) < 0.4) return;
      trackRef.current.scrollLeft -= drag.current.vel * 0.91;
      drag.current.vel *= 0.91;
      raf.current = requestAnimationFrame(glide);
    };
    raf.current = requestAnimationFrame(glide);
  };

  return (
    <div style={{ position: "relative" }}>
      {!isMobile && <>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 80, zIndex: 2, background: `linear-gradient(to right,${C.bg},transparent)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 80, zIndex: 2, background: `linear-gradient(to left,${C.bg},transparent)`, pointerEvents: "none" }} />
      </>}
      <div style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2, color: "rgba(212,165,116,.45)", textTransform: "uppercase", fontWeight: 600, zIndex: 3, whiteSpace: "nowrap" }}>
        ← glisse pour explorer →
      </div>
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseDown={down} onMouseMove={move} onMouseUp={up} onMouseLeave={up}
        onTouchStart={down} onTouchMove={move} onTouchEnd={up}
        style={{ paddingLeft: isMobile ? 16 : 64, paddingRight: isMobile ? 16 : 64 }}
      >
        {items.map((item, i) => <CarouselCard key={item.id} item={item} index={i} isMobile={isMobile} navigate={navigate} />)}
        <div style={{ minWidth: 4, flexShrink: 0 }} />
      </div>
    </div>
  );
}
