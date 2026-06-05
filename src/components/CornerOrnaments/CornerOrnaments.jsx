import { C } from "../../constants/tokens";

export default function CornerOrnaments({ color = C.gold }) {
  const corners = [
    { t: 8, l: 8,  r: 0   },
    { t: 8, ri: 8, r: 90  },
    { b: 8, ri: 8, r: 180 },
    { b: 8, l: 8,  r: 270 },
  ];

  return (
    <>
      {corners.map((c, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 14 14" style={{
          position: "absolute", top: c.t, left: c.l, right: c.ri, bottom: c.b,
          transform: `rotate(${c.r}deg)`, pointerEvents: "none", zIndex: 10,
        }}>
          <path d="M1 5L1 1L5 1" stroke={color} strokeWidth="1.2" fill="none" />
        </svg>
      ))}
    </>
  );
}
