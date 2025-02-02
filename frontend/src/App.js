import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
    fetch(' http://127.0.0.1:8000/').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentDate(data.date)
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Protection Program</h1>
      </header>

      {/* Navbar */}
      <nav classname="Navbar">
        <ul classname="NavLinks">
          <a href="/">Home</a>
          <a href="/guides">Guides</a>
          <a href="/phishdetection">Phishing Detection</a>
          <a href="passaid">Password Aid</a>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <p>Coming Soon...</p>
      </main>
    </div>
  );
}

export default App;
