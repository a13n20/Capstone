import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

MODEL_PATH = 'phishing_detection/phish_detect_V1'

try:
    tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
    model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)
    model.eval()
except Exception as e:
    print(f"Error loading phishing detection model: {str(e)}")

def detect_phishing(text: str):
    if not isinstance(text, str):
        raise ValueError("Input must be a string")

    try:
        inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True)
        if "token_type_ids" in inputs:
            del inputs["token_type_ids"]
        with torch.no_grad():    
            outputs = model(**inputs)
        logits = outputs.logits
        predicted_class = torch.argmax(logits, dim=-1).item()
        return {"is_phishing": bool(predicted_class)}
    
    except Exception as e:
        print(f"Error during phsighin detection: {str(e)}")
        return {"error": "Failed to process text"}