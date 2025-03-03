import React, { useState } from "react";

const FileUpload = ({ setPrediction }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/phishing/upload/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      
      if (data.result && data.result.is_phishing !== undefined) {
        setPrediction(data.result.is_phishing ? "Phishing detected" : "No phishing detected");
      } else {
        alert("Error: No prediction received");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      alert("File upload failed.");
    }
  };

  return (
    <div>
      <h3>Upload Email File</h3>
      <input
        type="file"
        accept=".txt,.eml,.html"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Check File</button>
    </div>
  );
};

export default FileUpload;

