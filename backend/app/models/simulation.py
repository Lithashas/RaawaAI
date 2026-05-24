from pydantic import BaseModel
from typing import Dict, Union

class SimulationRequest(BaseModel):
    concept: str
    audience: Union[str, Dict]
