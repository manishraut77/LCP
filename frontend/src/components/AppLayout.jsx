import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  function toggleSidebar() { setSidebarOpen(prev => !prev); }

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
      <Topbar onToggleSidebar={toggleSidebar} />

      <div style={{ flex: 1, width: "100%", display: "flex", minHeight: 0 }}>
        <div style={{ width: sidebarOpen ? 240 : 0, overflow: "hidden", borderRight: sidebarOpen ? "1px solid #e5e5e5" : "none" }}>
          <Sidebar />
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", overflow: "auto" }}>
          <div style={{ width: "100%", maxWidth: 900, padding: "40px 24px" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
