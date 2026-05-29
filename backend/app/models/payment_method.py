from pydantic import BaseModel
from typing import Optional


class PaymentMethodRequest(BaseModel):
    owner_email: str
    cardholder_name: str
    card_number: str
    expiry_month: str
    expiry_year: str
    brand: Optional[str] = "Visa"
