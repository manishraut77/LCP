import React, { useRef, useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function UploadImage({ userId, onUploadComplete }) {
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  function handleFileChange(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) { setImageFile(null); setMessage(""); return; }
    if (!file.type.startsWith("image/")) { setImageFile(null); setMessage("Please select an image file."); if (inputRef.current) inputRef.current.value = ""; return; }

    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) { setImageFile(null); setMessage("File too large. Please upload an image under 10MB."); if (inputRef.current) inputRef.current.value = ""; return; }

    setImageFile(file);
    setMessage("");
  }

  async function handleUpload() {
    if (!imageFile) { setMessage("Please select an image first."); return; }
    if (!userId) { setMessage("Missing userId. Can't upload."); return; }

    setUploading(true);
    setMessage("Uploading image...");

    const fileName = `${userId}-${Date.now()}-${imageFile.name}`;

    const { error: uploadError } = await supabase.storage.from("xray-images").upload(fileName, imageFile, { upsert: false });
    if (uploadError) { setMessage("Upload failed: " + uploadError.message); setUploading(false); return; }

    const { data: publicData } = supabase.storage.from("xray-images").getPublicUrl(fileName);
    const imagePath = publicData.publicUrl;

    setMessage("Upload complete.");
    setUploading(false);
    setImageFile(null);
    if (inputRef.current) inputRef.current.value = "";

    if (onUploadComplete) onUploadComplete(imagePath);
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h2 style={{ margin: "0 0 12px" }}>Upload X-ray Image</h2>

      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading || !imageFile} style={{ opacity: uploading || !imageFile ? 0.6 : 1 }}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}
