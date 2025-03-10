import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="NavbarContainer">
      {/* Header */}
      <header className="App-header">
        <h1>Data Protection Program</h1>
      </header>

      {/* Navbar Links */}
      <nav>
        <ul className="NavLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guides">Guides</Link></li>
          <li><Link to="/phishing-detection">Phishing Detection</Link></li>
          <li><Link to="/password-aid">Password Aid</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;