import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import PageLabel from "../../components/PageLabel/PageLabel";
import CornerOrnaments from "../../components/CornerOrnaments/CornerOrnaments";

export default function PageProfil({ isMobile, isTablet, navigate }) {
  const contactItems = [
    { icon: "◉", label: "Numéros",   value: "06.14.28.19.09, France" },
    { icon: "◆", label: "Email",     value: "phanvanhobryan@gmail.com", href: "mailto:phanvanhobryan@gmail.com" },
    { icon: "⬢", label: "LinkedIn",  value: "bryanphanvanho",   href: "https://www.linkedin.com/in/bryan-phan-van-ho-6bbb931b3/" },
    { icon: "★", label: "Instagram", value: "tenshi.blossom",   href: "https://www.instagram.com/tenshi.blossom/" },
  ];

  const stats = [
    { value: "4+",  label: "Années d'XP" },
    { value: "20+", label: "Projets livrés" },
    { value: "10+", label: "Clients" },
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
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
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
              <p style={{ fontFamily: FONT_BODY, fontSize: 16, lineHeight: 1.8, color: "rgba(251,190,180,.85)" }}>
                Passionné par le monde du digital, j'ai acquis un ensemble de compétences polyvalentes : la programmation, le marketing, la gestion de projets et le digital. Mon profil complet me permet d'aborder chaque projet avec une expertise approfondie dans ces domaines.
              </p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.8, color: "rgba(251,190,180,.7)" }}>
                Mon approche est au carrefour du design et de la gestion de projet : je conçois des expériences mémorables tout en pilotant les équipes créatives pour livrer dans les délais et avec impact. Capable de servir d'intermédiaire entre les équipes métiers, techniques et marketing.
              </p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.8, color: "rgba(251,190,180,.7)" }}>
                Bilingue français natif · anglais professionnel B1. Basé à Paris.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(212,165,116,.2)" }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 40, color: C.gold, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2, color: "rgba(251,190,180,.55)", textTransform: "uppercase", marginTop: 6, fontWeight: 600 }}>{s.label}</div>
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
