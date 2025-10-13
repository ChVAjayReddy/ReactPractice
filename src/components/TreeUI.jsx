import { TREE_UI_DATA } from "../assets/data";
import { useState } from "react";
const TreeUI = () => {
  const [active, setActive] = useState("red");
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      {/* SVG inline */}
      <svg
        width="100"
        height="260"
        viewBox="0 0 80 260"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Signal"
      >
        <rect x="10" y="10" width="60" height="240" rx="12" fill="#222" />
        <rect x="16" y="22" width="48" height="44" rx="22" fill="#111" />
        <rect x="16" y="88" width="48" height="44" rx="22" fill="#111" />
        <rect x="16" y="154" width="48" height="44" rx="22" fill="#111" />

        <circle
          cx="40"
          cy="44"
          r="16"
          fill={active === "red" ? "#ff3b30" : "#330000"}
          stroke="#000"
        />
        <circle
          cx="40"
          cy="110"
          r="16"
          fill={active === "yellow" ? "#ffd60a" : "#333300"}
          stroke="#000"
        />
        <circle
          cx="40"
          cy="176"
          r="16"
          fill={active === "green" ? "#34c759" : "#003300"}
          stroke="#000"
        />
      </svg>

      {/* Controls */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <button
          onClick={() => setActive("red")}
          style={{ background: "#ff3b30", color: "white", padding: "8px 12px" }}
        >
          Red
        </button>
        <button
          onClick={() => setActive("yellow")}
          style={{ background: "#ffd60a", padding: "8px 12px" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setActive("green")}
          style={{ background: "#34c759", color: "white", padding: "8px 12px" }}
        >
          Green
        </button>
        <button onClick={() => setActive(null)} style={{ padding: "8px 12px" }}>
          Off
        </button>

        <div style={{ marginTop: 8 }}>
          <small>
            Active: <strong>{active ?? "none"}</strong>
          </small>
        </div>
      </div>
    </div>
  );
};
export default TreeUI;
