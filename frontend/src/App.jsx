import React from "react"; // React
import { BrowserRouter, Routes, Route } from "react-router-dom"; // routing
import AppLayout from "./components/AppLayout"; // layout wrapper
import LandingPage from "./pages/LandingPage"; // page
import DiagnosisPage from "./pages/DiagnosisPage"; // page

export default function App() { // root component
  return (
    <BrowserRouter> {/* enables routing */}
      <Routes> {/* route table */}
        <Route element={<AppLayout />}> {/* layout wraps children */}
          <Route index element={<LandingPage />} /> {/* DEFAULT route for "/" */}
          <Route path="diagnosis" element={<DiagnosisPage />} /> {/* "/diagnosis" */}
          <Route path="*" element={<div>Not Found</div>} /> {/* if no route matches, show something */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
