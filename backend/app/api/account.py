from fastapi import APIRouter, Query

from app.models.organization import OrganizationRequest
from app.models.payment_method import PaymentMethodRequest
from app.services.account_storage import (
    get_organizations,
    get_payment_methods,
    save_organization,
    save_payment_method,
)

router = APIRouter()


@router.post("/organizations")
def create_organization(req: OrganizationRequest):
    organization = save_organization(req.model_dump())
    return {"organization": organization}


@router.get("/organizations")
def list_organizations(owner_email: str = Query(default="")):
    organizations = get_organizations(owner_email)
    return {"organizations": organizations, "count": len(organizations)}


@router.post("/payment-methods")
def create_payment_method(req: PaymentMethodRequest):
    payment_method = save_payment_method(req.model_dump())
    return {"payment_method": payment_method}


@router.get("/payment-methods")
def list_payment_methods(owner_email: str = Query(default="")):
    payment_methods = get_payment_methods(owner_email)
    return {"payment_methods": payment_methods, "count": len(payment_methods)}