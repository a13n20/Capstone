import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/phishing/upload/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      
      if (data.result && data.result.is_phishing !== undefined) {
        setResult(data.result.is_phishing ? "Phishing Detected" : "No Phishing Detected");
      } else {
        alert("Error: No prediction received");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      alert("File upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="intro">
      <h2>Upload Email File</h2>
      <p>Upload the email file below and click "CHECK." If you need help figuring out how to download an email, refer to the content below.</p>
      <input
        type="file"
        accept=".txt,.eml,.html"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>CHECK</button>

      {loading && <p className="loadingResult">Analyzing file...</p>}

      {result && (
        <div className={`phishingResult ${result === "Phishing Detected" ? "phishing" : "no-phishing"}`}>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

