import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import PageLabel from "../../components/PageLabel/PageLabel";
import Tag from "../../components/Tag/Tag";
import CornerOrnaments from "../../components/CornerOrnaments/CornerOrnaments";

const DOMAIN_TAGS = [
  "Gestion de projet", "Direction artistique", "UI/UX Design", "Design graphique",
  "Branding", "3D", "Motion design", "Illustration", "Webdesign", "App mobile",
  "Social media", "Planification éditoriale", "Production photo/vidéo",
  "Stratégie marketing", "SEO & campagnes Ads", "Data visualisation", "E-mailing",
];

const TOOL_TAGS = [
  "Figma", "Photoshop", "Illustrator", "Blender 3D", "Procreate", "Unreal Engine 5",
  "After Effects", "Premiere Pro", "Notion", "HubSpot", "Metabase",
  "Google Analytics", "Google Tag Manager", "React", "HTML/CSS", "JavaScript", "Python", "SQL",
];

const CATEGORIES = [
  {
    icon: "◆", title: "Design & Création", color: "#FBBEB4",
    items: ["Direction artistique", "UI/UX Design", "Création de contenus visuels", "3D & Motion design", "Production photo / vidéo"],
  },
  {
    icon: "⬢", title: "Gestion de projet", color: "#D4A574",
    items: ["Pilotage d'équipes multi-profils", "Planification & livrables", "Définition des budgets & ressources", "Coordination créative", "Interface métier / technique / marketing"],
  },
  {
    icon: "★", title: "Marketing & Digital", color: "#FFD700",
    items: ["Stratégie marketing multicanale", "Campagnes e-mailing & Ads", "Social media & culture plateformes", "Data & rapports de performance", "Digitalisation de systèmes"],
  },
];

const HobbyIcons = {
  gaming: (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7.5 C2 7.5 2 9 2 10 C2 13 3.5 14 5.5 14 L7 14 L9 12.5 L11 14 L12.5 14 C14.5 14 16 13 16 10 C16 9 16 7.5 15 7.5 Z"/>
      <line x1="6.5" y1="9.5" x2="8.5" y2="9.5"/>
      <line x1="7.5" y1="8.5" x2="7.5" y2="10.5"/>
      <circle cx="12" cy="8.8" r="0.75" fill="currentColor" stroke="none"/>
      <circle cx="13.2" cy="10.2" r="0.75" fill="currentColor" stroke="none"/>
    </svg>
  ),
  dice: (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <rect x="2" y="2" width="14" height="14" rx="3"/>
      <circle cx="6"  cy="6"  r="1" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="6"  r="1" fill="currentColor" stroke="none"/>
      <circle cx="9"  cy="9"  r="1" fill="currentColor" stroke="none"/>
      <circle cx="6"  cy="12" r="1" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  music: (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <line x1="8" y1="3.5" x2="15" y2="2.5"/>
      <line x1="8" y1="3.5" x2="8" y2="12.5"/>
      <line x1="15" y1="2.5" x2="15" y2="11.5"/>
      <ellipse cx="6.5"  cy="12.8" rx="2"   ry="1.3" transform="rotate(-10 6.5 12.8)"  fill="currentColor" stroke="none"/>
      <ellipse cx="13.5" cy="11.8" rx="2"   ry="1.3" transform="rotate(-10 13.5 11.8)" fill="currentColor" stroke="none"/>
    </svg>
  ),
  sakura: (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
      {[0, 72, 144, 216, 288].map(a => (
        <ellipse key={a} cx="9" cy="5.5" rx="1.6" ry="2.8" transform={`rotate(${a} 9 9)`}/>
      ))}
      <circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none"/>
    </svg>
  ),
  vr: (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7.5 C2 5.5 3 5 4.5 5 L13.5 5 C15 5 16 5.5 16 7.5 L16 11 C16 12.5 15 13 13.5 13 L11.5 13 Q11 13 10.5 12 L9 12 L7.5 12 Q7 13 6.5 13 L4.5 13 C3 13 2 12.5 2 11 Z"/>
      <ellipse cx="6"  cy="9" rx="1.8" ry="2" fill="rgba(212,165,116,0.12)"/>
      <ellipse cx="12" cy="9" rx="1.8" ry="2" fill="rgba(212,165,116,0.12)"/>
    </svg>
  ),
};

const HOBBIES = [
  { iconKey: "gaming", label: "Univers gaming" },
  { iconKey: "dice",   label: "Jeux de société" },
  { iconKey: "music",  label: "Musique" },
  { iconKey: "sakura", label: "Culture asiatique" },
  { iconKey: "vr",     label: "Expériences immersives" },
];

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
      <div style={{ height: 1, width: 28, background: "#D4A574", opacity: .6 }} />
      <span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 3, color: "#D4A574", textTransform: "uppercase", fontWeight: 700 }}>
        {children}
      </span>
    </div>
  );
}

export default function PageCompetences({ isMobile, isTablet }) {
  return (
    <main style={{ position: "relative", zIndex: 1, padding: isMobile ? "100px 24px 80px" : isTablet ? "120px 40px 80px" : "120px 64px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ animation: "fadeUp .7s ease both" }}>
        <PageLabel label="Compétences" num="03" />

        <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: isMobile ? 40 : 60, fontWeight: 400, color: C.peach, lineHeight: 1, marginTop: 16, marginBottom: 48 }}>
          Ce que je <span style={{ fontStyle: "italic", color: C.gold }}>maîtrise.</span>
        </h1>

        {/* ── Blocs compétences ── */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)", gap: 20, marginBottom: 64 }}>
          {CATEGORIES.map((cat) => (
            <div key={cat.title} style={{ padding: 28, background: "rgba(26,31,56,.5)", border: "1px solid rgba(212,165,116,.2)", borderRadius: 8, backdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}>
              <CornerOrnaments color={cat.color} />
              <div style={{ fontSize: 32, color: cat.color, marginBottom: 16 }}>{cat.icon}</div>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 400, color: C.peach, fontStyle: "italic", marginBottom: 20 }}>{cat.title}</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: FONT_BODY, fontSize: 13, color: "rgba(251,190,180,.8)", paddingBottom: 10, borderBottom: "1px solid rgba(212,165,116,.08)" }}>
                    <span style={{ color: cat.color, fontSize: 8 }}>▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Outils ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionLabel>Outils &amp; logiciels</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TOOL_TAGS.map(t => <Tag key={t} label={t} cat="tool" />)}
          </div>
        </div>

        {/* ── Domaines ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionLabel>Domaines d'expertise</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {DOMAIN_TAGS.map(t => <Tag key={t} label={t} cat="domain" />)}
          </div>
        </div>

        {/* ── Passions ── */}
        <div>
          <SectionLabel>Passions &amp; loisirs</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {HOBBIES.map(h => (
              <div key={h.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", background: "rgba(26,31,56,0.5)", border: "1px solid rgba(212,165,116,0.2)", borderRadius: 999, backdropFilter: "blur(20px)", color: C.gold }}>
                {HobbyIcons[h.iconKey]}
                <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.peach, fontWeight: 500 }}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
