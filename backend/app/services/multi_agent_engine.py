import math
import random
from collections import defaultdict
from statistics import mean, stdev
from app.services.persona_engine import simulate_day
from app.services.external_llm import call_openai_prompt, call_huggingface_inference
from app.models.persona import Persona


def build_personas_from_audience(audience_spec: dict) -> list:
    # audience_spec can include regions and demographic targets
    regions = audience_spec.get("regions", ["Sri Lanka"])
    demographics = audience_spec.get("demographics", ["General"])

    personas = []
    for region in regions:
        for demo in demographics:
            pid = f"{region}-{demo}-{random.randint(1000,9999)}"
            traits = {
                "openness": random.uniform(0.2, 0.8),
                "trust_in_institutions": random.uniform(0.2, 0.9),
            }
            influence = random.uniform(0.3, 0.95)
            personas.append(Persona(persona_id=pid, demographic=f"{demo} ({region})", traits=traits, influence=influence))

    return personas


def run_simulation(concept: str, audience: dict, days: int =30, sampling=10):
    personas = build_personas_from_audience(audience)

    all_events = []
    per_region = defaultdict(list)
    per_demo = defaultdict(list)

    for day in range(1, days + 1):
        day_events = simulate_day(personas, concept, day)
        all_events.extend(day_events)
        for ev in day_events:
            # parse demographic -> includes region in parentheses
            demo = ev.get("persona_id")
            # sentiment
            s = float(ev.get("sentiment", 0.0))
            # map to region/demo heuristics from persona_id
            persona_label = next((p.demographic for p in personas if p.persona_id == ev.get("persona_id")), "Unknown")
            if "(" in persona_label and ")" in persona_label:
                name, region = persona_label.split("(")
                region = region.strip(") ")
            else:
                region = "Unknown"

            per_region[region].append(s)
            per_demo[persona_label].append(s)

    # Heatmap data: average and volatility
    heatmap = {}
    for region, vals in per_region.items():
        avg = mean(vals) if vals else 0.0
        vol = stdev(vals) if len(vals) > 1 else 0.0
        heatmap[region] = {"average": round(avg, 3), "volatility": round(vol, 3), "count": len(vals)}

    # Backlash probability: weighted by negative mass and volatility
    negative_mass = sum(1 for e in all_events if float(e.get("sentiment", 0.0)) < -0.2)
    negative_ratio = negative_mass / max(1, len(all_events))
    avg_vol = mean([v["volatility"] for v in heatmap.values()]) if heatmap else 0.0
    backlash_probability = int(max(0, min(100, round((negative_ratio * 0.7 + avg_vol * 0.3) * 100))))

    # Simulated social feed: sample posts + synthetic comments/hashtags using LLMs
    sample_posts = []
    sampled = random.sample(all_events, min(sampling, len(all_events))) if all_events else []
    for ev in sampled:
        persona_label = next((p.demographic for p in personas if p.persona_id == ev.get("persona_id")), "Persona")
        post_text = ev.get("post")
        prompt = f"Generate 3 short comments (with hashtags) replying to this post from diverse viewpoints: \nPost: {post_text}\nPersona: {persona_label}\n"
        # Try OpenAI first, fallback to HuggingFace
        comments = call_openai_prompt(prompt, max_tokens=120)
        if comments.startswith("(OpenAI"):
            comments = call_huggingface_inference("gpt2", prompt)

        sample_posts.append({
            "id": ev.get("event_id"),
            "persona": persona_label,
            "post": post_text,
            "sentiment": ev.get("sentiment"),
            "comments": comments,
        })

    # Backlash KPI as 0-100 already

    # Policy refinement: ask OpenAI to suggest wording improvements
    refinement_prompt = (
        f"The following policy text should be refined to reduce public backlash while preserving intent.\nPolicy:\n{concept}\n\n"
        "Suggest a revised short version (one paragraph) and 3 specific mitigation talking points."
    )
    refinement = call_openai_prompt(refinement_prompt, max_tokens=300)
    if refinement.startswith("(OpenAI"):
        refinement = "(OpenAI not available) Simplify language, reduce absolute claims, add benefits and safeguards."

    return {
        "heatmap": heatmap,
        "backlash_probability": backlash_probability,
        "sample_posts": sample_posts,
        "refinement": refinement,
        "summary": {
            "total_events": len(all_events),
            "negative_ratio": round(negative_ratio, 3),
            "avg_volatility": round(avg_vol, 3),
        }
    }
