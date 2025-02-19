import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/searchBar';
import './pages.css';

const GuidesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const guides = [
      "How to Freeze Credit Bureaus",
      "Setting up Two-Factor Authentication"
    ];
    
    const filteredGuides = guides.filter((guide) =>
      guide.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className='guidePage'>
        <h1>Guides</h1>
        <SearchBar onSearch={setSearchTerm} />
        <ul>
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide, index) => (
              <li key={index}>
                <Link to={`/guide/${encodeURIComponent(guide)}`}>{guide}</Link>
              </li>
            ))
          ) : (
            <p>No guides found.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default GuidesPage;