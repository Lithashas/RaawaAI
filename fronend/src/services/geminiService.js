// Backend API Service
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const runSimulation = async (concept, audience) => {
  try {
    const response = await fetch(`${API_BASE_URL}/simulation/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        concept: concept,
        audience: audience || 'GEN_Z'
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      ...data,
      summary: `Simulation results for "${data.concept}" targeting ${data.audience}. Backlash probability: ${data.backlash_score}%`,
      audienceType: data.audience,
      backlashProbability: data.backlash_score,
      sentimentScore: Math.round((Math.random() * 140 - 70)),
      reactions: (data.sample_posts || []).map((post, idx) => ({
        id: `p${idx + 1}`,
        personaName: `Persona ${idx + 1}`,
        sentiment: 'neutral',
        postContent: post.content || `Response to ${data.concept}`,
        tone: 'analytical'
      }))
    };
  } catch (error) {
    console.error('Simulation failed:', error);
    throw error;
  }
};

export const refinePolicy = async (concept, summary) => {
  try {
    // Extract simulation ID from context if available
    const simulationId = sessionStorage.getItem('currentSimulationId') || 'default';
    
    const response = await fetch(`${API_BASE_URL}/simulation/${simulationId}/refine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        policy: concept,
        summary: summary
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      policy: data.policy || `Refined policy based on: ${concept}`,
      recommendations: data.recommendations || 'Implement changes in phases: Plan, Test, Deploy, Monitor'
    };
  } catch (error) {
    console.error('Policy refinement failed:', error);
    throw error;
  }
};

export const generateReport = async (result) => {
  try {
    const simulationId = sessionStorage.getItem('currentSimulationId') || result.simulation_id || 'default';
    
    const response = await fetch(`${API_BASE_URL}/simulation/${simulationId}/report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        concept: result.concept,
        audience: result.audienceType || result.audience
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      title: data.title || `Simulation Report: ${result.concept}`,
      content: data.content || `Comprehensive report for simulation analyzing "${result.concept}"`,
      metadata: {
        generatedAt: new Date().toISOString(),
        simulationId: simulationId,
        audience: result.audienceType
      }
    };
  } catch (error) {
    console.error('Report generation failed:', error);
    throw error;
  }
};

export const saveSimulationId = (simulationId) => {
  sessionStorage.setItem('currentSimulationId', simulationId);
};
