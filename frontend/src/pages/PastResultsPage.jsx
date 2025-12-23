import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function PastResultsPage() {
  const userId = "test-user"; // for now keep it same as upload, later replace with real auth user id
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [scans, setScans] = useState([]);

  useEffect(() => {
    async function fetchScans() {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("scans")
        .select("id, image_path, status, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) { setErrorMsg(error.message); setScans([]); setLoading(false); return; }

      setScans(data || []);
      setLoading(false);
    }

    fetchScans();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 900, padding: "48px 24px" }}>
        <h1 style={{ margin: "0 0 8px" }}>Past Results</h1>
        <p style={{ margin: "0 0 24px", color: "#555" }}>Your uploaded scans.</p>

        {loading && <p>Loading...</p>}
        {errorMsg && <p style={{ color: "crimson" }}>{errorMsg}</p>}

        {!loading && !errorMsg && scans.length === 0 && <p>No scans yet. Upload one from Diagnosis.</p>}

        {!loading && !errorMsg && scans.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {scans.map(scan => (
              <div key={scan.id} style={{ border: "1px solid #e5e5e5", borderRadius: 12, padding: 12, background: "#fff" }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Status: {scan.status}</div>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 10 }}>{new Date(scan.created_at).toLocaleString()}</div>

                <img
                  src={scan.image_path}
                  alt="Uploaded X-ray"
                  style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10, border: "1px solid #ddd" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
