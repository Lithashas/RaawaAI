import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SimulationForm from './components/SimulationForm';
import Dashboard from './components/Dashboard';
import RefinementPanel from './components/RefinementPanel';
import ReportViewer from './components/ReportViewer';
import Organizations from './components/Organizations';
import Reports from './components/Reports';
import StrategicReport from './components/StrategicReport';
import OptimizationReport from './components/OptimizationReport';
import Upgrade from './components/Upgrade';
import ReviewerDashboard from './components/ReviewerDashboard';
import Profile from './components/Profile';
import NewOrganization from './components/NewOrganization';
import Footer from './components/Footer';
import { runSimulation, refinePolicy, generateReport } from './services/geminiService';

const App = () => {
  const [view, setView] = useState('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [refinement, setRefinement] = useState(null);
  const [report, setReport] = useState(null);
  const [isRefining, setIsRefining] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const handleStartSimulation = async (concept, audience) => {
    setIsLoading(true);
    setRefinement(null);
    try {
      const data = await runSimulation(concept, audience);
      setResult(data);
    } catch (error) {
      console.error("Simulation failed:", error);
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
          onOrganizations={() => setView('organizations')}
          onReports={() => setView('reports')}
          onUpgrade={() => setView('upgrade')}
          onReviewer={() => setView('reviewer')}
          onProfile={() => setView('profile')}
          showNav={['landing','simulator','organizations','reports','strategicReport','optimizationReport','upgrade','reviewer','profile'].includes(view)}
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
          />
        )}

        {view === 'signup' && (
          <SignUp 
            onBack={() => setView('landing')} 
            onSignIn={() => setView('login')} 
          />
        )}
        
        {view === 'simulator' && (
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-[calc(100vh-80px)]">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-black mb-4 tracking-tight">RAAWA AI</h1>
              <p className="text-slate-500 font-medium text-lg uppercase tracking-widest">
                Predicting Human Resonance via Multi-Agent Personas
              </p>
            </div>

            <SimulationForm onRun={handleStartSimulation} isLoading={isLoading} />

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

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
