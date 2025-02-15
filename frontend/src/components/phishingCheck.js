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
      <h2>Phishing Detector</h2>
      <textarea
        placeholder="Paste your email/message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>

      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PhishingCheck;
