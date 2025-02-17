import React from "react";

const FileUpload = ({ setPrediction }) => {
  const uploadFile = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      const response = await fetch("http://localhost:8000/api/upload-email/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.prediction) {
        setPrediction(data.prediction); // Update prediction in parent
      } else {
        alert("Error: No prediction received");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    <div>
      <h2>Upload a file to check for phishing</h2>
      <input type="file" onChange={uploadFile} />
    </div>
  );
};

export default FileUpload;
