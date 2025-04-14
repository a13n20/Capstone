export const detectPhishing = async (text) => {
    try {
      const response = await fetch(`https://django-backend-848546903722.us-central1.run.app/api/phishing/detect/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to analyze text");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error detecting phishing:", error);
      return { error: error.message };
    }
  };
  