import React, { useState } from "react";
import PhishingCheck from "../components/phishingCheck";
import FileUpload from "../components/fileUpload";

import "./pages.css";

const PhishingDetectionPage = () => {
  return (
    <div className='guidePage'>
      <h1>Phishing Detection</h1>
      <p>Check if an email is phishing by either pasting text or uploading a file.</p>

      <div className='columns'>
        <div className='box'>
          <PhishingCheck />
        </div>
        <div className='box'>
          <FileUpload />
        </div>
      </div>

      <div className='columns'>
        <div className='box'>
          <h3>How to Download an email</h3>
          <p>Downloading emails may be different depending on the website you use, but the general idea should be the same.</p>
          <ul className='steps'>
            <li>Find the three dots at the upper right corner of the email, hover over it, and move the mouse down to "Download." If there are options, choose to download the email as a EML file.</li>
            <li>Click "Choose File" above. Navigate to your "Downloads" folder and find the email you just downloaded.</li>
          </ul>
        </div>
        <div className='box'>
          <img src='/images/downloadEmail.png' alt='Three dots in the upper right, with a dropdown menu of options.' />
        </div>
      </div>
    </div>
  );
};

export default PhishingDetectionPage;

