export const detectPhishing = async (text) => {
    try {
      const response = await fetch("http://localhost:8000/api/phishing/detect/", {
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
  