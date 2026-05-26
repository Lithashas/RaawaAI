import hashlib
from app.config import OPENAI_API_KEY


def _clamp(value, minimum=-1.0, maximum=1.0):
        return max(minimum, min(maximum, value))

def generate_persona_reaction(persona, concept, day):
        trait_values = list(persona.traits.values()) if persona.traits else []
        trait_bias = sum(trait_values) / len(trait_values) if trait_values else 0.5

        seed = hashlib.sha256(f"{persona.demographic}|{concept}|{day}".encode("utf-8")).hexdigest()
        noise = (int(seed[:8], 16) / 0xFFFFFFFF) - 0.5
        sentiment_score = _clamp(((trait_bias - 0.5) * 1.4) + (noise * 0.9))
        sentiment_score = round(sentiment_score, 2)

        if sentiment_score > 0.2:
            stance = "supportive"
            reaction = "sees the idea as practical and worth trying"
        elif sentiment_score < -0.2:
            stance = "concerned"
            reaction = "worries the message may create confusion or resistance"
        else:
            stance = "mixed"
            reaction = "is undecided and wants clearer context before reacting"

        concept_excerpt = concept.strip().replace("\n", " ")[:120]
        return (
                f"Reaction: {persona.demographic} is {stance} about day {day}. "
                f"Post: {reaction} regarding \"{concept_excerpt}\". "
                f"Sentiment score: {sentiment_score}"
        )
