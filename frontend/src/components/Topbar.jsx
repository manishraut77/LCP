import React from "react";

export default function Topbar({ onToggleSidebar }) {
  return (
    <div
      style={{
        width: "100%",                 // force full width
        height: 60,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* LEFT SIDE: toggle + logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={onToggleSidebar}
          style={{
            fontSize: 20,
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          ☰
        </button>

        <strong>AI Powered Lung Cancer Predictor</strong>
      </div>

      {/* RIGHT SIDE: auth buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}
