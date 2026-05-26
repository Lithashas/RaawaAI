import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AgencyDashboard from './components/AgencyDashboard';
import SimulationForm from './components/SimulationForm';
import Dashboard from './components/Dashboard';
import RefinementPanel from './components/RefinementPanel';
import ReportViewer from './components/ReportViewer';
import Organizations from './components/Organizations';
import Reports from './components/Reports';
import StrategicReport from './components/StrategicReport';
import OptimizationReport from './components/OptimizationReport';
import NewOrganization from './components/NewOrganization';
import Upgrade from './components/Upgrade';
import ReviewerDashboard from './components/ReviewerDashboard';
import Profile from './components/Profile';
import Settings from './components/Settings.jsx';
import Footer from './components/Footer';
import SavePasswordDialog from './components/SavePasswordDialog';
import { runSimulation, refinePolicy, generateReport, saveSimulationId } from './services/geminiService';

const App = () => {
  const [view, setView] = useState('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [refinement, setRefinement] = useState(null);
  const [report, setReport] = useState(null);
  const [isRefining, setIsRefining] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [showSavePassword, setShowSavePassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [lastView, setLastView] = useState('landing');

  const handleStartSimulation = async (concept, audience) => {
    setIsLoading(true);
    setRefinement(null);
    setReport(null);
    try {
      const data = await runSimulation(concept, audience);
      setResult(data);
      // Save simulation ID for later API calls
      if (data.simulation_id) {
        saveSimulationId(data.simulation_id);
      }
    } catch (error) {
      console.error("Simulation failed:", error);
      alert('Failed to run simulation. Please ensure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefine = async () => {
    if (!result) return;
    setIsRefining(true);
    try {
      const data = await refinePolicy(result.concept, result.summary);
      setRefinement(data);
    } catch (error) {
      console.error("Refinement failed:", error);
      alert('Failed to refine policy.');
    } finally {
      setIsRefining(false);
    }
  };

  const handleGenerateReport = async () => {
    if (!result) return;
    setIsGeneratingReport(true);
    try {
      const data = await generateReport(result);
      setReport(data);
    } catch (error) {
      console.error("Report generation failed:", error);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 selection:bg-blue-500/30 flex flex-col">
      {view !== 'signup' && (
        <Header 
          onHome={() => setView('landing')}
          onSignIn={() => setView('login')}
          onStart={() => setView('simulator')}
          onSignOut={() => setView('landing')}
          onSettings={() => {
            setLastView(view);
            setView('settings');
          }}
          view={view}
        />
      )}

      <main className="flex-grow relative">
        {view === 'landing' && (
          <div className="max-w-7xl mx-auto px-6">
            <Hero onStart={() => setView('simulator')} onReview={() => setView('reviewer')} />
          </div>
        )}
        
        {view === 'login' && (
          <Login 
            onBack={() => setView('landing')} 
            onSignUp={() => setView('signup')} 
            onSignInSuccess={(email, password) => {
              setUserEmail(email);
              setUserPassword(password);
              setView('agency-dashboard');
              setShowSavePassword(true);
            }}
          />
        )}

        {view === 'signup' && (
          <SignUp 
            onBack={() => setView('landing')} 
            onSignIn={() => setView('login')} 
            onSignUpSuccess={(email, password) => {
              setUserEmail(email);
              setUserPassword(password);
              setView('agency-dashboard');
              setShowSavePassword(true);
            }}
          />
        )}

        {view === 'agency-dashboard' && (
          <AgencyDashboard 
            onNewSimulation={() => setView('simulator')} 
            onSettings={() => {
              setLastView('agency-dashboard');
              setView('settings');
            }}
          />
        )}
        
        {view === 'settings' && (
          <Settings onBack={() => setView(lastView)} />
        )}
        
        {view === 'simulator' && (
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-[calc(100vh-80px)]">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-[#69D2E9] to-[#3498DB] bg-clip-text text-transparent">RaawaAI</h1>
              <p className="text-slate-500 font-medium text-lg uppercase tracking-widest">
                Predicting Human Resonance via Multi-Agent Personas
              </p>
            </div>

            <SimulationForm onSubmit={handleStartSimulation} isLoading={isLoading} />

            {result && (
              <Dashboard 
                result={result} 
                onRefine={handleRefine}
                onGenerateReport={handleGenerateReport}
                isRefining={isRefining}
                isGeneratingReport={isGeneratingReport}
              />
            )}

            {refinement && (
              <RefinementPanel 
                refinement={refinement} 
                onClose={() => setRefinement(null)} 
              />
            )}
          </div>
        )}

        {view === 'organizations' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <Organizations 
              onBack={() => setView('simulator')} 
              onCreateOrg={() => setView('newOrganization')} 
            />
          </div>
        )}

        {view === 'reports' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <Reports 
              onBack={() => setView('simulator')} 
              onDetailedReport={() => setView('strategicReport')} 
              onOptimizeConcept={() => setView('optimizationReport')} 
            />
          </div>
        )}

        {view === 'strategicReport' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <StrategicReport onBack={() => setView('reports')} />
          </div>
        )}

        {view === 'optimizationReport' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <OptimizationReport onBack={() => setView('reports')} />
          </div>
        )}

        {view === 'newOrganization' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <NewOrganization onBack={() => setView('organizations')} />
          </div>
        )}

        {view === 'upgrade' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <Upgrade onBack={() => setView('simulator')} />
          </div>
        )}

        {view === 'reviewer' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <ReviewerDashboard onBack={() => setView('simulator')} />
          </div>
        )}

        {view === 'profile' && (
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
            <Profile />
          </div>
        )}
      </main>

      <Footer />

      {report && (
        <ReportViewer 
          report={report} 
          onClose={() => setReport(null)} 
        />
      )}

      {showSavePassword && (
        <SavePasswordDialog 
          email={userEmail}
          password={userPassword}
          onSave={() => setShowSavePassword(false)}
          onNever={() => setShowSavePassword(false)}
          onDismiss={() => setShowSavePassword(false)}
        />
      )}

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
