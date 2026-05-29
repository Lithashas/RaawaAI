from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root_health():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {"status": "RaawaAI backend running", "version": "1.0.0"}


def test_start_simulation_returns_expected_payload():
    response = client.post(
        "/api/simulation/start",
        json={"concept": "Launch a new civic tech campaign", "audience": "GEN_Z"},
    )

    assert response.status_code == 200
    body = response.json()
    assert body["concept"] == "Launch a new civic tech campaign"
    assert body["audience"] == "GEN_Z"
    assert 0 <= body["backlash_probability"] <= 100
    assert isinstance(body["sample_posts"], list)
    assert body["sample_posts"]


def test_refine_and_report_endpoints_accept_simulation_id():
    simulation_id = "sim-test-123"

    refine_response = client.post(
        f"/api/simulation/{simulation_id}/refine",
        json={"policy": "Use clearer language"},
    )
    report_response = client.post(
        f"/api/simulation/{simulation_id}/report",
        json={"concept": "Use clearer language", "audience": "GEN_Z"},
    )

    assert refine_response.status_code == 200
    assert refine_response.json()["policy"] == "Use clearer language"

    assert report_response.status_code == 200
    assert report_response.json()["metadata"]["simulation_id"] == simulation_id
