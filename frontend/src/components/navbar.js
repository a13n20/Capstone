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
          <li>
            <a href="https://django-backend-848546903722.us-central1.run.app/accounts/google/login/">Sign In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
