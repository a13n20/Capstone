import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import PhishingDetectionPage from './pages/phishingDetectionPage';
import GuidesPage from './pages/guidePage.js';
import GuideDetails from "./pages/guideDetails";

function App() {
  return (
    <div className="App">
      {/* Navbar with header and navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<h2>Welcome to the Home Page</h2>} /> {/* Homepage */}
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/phishing-detection" element={<PhishingDetectionPage />} />
          <Route path="/password-aid" element={<h2>Password Aid (Coming Soon)</h2>} />
          <Route path="/guide/:title" element={<GuideDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

