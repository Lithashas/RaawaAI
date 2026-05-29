from pydantic import BaseModel
from typing import Optional


class OrganizationRequest(BaseModel):
    owner_email: str
    name: str
    sector: str
    community: str
    description: Optional[str] = ""
