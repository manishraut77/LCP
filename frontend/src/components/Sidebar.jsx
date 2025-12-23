import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const baseBtn = { display: "block", width: "100%", textAlign: "left", padding: "12px 14px", marginBottom: 10, cursor: "pointer", borderRadius: 10, border: "1px solid #e5e5e5", background: "#f7f7f7", fontWeight: 600 };
  const activeBtn = { background: "#111", color: "#fff", border: "1px solid #111" };

  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#666", marginBottom: 10 }}>MENU</div>

      <button onClick={() => navigate("/diagnosis")} style={location.pathname === "/diagnosis" ? { ...baseBtn, ...activeBtn } : baseBtn}>
        Diagnosis
      </button>

      <button onClick={() => navigate("/results")} style={location.pathname === "/results" ? { ...baseBtn, ...activeBtn } : baseBtn}>
        Past Results
      </button>

      <button onClick={() => navigate("/about")} style={location.pathname === "/about" ? { ...baseBtn, ...activeBtn } : baseBtn}>
        About AI
      </button>

      <button onClick={() => navigate("/settings")} style={location.pathname === "/settings" ? { ...baseBtn, ...activeBtn } : baseBtn}>
        Settings
      </button>
    </div>
  );
}
