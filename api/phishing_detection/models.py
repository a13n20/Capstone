from django.db import models
from transformers import AutoTokenizer, AutoModelForSequenceClassification

MODEL_PATH = 'phishing_detection/phish_detect_V1'

tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)

def detect_phishing(text: str):
    inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True)
    outputs = model(**inputs)
    logits = outputs.logits
    return logits.tolist()