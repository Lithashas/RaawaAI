import re

def extract_sentiment(text: str) -> float:
    match = re.search(r"Sentiment score:\s*(-?\d+\.?\d*)", text, re.IGNORECASE)
    if match:
        return float(match.group(1))

    match = re.search(r"(-?\d+\.?\d*)", text)
    return float(match.group(1)) if match else 0.0
