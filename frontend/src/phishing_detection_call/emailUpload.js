export const uploadEmailFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch("https://capstone-production-ae32.up.railway.app/api/phishing/upload/", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to analyze file");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error detecting phishing:", error);
      return { error: error.message };
    }
  };
  