import os
import requests
from app.config import OPENAI_API_KEY


def call_openai_prompt(prompt: str, max_tokens: int = 150) -> str:
    if not OPENAI_API_KEY:
        return """(OpenAI key missing) Suggest clearer, simpler wording and reduce jargon."""

    try:
        import openai
        openai.api_key = OPENAI_API_KEY
        resp = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=max_tokens,
            temperature=0.7,
        )
        return resp.choices[0].text.strip()
    except Exception as e:
        return f"(OpenAI error) {e}"


def call_huggingface_inference(model: str, inputs: str) -> str:
    hf_token = os.getenv("HF_API_KEY")
    if not hf_token:
        return "(HuggingFace key missing)" + inputs[:200]

    headers = {"Authorization": f"Bearer {hf_token}"}
    url = f"https://api-inference.huggingface.co/models/{model}"
    try:
        r = requests.post(url, headers=headers, json={"inputs": inputs}, timeout=30)
        r.raise_for_status()
        data = r.json()
        # Model outputs can vary; try to extract text
        if isinstance(data, dict) and "error" in data:
            return f"(HF error) {data['error']}"
        if isinstance(data, list):
            first = data[0]
            if isinstance(first, dict) and "generated_text" in first:
                return first["generated_text"]
            if isinstance(first, str):
                return first
        if isinstance(data, dict) and "generated_text" in data:
            return data["generated_text"]
        return str(data)
    except Exception as e:
        return f"(HF request failed) {e}"
