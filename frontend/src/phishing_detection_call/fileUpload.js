export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch(`https://django-backend-848546903722.us-central1.run.app/api/phishing/upload/`, {
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
  