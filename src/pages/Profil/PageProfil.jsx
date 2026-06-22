import { useState, useEffect } from "react";
import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import PageLabel from "../../components/PageLabel/PageLabel";
import CornerOrnaments from "../../components/CornerOrnaments/CornerOrnaments";

// ─── Textes par défaut du profil ────────────────────────────────────────────
const DEFAULT_CONTENT = {
  bio1: "Passionné par le monde du digital, j'ai développé un profil polyvalent mêlant programmation, marketing, gestion de projets et stratégie digitale. Cette combinaison me permet d'aborder chaque projet avec une expertise approfondie et une vision globale.",
  bio2: "Mon approche se situe au croisement du design et de la gestion de projet : je conçois des expériences mémorables tout en pilotant les équipes créatives pour livrer dans les délais et avec impact. Je sers de pont entre les équipes métiers, techniques et marketing.",
  bio3: "Français natif, anglais professionnel (B1). Basé à Paris.",
  stat1Value: "Lv.3",
  stat1Label: "Niveaux d'XP",
  stat2Value: "20+",
  stat2Label: "Projets réalisés",
  stat3Value: "10+",
  stat3Label: "Clients accompagnés",
  phone: "06.14.28.19.09, France",
  email: "phanvanhobryan@gmail.com",
  linkedin: "bryanphanvanho",
  instagram: "tenshi.blossom",
};

const STORAGE_KEY = "profil_content_v1";

function loadContent() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...DEFAULT_CONTENT, ...JSON.parse(saved) };
  } catch {}
  return DEFAULT_CONTENT;
}

// ─── Panneau d'édition ────────────────────────────────────────────────────────
function EditPanel({ content, onSave, onClose }) {
  const [draft, setDraft] = useState(content);

  const field = (key, label, multiline = false) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 1.5, color: "rgba(251,190,180,.5)", textTransform: "uppercase", fontWeight: 700 }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          value={draft[key]}
          onChange={e => setDraft(d => ({ ...d, [key]: e.target.value }))}
          rows={3}
          style={{
            fontFamily: FONT_BODY, fontSize: 13, lineHeight: 1.6,
            background: "rgba(26,31,56,.8)", border: "1px solid rgba(212,165,116,.3)",
            borderRadius: 4, padding: "10px 12px", color: "#FBBEB4",
            resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box",
          }}
        />
      ) : (
        <input
          type="text"
          value={draft[key]}
          onChange={e => setDraft(d => ({ ...d, [key]: e.target.value }))}
          style={{
            fontFamily: FONT_BODY, fontSize: 13,
            background: "rgba(26,31,56,.8)", border: "1px solid rgba(212,165,116,.3)",
            borderRadius: 4, padding: "10px 12px", color: "#FBBEB4",
            outline: "none", width: "100%", boxSizing: "border-box",
          }}
        />
      )}
    </div>
  );

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "flex", alignItems: "stretch", justifyContent: "flex-end",
    }}>
      {/* Fond sombre cliquable pour fermer */}
      <div
        onClick={onClose}
        style={{ flex: 1, background: "rgba(11,13,26,.6)", backdropFilter: "blur(4px)", cursor: "pointer" }}
      />

      {/* Panneau latéral */}
      <div style={{
        width: 420, maxWidth: "90vw",
        background: "#0B0D1A", borderLeft: "1px solid rgba(212,165,116,.25)",
        overflowY: "auto", display: "flex", flexDirection: "column",
        animation: "slideIn .25s ease both",
      }}>
        <style>{`
          @keyframes slideIn { from { transform: translateX(40px); opacity: 0 } to { transform: none; opacity: 1 } }
          textarea:focus, input:focus { border-color: rgba(212,165,116,.7) !important; }
          textarea::placeholder, input::placeholder { color: rgba(251,190,180,.3); }
        `}</style>

        {/* Header */}
        <div style={{ padding: "24px 24px 20px", borderBottom: "1px solid rgba(212,165,116,.15)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#0B0D1A", zIndex: 1 }}>
          <div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 18, color: C.peach }}>Modifier le profil</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(251,190,180,.4)", marginTop: 2 }}>Les changements sont sauvegardés localement</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(251,190,180,.5)", fontSize: 20, cursor: "pointer", padding: 4, lineHeight: 1 }}>✕</button>
        </div>

        {/* Champs */}
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>

          <div style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2, color: C.gold, textTransform: "uppercase", fontWeight: 700, marginBottom: -8 }}>Bio</div>
          {field("bio1", "Paragraphe 1", true)}
          {field("bio2", "Paragraphe 2", true)}
          {field("bio3", "Langues / Localisation")}

          <div style={{ borderTop: "1px solid rgba(212,165,116,.15)", paddingTop: 16, fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2, color: C.gold, textTransform: "uppercase", fontWeight: 700, marginBottom: -8 }}>Stats</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 }}>
            {field("stat1Value", "Valeur 1")}
            {field("stat1Label", "Label 1")}
            {field("stat2Value", "Valeur 2")}
            {field("stat2Label", "Label 2")}
            {field("stat3Value", "Valeur 3")}
            {field("stat3Label", "Label 3")}
          </div>

          <div style={{ borderTop: "1px solid rgba(212,165,116,.15)", paddingTop: 16, fontFamily: FONT_BODY, fontSize: 10, letterSpacing: 2, color: C.gold, textTransform: "uppercase", fontWeight: 700, marginBottom: -8 }}>Contact</div>
          {field("phone", "Téléphone")}
          {field("email", "Email")}
          {field("linkedin", "LinkedIn (identifiant)")}
          {field("instagram", "Instagram (identifiant)")}
        </div>

        {/* Footer boutons */}
        <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(212,165,116,.15)", display: "flex", gap: 12, position: "sticky", bottom: 0, background: "#0B0D1A" }}>
          <button
            onClick={() => { onSave(draft); onClose(); }}
            style={{
              flex: 1, fontFamily: FONT_BODY, fontSize: 12, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", color: C.bg,
              background: `linear-gradient(135deg, ${C.gold} 0%, ${C.peach} 100%)`,
              border: "none", borderRadius: 4, padding: "12px 0", cursor: "pointer",
            }}
          >
            ✓ Sauvegarder
          </button>
          <button
            onClick={() => { onSave(DEFAULT_CONTENT); setDraft(DEFAULT_CONTENT); }}
            style={{
              fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600,
              letterSpacing: 1, textTransform: "uppercase", color: "rgba(251,190,180,.4)",
              background: "none", border: "1px solid rgba(212,165,116,.2)",
              borderRadius: 4, padding: "12px 16px", cursor: "pointer",
            }}
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function PageProfil({ isMobile, isTablet, navigate }) {
  const [content, setContent] = useState(loadContent);
  const [editOpen, setEditOpen] = useState(false);

  const handleSave = (newContent) => {
    setContent(newContent);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent)); } catch {}
  };

  const contactItems = [
    { icon: "◉", label: "Numéros",   value: content.phone },
    { icon: "◆", label: "Email",     value: content.email, href: `mailto:${content.email}` },
    { icon: "⬢", label: "LinkedIn",  value: content.linkedin, href: "https://www.linkedin.com/in/bryan-phan-van-ho-6bbb931b3/" },
    { icon: "★", label: "Instagram", value: content.instagram, href: "https://www.instagram.com/tenshi.blossom/" },
  ];

  const stats = [
    { value: content.stat1Value, label: content.stat1Label },
    { value: content.stat2Value, label: content.stat2Label },
    { value: content.stat3Value, label: content.stat3Label },
  ];

  return (
    <>
      {editOpen && (
        <EditPanel content={content} onSave={handleSave} onClose={() => setEditOpen(false)} />
      )}

      <main style={{ position: "relative", zIndex: 1, padding: isMobile ? "100px 24px 80px" : isTablet ? "120px 40px 80px" : "120px 64px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ animation: "fadeUp .7s ease both" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <PageLabel label="Profil" num="02" />
            <button
              onClick={() => setEditOpen(true)}
              title="Modifier le profil"
              style={{
                fontFamily: FONT_BODY, fontSize: 11, fontWeight: 700,
                letterSpacing: 1.5, textTransform: "uppercase",
                color: C.gold, background: "rgba(212,165,116,.08)",
                border: "1px solid rgba(212,165,116,.3)", borderRadius: 4,
                padding: "8px 16px", cursor: "pointer", display: "flex",
                alignItems: "center", gap: 6, marginTop: 4,
              }}
            >
              ✎ Modifier
            </button>
          </div>

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
                <p style={{ fontFamily: FONT_BODY, fontSize: 16, lineHeight: 1.8, color: "rgba(251,190,180,.85)", margin: 0 }}>
                  {content.bio1}
                </p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.8, color: "rgba(251,190,180,.7)", margin: 0 }}>
                  {content.bio2}
                </p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.8, color: "rgba(251,190,180,.7)", margin: 0 }}>
                  {content.bio3}
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
    </>
  );
}
