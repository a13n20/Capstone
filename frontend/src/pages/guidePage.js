import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/searchBar';
import './pages.css';

// Previews
import { creditBureauFreeze } from './guides/creditBureauFreeze';
import { twoFactorAuth } from './guides/twoFactorAuthentication';

const GuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const guides = [
    { title: creditBureauFreeze.title, preview: creditBureauFreeze.preview },
    { title: twoFactorAuth.title, preview: twoFactorAuth.preview},
  ];

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='guidePage'>
      <h1>Guides</h1>
      <SearchBar onSearch={setSearchTerm} />
      <ul>
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide, index) => (
            <li key={index}>
              <Link className='guideLink' to={`/guide/${encodeURIComponent(guide.title)}`}>
                <h3>{guide.title}</h3>
                <p>{guide.preview}</p>
              </Link>
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