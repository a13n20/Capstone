import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/searchBar';
import levenshtein from "fast-levenshtein";
import './pages.css';

// Previews
import { creditBureauFreeze } from './guides/creditBureauFreeze';

const GuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const guides = [
    { title: creditBureauFreeze.title, preview: creditBureauFreeze.preview, external: null },
    { title: "Best Password Managers for the USA", preview: "Secure your online accounts, money, and reputation with the top password managers.", external: "https://us.cybernews.com/lp/best-password-managers-us/?campaignId=20496310929&adgroupId=152532331189&adId=674697923228&targetId=kwd-107840712&device=c&gunique=Cj0KCQjw16O_BhDNARIsAC3i2GBduhMsNutMsevgXMFmAg5ZonRN5BT2tLzaZI4QCp6-q7br5CJ4SsAaAgL_EALw_wcB&gad_source=1&gbraid=0AAAAACyNk22yYvA-re6GDfkC4PO77S0I8&gclid=Cj0KCQjw16O_BhDNARIsAC3i2GBduhMsNutMsevgXMFmAg5ZonRN5BT2tLzaZI4QCp6-q7br5CJ4SsAaAgL_EALw_wcB" },
    { title: "How to use two-step verification with your Microsoft account", preview: "To increase the security of your account, you can require two steps to sign in.", external: "https://support.microsoft.com/en-us/account-billing/how-to-use-two-step-verification-with-your-microsoft-account-c7910146-672f-01e9-50a0-93b4585e7eb4" },
    { title: "Two-factor authentication for Apple Account", preview: "Two-factor authentication is designed to make sure that you’re the only person who can access your account. Learn how it works and how to turn on two-factor authentication.", external: "https://support.apple.com/en-us/102660" },
    { title: "5 top tips for keeping your online passwords secure", preview: "Dermot Williams, Managing Director of Threatscape shares his top five tips for securing online passwords.", external: "https://www.threatscape.com/cyber-security-blog/top-5-tips-for-keeping-your-online-passwords-secure/" },
  ];

  const getSimilarity = (a, b) => {
    return 1 - levenshtein.get(a.toLowerCase(), b.toLowerCase()) / Math.max(a.length, b.length);
  };

  const filteredGuides = searchTerm.trim()
  ? guides
      .map(guide => ({
        ...guide,
        similarity: Math.max(
          getSimilarity(searchTerm, guide.title),
          getSimilarity(searchTerm, guide.preview)
        )
      }))
      .filter(guide => guide.similarity > 0.3) // Adjust threshold as needed
      .sort((a, b) => b.similarity - a.similarity) // Sort by similarity
  : guides;
  
  return (
    <div className='guidePage'>
      <div className='intro'>
        <h1>Guides</h1>
        <p>Some links may navigate you away from this website.</p>
      </div>
      <SearchBar onSearch={setSearchTerm} />
      <ul>
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide, index) => (
            <li key={index}>
              {guide.external ? (
                <a className='guideLink' href ={guide.external} target="_blank" rel="noopener noreferrer">
                  <h3>{guide.title}</h3>
                  <p>{guide.preview}</p>
                </a>
              ) : (
              <Link className='guideLink' to={`/guide/${encodeURIComponent(guide.title)}`}>
                <h3>{guide.title}</h3>
                <p>{guide.preview}</p>
              </Link>
              )}
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