import { C, FONT_BODY, FONT_DISPLAY } from "../../constants/tokens";
import PageLabel from "../../components/PageLabel/PageLabel";
import Tag from "../../components/Tag/Tag";

const EXPERIENCES = [
  {
    type: "exp", period: "2025 — Présent",
    role: "Responsable Studio & Production",
    org: "ESD · École Supérieure du Digital & ESP · École Supérieure de Publicité",
    desc: "Gestion des projets de communication en coordination avec les étudiants (communication, design, produit, direction). Gestion des rushs photo et vidéo : réception, tri, indexation et archivage. Soutien des équipes lors des tournages, shootings et événements. Création de contenus pour les réseaux sociaux et force de proposition sur les formats, angles et visuels.",
    tags: [{ label: "Gestion de projet", cat: "domain" }, { label: "Production photo/vidéo", cat: "domain" }, { label: "Social media", cat: "domain" }, { label: "Notion", cat: "tool" }],
  },
  {
    type: "exp", period: "2024 — Présent",
    role: "Freelance Designer Digital",
    org: "Blossom Hanami",
    desc: "Traduction des besoins métier en solutions digitales & marketing efficaces. Mise en production de produits et d'idées créatives (événements, points de vente, mailings automatisés, digitalisation des systèmes de fidélité). Gestion complète de projets digitaux : newsletters, articles, landing pages. Élaboration de stratégies marketing multicanales (e-mailing, Ads, SEO, print, vidéos). Analyses et rapports de performance via des outils de data visualisation.",
    tags: [{ label: "Gestion de projet", cat: "domain" }, { label: "Stratégie marketing", cat: "domain" }, { label: "UI/UX Design", cat: "domain" }, { label: "Figma", cat: "tool" }, { label: "HubSpot", cat: "tool" }],
  },
  {
    type: "exp", period: "2022 — 2023",
    role: "Assistant Directeur Artistique · Lead Project Manager Digital",
    org: "Compos Juliot",
    desc: "Traduction des besoins métier en solutions digitales efficaces. Mise en production de produits et d'idées créatives. Gestion de planning, livrables et priorités, définition des ressources et budgets nécessaires sur différents projets.",
    tags: [{ label: "Direction artistique", cat: "domain" }, { label: "Gestion de projet", cat: "domain" }, { label: "Photoshop", cat: "tool" }, { label: "Illustrator", cat: "tool" }],
  },
  {
    type: "exp", period: "2021 — 2022",
    role: "Assistant Lead Project Manager Marketing Digital · Graphiste",
    org: "ANCV",
    desc: "Gestion complète de projets digitaux : conception à la mise en production de newsletters, articles, landing pages. Élaboration et optimisation de stratégies marketing multicanales : campagnes e-mailing, publicités en ligne, SEO, print et vidéos. Réalisation d'analyses et rapports de performance via des outils de data visualisation.",
    tags: [{ label: "Stratégie marketing", cat: "domain" }, { label: "E-mailing", cat: "domain" }, { label: "SEO & Ads", cat: "domain" }, { label: "Google Analytics", cat: "tool" }, { label: "Metabase", cat: "tool" }],
  },
  {
    type: "edu", period: "2021 — 2023",
    role: "Master Management, Innovation et Création Digitale",
    org: "École Supérieure du Digital",
    desc: "Acquisition de compétences en design web et mobile, gestion de projets, management d'équipe, budgétisation, planification et digital. Réalisation de projets variés : conception de sites web, création d'événements, développement d'applications. Mise en place de stratégies marketing et commerciales avec suivi des performances (KPI's, Data, Objectifs).",
    tags: [{ label: "Gestion de projet", cat: "domain" }, { label: "UI/UX Design", cat: "domain" }, { label: "Stratégie marketing", cat: "domain" }, { label: "Figma", cat: "tool" }],
  },
  {
    type: "edu", period: "2017 — 2021",
    role: "Licence Sciences de l'Informatique",
    org: "Université",
    desc: "Développement d'une expertise en langages de programmation : C+, HTML/CSS, JavaScript, Python, SQL. Acquisition d'une grande autonomie face à l'apprentissage de nouveaux logiciels et langages. Réalisation de projets variés : mini-programmes, jeux vidéo, casse-têtes interactifs, automates et gestion de bases de données.",
    tags: [{ label: "HTML/CSS", cat: "tool" }, { label: "JavaScript", cat: "tool" }, { label: "Python", cat: "tool" }, { label: "SQL", cat: "tool" }],
  },
];

function TimelineSection({ items, color, startIndex = 0, isMobile }) {
  return (
    <div style={{ position: "relative", marginBottom: isMobile ? 48 : 64 }}>
      {!isMobile && (
        <div style={{ position: "absolute", left: 148, top: 16, bottom: 48, width: 1, background: `linear-gradient(${color}50, transparent)` }} />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 24 : 0 }}>
        {items.map((exp, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "160px 1fr", gap: isMobile ? 8 : 0, paddingBottom: isMobile ? 0 : 40, animation: `fadeUp .6s ${(startIndex + i) * 80}ms ease both` }}>
            {!isMobile && (
              <div style={{ paddingTop: 20, paddingRight: 24, textAlign: "right", position: "relative" }}>
                <span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 1.5, color, fontWeight: 700, lineHeight: 1.4, display: "inline-block" }}>
                  {exp.period}
                </span>
                <div style={{ position: "absolute", right: -7, top: 24, width: 12, height: 12, borderRadius: "50%", background: exp.type === "exp" ? color : C.bg, border: `2px solid ${color}`, boxShadow: exp.type === "exp" ? `0 0 12px ${color}80` : "none", zIndex: 2 }} />
              </div>
            )}
            <div style={{ paddingLeft: isMobile ? 0 : 40 }}>
              {isMobile && (
                <span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 1.5, color, fontWeight: 700, display: "block", marginBottom: 6 }}>
                  {exp.period}
                </span>
              )}
              <div style={{ padding: "20px 24px", background: "rgba(26,31,56,.5)", border: `1px solid ${color}30`, borderRadius: 8, backdropFilter: "blur(20px)", position: "relative" }}>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: isMobile ? 17 : 21, fontWeight: 400, color: C.peach, fontStyle: "italic", marginBottom: 4, lineHeight: 1.2 }}>
                  {exp.role}
                </h3>
                <div style={{ fontFamily: FONT_BODY, fontSize: 13, color, fontWeight: 600, marginBottom: 10 }}>{exp.org}</div>
                <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "rgba(251,190,180,.7)", lineHeight: 1.65, marginBottom: 12 }}>{exp.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {exp.tags.map(t => <Tag key={t.label} label={t.label} cat={t.cat} />)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PageParcours({ isMobile, isTablet }) {
  const exps = EXPERIENCES.filter(e => e.type === "exp");
  const edus = EXPERIENCES.filter(e => e.type === "edu");

  return (
    <main style={{ position: "relative", zIndex: 1, padding: isMobile ? "100px 24px 80px" : isTablet ? "120px 40px 80px" : "120px 64px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ animation: "fadeUp .7s ease both" }}>
        <PageLabel label="Parcours" num="04" />

        <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: isMobile ? 40 : 60, fontWeight: 400, color: C.peach, lineHeight: 1, marginTop: 16, marginBottom: 56 }}>
          Mon <span style={{ fontStyle: "italic", color: C.gold }}>chemin.</span>
        </h1>

        {/* Expériences */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
            <div style={{ height: 1, width: 28, background: C.gold, opacity: .6 }} />
            <span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontWeight: 700 }}>
              Expériences professionnelles
            </span>
          </div>
          <TimelineSection items={exps} color={C.gold} startIndex={0} isMobile={isMobile} />
        </div>

        {/* Formation */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
            <div style={{ height: 1, width: 28, background: C.peach, opacity: .4 }} />
            <span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: 3, color: "rgba(251,190,180,.6)", textTransform: "uppercase", fontWeight: 700 }}>
              Formation
            </span>
          </div>
          <TimelineSection items={edus} color="rgba(251,190,180,.6)" startIndex={exps.length} isMobile={isMobile} />
        </div>
      </div>
    </main>
  );
}
