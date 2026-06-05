import { useState, useEffect } from "react";
import { C, FONT_BODY } from "../../constants/tokens";

export default function Header({ page, navigate, isMobile }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { id: "home",        label: "Projets",     type: "anchor", anchor: "#projets" },
    { id: "profil",      label: "Profil",      type: "page" },
    { id: "competences", label: "Compétences", type: "page" },
    { id: "parcours",    label: "Parcours",    type: "page" },
  ];

  const handleClick = (e, l) => {
    e.preventDefault();
    setMenuOpen(false);
    if (l.type === "page") {
      navigate(l.id);
    } else {
      if (page === "home") {
        const el = document.querySelector(l.anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("home");
        setTimeout(() => {
          const el = document.querySelector(l.anchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  const isActive = (l) => l.id === page || (l.id === "home" && page === "home");

  return (
    <header style={{
      position: "fixed", zIndex: 500,
      top: scrolled ? 12 : 0,
      left: scrolled ? "50%" : 0,
      right: scrolled ? "auto" : 0,
      width: scrolled ? (isMobile ? "calc(100% - 32px)" : "min(920px,calc(100% - 64px))") : "100%",
      transform: scrolled ? "translateX(-50%)" : "none",
      borderRadius: scrolled ? 12 : 0,
      transition: "all .5s cubic-bezier(.4,0,.2,1)",
      background: scrolled ? "rgba(11,13,26,.82)" : "rgba(11,13,26,0)",
      backdropFilter: scrolled ? "blur(28px) saturate(1.8)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.8)" : "none",
      border: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,.5)" : "none",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: scrolled ? (isMobile ? "12px 18px" : "14px 24px") : (isMobile ? "18px 24px" : "22px 64px"),
        transition: "padding .5s ease",
      }}>
        {/* Logo */}
        <button onClick={() => navigate("home")} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, padding: 0 }}>
          <svg width="28" height="28" viewBox="0 0 32 32">
            <polygon points="16,3 28,10 28,22 16,29 4,22 4,10" fill="none" stroke={C.gold} strokeWidth="1.2" />
            <polygon points="16,9 24,13 24,21 16,25 8,21 8,13" fill={C.gold} opacity=".18" />
          </svg>
          {!isMobile && (
            <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.gold, letterSpacing: 2.5, fontWeight: 700, textTransform: "uppercase" }}>
              Bryan PHV
            </span>
          )}
        </button>

        {/* Nav desktop */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 2, alignItems: "center" }}>
            {links.map(l => (
              <a key={l.id} href="#" onClick={(e) => handleClick(e, l)} style={{
                fontFamily: FONT_BODY, fontSize: 11,
                fontWeight: isActive(l) ? 700 : 500,
                letterSpacing: 2, textTransform: "uppercase",
                color: isActive(l) ? C.gold : "rgba(251,190,180,.7)",
                padding: "8px 14px", borderRadius: 6,
                background: isActive(l) ? "rgba(212,165,116,.1)" : "transparent",
                border: `1px solid ${isActive(l) ? "rgba(212,165,116,.4)" : "transparent"}`,
                transition: "all .2s", position: "relative",
                display: "flex", alignItems: "center", gap: 5,
              }}>
                {l.label}
                {l.type === "page" && <span style={{ fontSize: 9, opacity: .5 }}>↗</span>}
                {isActive(l) && (
                  <span style={{ position: "absolute", bottom: 3, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: C.gold, boxShadow: `0 0 8px ${C.gold}` }} />
                )}
              </a>
            ))}
          </nav>
        )}

        {/* Burger mobile */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 6, padding: "8px 12px", cursor: "pointer", display: "flex", flexDirection: "column", gap: 4 }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 20, height: 1.5, background: C.gold, transition: "all .3s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4px,4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px,-4px)"
                      : "scaleX(0)"
                  : "none",
              }} />
            ))}
          </button>
        )}
      </div>

      {/* Menu mobile déroulant */}
      {isMobile && menuOpen && (
        <div style={{ padding: "12px 24px 20px", borderTop: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 2 }}>
          {links.map(l => (
            <a key={l.id} href="#" onClick={(e) => handleClick(e, l)} style={{
              fontFamily: FONT_BODY, fontSize: 13,
              fontWeight: isActive(l) ? 700 : 500,
              letterSpacing: 2, textTransform: "uppercase",
              color: isActive(l) ? C.gold : "rgba(251,190,180,.8)",
              padding: "12px 0", borderBottom: "1px solid rgba(212,165,116,.1)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span>{l.label}</span>
              <span style={{ color: C.gold, fontSize: 12 }}>
                {l.type === "page" ? "↗" : isActive(l) ? "→" : ""}
              </span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
