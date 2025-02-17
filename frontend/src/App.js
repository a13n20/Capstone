import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import PhishingDetectionPage from './pages/phishingDetectionPage';

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
          <Route path="/guides" element={<h2>Guides Page (Coming Soon)</h2>} />
          <Route path="/phishing-detection" element={<PhishingDetectionPage />} />
          <Route path="/password-aid" element={<h2>Password Aid (Coming Soon)</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


