import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import PhishingDetectionPage from './pages/phishingDetectionPage';
import GuidesPage from './pages/guidePage.js';
import GuideDetails from "./pages/guideDetails";
import PasswordAidPage from "./pages/passwordAidPage.js";
import CyberNews from "./pages/cyberNews.js";

function App() {
  return (
    <div className="App">
      {/* Navbar with header and navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<CyberNews />} /> {/* Homepage */}
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/phishing-detection" element={<PhishingDetectionPage />} />
          <Route path="/password-aid" element={<PasswordAidPage />} />
          <Route path="/guide/:title" element={<GuideDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

