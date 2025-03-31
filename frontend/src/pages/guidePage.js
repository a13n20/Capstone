import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/searchBar';
import './pages.css';

// Previews
import { creditBureauFreeze } from './guides/creditBureauFreeze';

const GuidesPage = () => {
  const guides = [
    { title: creditBureauFreeze.title, preview: creditBureauFreeze.preview, external: null },
    { title: "Best Password Managers for the USA", preview: "Secure your online accounts, money, and reputation with the top password managers.", external: "https://us.cybernews.com/lp/best-password-managers-us/?campaignId=20496310929&adgroupId=152532331189&adId=674697923228&targetId=kwd-107840712&device=c&gunique=Cj0KCQjw16O_BhDNARIsAC3i2GBduhMsNutMsevgXMFmAg5ZonRN5BT2tLzaZI4QCp6-q7br5CJ4SsAaAgL_EALw_wcB&gad_source=1&gbraid=0AAAAACyNk22yYvA-re6GDfkC4PO77S0I8&gclid=Cj0KCQjw16O_BhDNARIsAC3i2GBduhMsNutMsevgXMFmAg5ZonRN5BT2tLzaZI4QCp6-q7br5CJ4SsAaAgL_EALw_wcB" },
    { title: "How to use two-step verification with your Microsoft account", preview: "To increase the security of your account, you can require two steps to sign in.", external: "https://support.microsoft.com/en-us/account-billing/how-to-use-two-step-verification-with-your-microsoft-account-c7910146-672f-01e9-50a0-93b4585e7eb4" },
    { title: "Two-factor authentication for Apple Account", preview: "Two-factor authentication is designed to make sure that you’re the only person who can access your account. Learn how it works and how to turn on two-factor authentication.", external: "https://support.apple.com/en-us/102660" },
    { title: "Turn on 2-Step Verification - Google Account Help", preview: "With 2-Step Verification, or two-factor authentication, you can add an extra layer of security to your account in case your password is stolen.", external: "https://support.google.com/accounts/answer/185839?hl=en&co=GENIE.Platform%3DAndroid" },
    { title: "5 top tips for keeping your online passwords secure", preview: "Dermot Williams, Managing Director of Threatscape shares his top five tips for securing online passwords.", external: "https://www.threatscape.com/cyber-security-blog/top-5-tips-for-keeping-your-online-passwords-secure/" },
    { title: "Use Strong Passwords", preview: "Create long, random, unique passwords with a password manager for safer accounts.", external: "https://www.cisa.gov/secure-our-world/use-strong-passwords" },
    { title: "Protect yourself from phishing", preview: "Phishing (pronounced: fishing) is an attack that attempts to steal your money, or your identity, by getting you to reveal personal information -- such as credit card numbers, bank information, or passwords -- on websites that pretend to be legitimate.", external: "https://support.microsoft.com/en-us/windows/protect-yourself-from-phishing-0c7ea947-ba98-3bd9-7184-430e1f860a44" },
    { title: "How To Recognize and Avoid Phishing Scams", preview: "Scammers use email or text messages to trick you into giving them your personal and financial information. But there are several ways to protect yourself.", external: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" },
    { title: "What To Do After a Data Breach", preview: "Did you get a notice that says your personal information was exposed in a data breach? Visit IdentityTheft.gov/databreach to learn what you can do to protect your identity.", external: "https://consumer.ftc.gov/media/79862" },
    { title: "Here's What You Should Do After a Data Breach", preview: "If you’re notified that your personal information was exposed in a data breach, act immediately to change your passwords, add a fraud alert to your credit reports and consider placing a security freeze on your credit reports.", external: "https://www.experian.com/blogs/ask-experian/data-breach-five-things-to-do-after-your-information-has-been-stolen/" },
    { title: "Online Shopping - Security Tips", preview: "Shopping online? A little research can help you get the best deal and avoid unnecessary hassles.", external: "https://consumer.ftc.gov/media/79929" },

  ];

  const [filteredGuides, setFilteredGuides] = useState(guides);
  
  return (
    <div className='guidePage'>
      <div className='intro'>
        <h1>Guides</h1>
        <p>Some links may navigate you away from this website.</p>
      </div>
      <SearchBar data={guides} onSearch={setFilteredGuides} />
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