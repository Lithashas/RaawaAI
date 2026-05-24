from fastapi import APIRouter
import uuid

from app.models.simulation import SimulationRequest
from app.models.persona import Persona
from app.services.persona_engine import simulate_day
from app.services.dynamodb_service import save_simulation, save_refinement, save_report

router = APIRouter()

@router.post("/simulation/start")
def start_simulation(req: SimulationRequest):
    simulation_id = str(uuid.uuid4())
    
    personas = [
        Persona(
            persona_id=str(uuid.uuid4()),
            demographic="Sri Lankan Gen-Z Urban",
            traits={"skeptical": 0.8, "tech_friendly": 0.6},
            influence=0.9
        ),
        Persona(
            persona_id=str(uuid.uuid4()),
            demographic="Rural Farmers",
            traits={"tradition": 0.9, "risk_averse": 0.8},
            influence=0.6
        )
    ]

    all_events = []

    for day in range(1, 31):
        all_events.extend(simulate_day(personas, req.concept, day))

    avg_sentiment = sum(e["sentiment"] for e in all_events) / len(all_events)
    backlash_score = int((1 - avg_sentiment) * 50)
    
    # Save to DynamoDB
    audience_type = req.audience if isinstance(req.audience, str) else req.audience.get("type", "general")
    try:
        save_simulation(
            simulation_id=simulation_id,
            concept=req.concept,
            audience=audience_type,
            backlash_score=backlash_score,
            sample_posts=all_events[:5]
        )
    except Exception as e:
        print(f"Warning: Could not save to DynamoDB: {e}")

    return {
        "simulation_id": simulation_id,
        "concept": req.concept,
        "audience": audience_type,
        "backlash_score": backlash_score,
        "sample_posts": all_events[:5]
    }


@router.post("/simulation/{simulation_id}/refine")
def refine_simulation(simulation_id: str, refinement_input: dict):
    """Refine simulation results"""
    refinement_data = {
        "policy": refinement_input.get("policy", f"Refined policy based on simulation {simulation_id}"),
        "recommendations": "Implement changes in phases: Plan, Test, Deploy, Monitor",
        "metadata": {"simulation_id": simulation_id}
    }
    
    try:
        save_refinement(simulation_id, refinement_data)
    except Exception as e:
        print(f"Warning: Could not save refinement to DynamoDB: {e}")
    
    return refinement_data


@router.post("/simulation/{simulation_id}/report")
def generate_report_endpoint(simulation_id: str, report_input: dict):
    """Generate report for simulation"""
    report_data = {
        "title": f"Simulation Report: {report_input.get('concept', 'RaawaAI Analysis')}",
        "content": f"Comprehensive analysis based on simulation {simulation_id}",
        "metadata": {"simulation_id": simulation_id}
    }
    
    try:
        save_report(simulation_id, report_data)
    except Exception as e:
        print(f"Warning: Could not save report to DynamoDB: {e}")
    
    return report_data


@router.get("/simulation/{simulation_id}")
def get_simulation_result(simulation_id: str):
    """Get simulation results from DynamoDB"""
    from app.services.dynamodb_service import get_simulation
    
    result = get_simulation(simulation_id)
    if result:
        return result
    return {"error": "Simulation not found"}


@router.get("/simulations")
def list_simulations():
    """List all simulations"""
    from app.services.dynamodb_service import get_all_simulations
    
    simulations = get_all_simulations()
    return {"simulations": simulations, "count": len(simulations)}
