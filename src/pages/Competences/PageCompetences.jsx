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

const HOBBIES = [
  { icon: "🎮", label: "Univers gaming" },
  { icon: "🎲", label: "Jeux de société" },
  { icon: "🎵", label: "Musique" },
  { icon: "🌸", label: "Culture asiatique" },
  { icon: "🎭", label: "Expériences immersives" },
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
              <div key={h.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", background: "rgba(26,31,56,0.5)", border: "1px solid rgba(212,165,116,0.2)", borderRadius: 999, backdropFilter: "blur(20px)" }}>
                <span style={{ fontSize: 18 }}>{h.icon}</span>
                <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.peach, fontWeight: 500 }}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
