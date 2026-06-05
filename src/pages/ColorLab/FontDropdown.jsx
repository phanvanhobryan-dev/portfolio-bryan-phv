import { useState, useRef, useEffect } from "react";

export default function FontDropdown({ value, onChange, fonts }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = fonts.find(f => f.n === value) || fonts[0];

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 10px", background: "rgba(26,31,56,0.6)", border: "1px solid rgba(212,165,116,0.2)", borderRadius: 4, color: "#FBBEB4", fontFamily: "'Manrope',sans-serif", fontSize: 12, cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{selected.n}</span>
        <span style={{ marginLeft: 6, flexShrink: 0, fontSize: 10, opacity: .6, transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s" }}>▼</span>
      </button>

      {open && (
        <div style={{ position: "absolute", bottom: "calc(100% + 4px)", left: 0, right: 0, zIndex: 9999, background: "#1A1F38", border: "1px solid rgba(212,165,116,0.3)", borderRadius: 4, maxHeight: 240, overflowY: "auto", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
          {fonts.map(f => (
            <div
              key={f.n}
              onClick={() => { onChange(f.n); setOpen(false); }}
              style={{ padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", background: value === f.n ? "rgba(212,165,116,0.15)" : "transparent", borderBottom: "1px solid rgba(212,165,116,0.08)", cursor: "pointer", transition: "background .15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(212,165,116,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = value === f.n ? "rgba(212,165,116,0.15)" : "transparent"}
            >
              <span style={{ fontFamily: "'Manrope',sans-serif", fontSize: 13, color: "#FBBEB4" }}>{f.n}</span>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontSize: 10, color: "rgba(212,165,116,0.7)" }}>{f.t}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
