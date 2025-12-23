import React, { useState } from "react"; // React + state
import { useNavigate } from "react-router-dom"; // React Router navigation hook

export default function LandingPage() { // component
  const [message, setMessage] = useState(""); // state for red text (optional)
  const navigate = useNavigate(); // navigate() changes route without reloading

  function handleButtonClick() { // runs when button clicked
    setMessage(""); // optional: clear message
    navigate("/diagnosis"); // go to diagnosis route (React Router way)
  }

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 44, marginBottom: 12 }}>AI Powered LungCancerPredictor</h1>
      <p style={{ fontSize: 18, opacity: 0.8 }}>Upload a chest X-ray image and get AI-assisted analysis.</p>

      <button onClick={handleButtonClick} style={{ marginTop: 20, padding: "10px 20px", fontSize: 15, cursor: "pointer" }}>
        Get Started
      </button>

      <p style={{ marginTop: 16, color: "red" }}>{message}</p>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ marginBottom: 8 }}>How it works</h3>
        <ol>
          <li>Upload a chest X-ray</li>
          <li>AI processes the image</li>
          <li>View results and history</li>
        </ol>
        <p style={{ marginTop: 20, fontSize: 12, opacity: 0.7 }}>Educational use only. Not medical advice.</p>
      </div>
    </div>
  );
}
