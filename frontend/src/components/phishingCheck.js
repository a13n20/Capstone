import React, { useState } from "react";
import { detectPhishing } from "../phishing_detection_call/phishingDetection";

const PhishingCheck = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const response = await detectPhishing(text);
    setResult(response);
  };

  return (
    <div>
      <h2>Paste Text</h2>
      <p>Copy the text of the suspicious email into the textbox and click "CHECK."</p>
      <textarea
        placeholder="Paste your email/message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>

      {result && (
        <div className={`phishingResult ${result.is_phishing ? 'phishing' : 'no-phishing'}`}>
          <p>{result.is_phishing ? "Phishing Detected" : "No Phishing Detected"}</p>
        </div>
      )}
    </div>
  );
};

export default PhishingCheck;
