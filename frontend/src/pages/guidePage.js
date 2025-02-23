import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/searchBar';
import './pages.css';

// Previews
import { CreditBureauFreezeTitle, CreditBureauFreezePreview } from './guides/creditBureauFreeze';
import { TwoFactorAuthTitle, TwoFactorAuthPreview } from './guides/twoFactorAuthentication';

const GuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const guides = [
    { title: CreditBureauFreezeTitle, previewComponent: CreditBureauFreezePreview },
    { title: TwoFactorAuthTitle, previewComponent: TwoFactorAuthPreview},
  ];

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.previewComponent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='guidePage'>
      <h1>Guides</h1>
      <SearchBar onSearch={setSearchTerm} />
      <ul>
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide, index) => (
            <li key={index}>
              <Link to={`/guide/${encodeURIComponent(guide.title)}`}>
                <h3>{guide.title}</h3>
                <p>{guide.previewComponent}</p>
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