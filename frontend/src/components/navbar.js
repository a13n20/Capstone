import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './navbar.css';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    fetch('https://django-backend-848546903722.us-central1.run.app/api/check-login/', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(data.is_authenticated);
        if (data.is_authenticated) {
          setUserEmail(data.email);
        }
      });
  }, []);

  const handleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    const res = await fetch('https://django-backend-848546903722.us-central1.run.app/api/google-login/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();
    if (data.email) {
      setIsAuthenticated(true);
      setUserEmail(data.email);
    }
  };

  const handleLogout = () => {
    fetch('https://django-backend-848546903722.us-central1.run.app/api/google-logout/', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      setIsAuthenticated(false);
      setUserEmail('');
    }).catch((err) => {
      console.error("Logout failed:", err);
    });
  };

  return (
    <div className="NavbarContainer">
      <div className="google">
        {isAuthenticated ? (
          <>
            <span>Welcome, {userEmail}</span> |
            <button onClick={handleLogout}>Sign Out</button>
          </>
        ) : (
          <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log('Login Failed')} />
        )}
      </div>

      <header className="App-header">
        <h1>Data Protection Program</h1>
      </header>

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

