import { useRef } from "react";

export default function FontInput({ value, onChange }) {
  const inputRef = useRef(null);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Ex : Cinzel, Bebas Neue, Press Start 2P…"
      style={{
        fontFamily: "'Manrope',sans-serif", fontSize: 12,
        padding: "9px 12px",
        background: "rgba(26,31,56,0.6)",
        border: "1px solid rgba(212,165,116,0.2)",
        borderRadius: 4, color: "#FBBEB4",
        width: "100%", outline: "none",
        boxSizing: "border-box",
      }}
      autoComplete="off"
      spellCheck={false}
    />
  );
}
