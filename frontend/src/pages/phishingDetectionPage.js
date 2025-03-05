import React, { useState } from "react";
import PhishingCheck from "../components/phishingCheck";
import FileUpload from "../components/fileUpload";

const PhishingDetectionPage = () => {
  const [prediction, setPrediction] = useState(null); // Define prediction state

  return (
    <div>
      <h1>Phishing Detection</h1>
      <p>Check if an email is phishing by either pasting text or uploading a file.</p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <PhishingCheck />
        </div>
        <div style={{ flex: 1 }}>
          <FileUpload setPrediction={setPrediction} />
        </div>
      </div>

      {prediction && (
        <div>
          <h2>Prediction: {prediction}</h2>
        </div>
      )}
    </div>
  );
};

export default PhishingDetectionPage;

  