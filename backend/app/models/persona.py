from pydantic import BaseModel
from typing import Dict

class Persona(BaseModel):
    persona_id: str
    demographic: str
    traits: Dict[str, float]
    influence: float
