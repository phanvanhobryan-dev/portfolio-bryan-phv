import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import PageLabel from "../../components/PageLabel/PageLabel";
import CornerOrnaments from "../../components/CornerOrnaments/CornerOrnaments";
import { PROFIL } from "./profilContent";

export default function PageProfil({ isMobile, isTablet, navigate }) {

  const contactItems = [
    { icon: "◉", label: "Numéros",   value: PROFIL.phone },
    { icon: "◆", label: "Email",     value: PROFIL.email,     href: `mailto:${PROFIL.email}` },
    { icon: "⬢", label: "LinkedIn",  value: PROFIL.linkedin,  href: `https://www.linkedin.com/in/${PROFIL.linkedin}/` },
    { icon: "★", label: "Instagram", value: PROFIL.instagram, href: "https://www.instagram.com/tenshi.blossom/" },
  ];

  const stats = [
    { value: PROFIL.stat1Value, label: PROFIL.stat1Label },
    { value: PROFIL.stat2Value, label: PROFIL.stat2Label },
    { value: PROFIL.stat3Value, label: PROFIL.stat3Label },
  ];

  return (
    <main style={{ position: "relative", zIndex: 1, padding: isMobile ? "100px 24px 80px" : isTablet ? "120px 40px 80px" : "120px 64px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ animation: "fadeUp .7s ease both" }}>
        <PageLabel label="Profil" num="02" />

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80, marginTop: 56, alignItems: "start" }}>

          {/* ── Colonne gauche : portrait + contact ── */}
          <div>
            <div style={{ width: "100%", aspectRatio: "3/4", maxWidth: 380, border: `1px solid ${C.border}`, borderRadius: 8, marginBottom: 32, position: "relative", overflow: "hidden" }}>
              <img
                src="/bryan-profile.jpg"
                alt="Bryan Phan Van Ho"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 65%, rgba(11,13,26,0.45) 100%)", pointerEvents: "none" }} />
              <CornerOrnaments />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactItems.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "rgba(26,31,56,.5)", border: "1px solid rgba(212,165,116,.15)", borderRadius: 6 }}>
                  <span style={{ color: C.gold, fontSize: 14, width: 20, textAlign: "center" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: 2, color: "rgba(251,190,180,.5)", textTransform: "uppercase", fontWeight: 700 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.gold, textDecoration: "none", borderBottom: `1px solid ${C.gold}50`, paddingBottom: 1 }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.peach, marginTop: 2 }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : bio ── */}
          <div>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: isMobile ? 40 : 56, fontWeight: 400, lineHeight: 1, color: C.peach, marginBottom: 8 }}>
              <span style={{ fontStyle: "italic" }}>Bonjour,</span><br />
              <span style={{ color: C.gold }}>je suis Bryan.</span>
            </h1>
            <div style={{ width: 48, height: 1, background: C.gold, margin: "24px 0 32px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontFamily: FONT_BODY, fontSize: 16, lineHeight: 1.8, color: "rgba(251,190,180,.85)", margin: 0 }}>
                {PROFIL.bio1}
              </p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.8, color: "rgba(251,190,180,.7)", margin: 0 }}>
                {PROFIL.bio2}
              </p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.8, color: "rgba(251,190,180,.7)", margin: 0 }}>
                {PROFIL.bio3}
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(212,165,116,.2)" }}>
              {stats.map(s => (
                <div key={s.label} style={{ padding: "14px 16px", background: "rgba(26,31,56,.4)", border: "1px solid rgba(212,165,116,.15)", borderRadius: 6 }}>
                  <div style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: 2, color: C.gold, textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.peach, fontWeight: 600, lineHeight: 1.4 }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={() => navigate("home")} style={{
              marginTop: 40, fontFamily: FONT_BODY, fontSize: 12, fontWeight: 700,
              letterSpacing: 2.5, textTransform: "uppercase", color: C.bg,
              background: `linear-gradient(135deg, ${C.gold} 0%, ${C.peach} 100%)`,
              border: "none", borderRadius: 4, padding: "14px 28px",
              cursor: "pointer", boxShadow: "0 4px 24px rgba(212,165,116,.3)",
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              ▶ Voir mes projets
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
