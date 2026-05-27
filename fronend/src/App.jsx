import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
import NewOrganization from './components/NewOrganization';
import Reports from './components/Reports';
import StrategicReport from './components/StrategicReport';
import OptimizationReport from './components/OptimizationReport';
import Upgrade from './components/Upgrade';
import ReviewerDashboard from './components/ReviewerDashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import SavePasswordDialog from './components/SavePasswordDialog';
import Footer from './components/Footer';
import { runSimulation, refinePolicy, generateReport, saveSimulationId } from './services/geminiService';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lastView, setLastView] = useState('/agency-dashboard');
  const [userRole] = useState('Agent');

  const [result, setResult] = useState(null);
  const [refinement, setRefinement] = useState(null);
  const [report, setReport] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const [showSavePassword, setShowSavePassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const requireAuth = (element) => {
    if (isAuthenticated) return element;
    return <Navigate to="/login" state={{ from: location }} replace />;
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    const raw = sessionStorage.getItem('pendingSimulation');
    if (!raw) return;

    try {
      const pending = JSON.parse(raw);
      if (pending?.concept) {
        sessionStorage.removeItem('pendingSimulation');
        handleStartSimulation(pending.concept, pending.audience);
      }
    } catch {
      sessionStorage.removeItem('pendingSimulation');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleStartSimulation = async (concept, audience) => {
    if (!isAuthenticated) {
      sessionStorage.setItem('pendingSimulation', JSON.stringify({ concept, audience }));
      navigate('/login', { state: { from: { pathname: '/simulator' } }, replace: true });
      return;
    }

    setIsLoading(true);
    setRefinement(null);
    setReport(null);

    try {
      const data = await runSimulation(concept, audience);
      setResult(data);
      if (data?.simulation_id) {
        saveSimulationId(data.simulation_id);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to run simulation. Please try again.');
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
      console.error(error);
      alert('Failed to refine concept. Please try again.');
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
      console.error(error);
      alert('Failed to generate report. Please try again.');
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setResult(null);
    setRefinement(null);
    setReport(null);
    navigate('/');
  };

  const view = location.pathname.includes('dashboard') || location.pathname.includes('settings') ? 'agency-dashboard' : 'landing';

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col relative">
      <Header
        view={view}
        userRole={userRole}
        onHome={() => navigate('/')}
        onStart={() => navigate('/simulator')}
        onSignIn={() => navigate('/login')}
        onSignOut={handleSignOut}
        onSettings={() => {
          setLastView(location.pathname);
          navigate('/settings');
        }}
        onReports={() => navigate('/reports')}
        onOrganizations={() => navigate('/organizations')}
        onUpgrade={() => navigate('/upgrade')}
        onProfile={() => navigate('/profile')}
        onReviewer={() => navigate('/reviewer')}
      />

      <main className="flex-grow relative">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route
            path="/"
            element={<div className="max-w-7xl mx-auto px-6"><Hero onStart={() => navigate('/simulator')} onReview={() => navigate('/reviewer')} /></div>}
          />

          <Route
            path="/login"
            element={
              <Login
                onBack={() => navigate('/')}
                onSignUp={() => navigate('/signup')}
                onSignInSuccess={(email, password) => {
                  setUserEmail(email);
                  setUserPassword(password);
                  setIsAuthenticated(true);
                  const redirectTo = location.state?.from?.pathname || '/agency-dashboard';
                  navigate(redirectTo, { replace: true });
                  setShowSavePassword(true);
                }}
              />
            }
          />

          <Route
            path="/signup"
            element={
              <SignUp
                onBack={() => navigate('/')}
                onSignIn={() => navigate('/login')}
                onSignUpSuccess={(email, password) => {
                  setUserEmail(email);
                  setUserPassword(password);
                  setIsAuthenticated(true);
                  const redirectTo = location.state?.from?.pathname || '/agency-dashboard';
                  navigate(redirectTo, { replace: true });
                  setShowSavePassword(true);
                }}
              />
            }
          />

          <Route path="/agency-dashboard" element={requireAuth(<AgencyDashboard onNewSimulation={() => navigate('/simulator')} onSettings={() => { setLastView('/agency-dashboard'); navigate('/settings'); }} />)} />
          <Route path="/settings" element={requireAuth(<Settings onBack={() => navigate(lastView || '/agency-dashboard')} />)} />
          <Route path="/profile" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Profile /></div>)} />
          <Route path="/organizations" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Organizations onBack={() => navigate('/simulator')} onCreateOrg={() => navigate('/organizations/new')} /></div>)} />
          <Route path="/organizations/new" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><NewOrganization onBack={() => navigate('/organizations')} /></div>)} />

          <Route
            path="/simulator"
            element={
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

                {refinement && <RefinementPanel refinement={refinement} onClose={() => setRefinement(null)} />}
              </div>
            }
          />

          <Route path="/reports" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Reports onBack={() => navigate('/simulator')} onDetailedReport={() => navigate('/reports/strategic')} onOptimizeConcept={() => navigate('/reports/optimization')} /></div>)} />
          <Route path="/reports/strategic" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><StrategicReport onBack={() => navigate('/reports')} /></div>)} />
          <Route path="/reports/optimization" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><OptimizationReport onBack={() => navigate('/reports')} /></div>)} />
          <Route path="/upgrade" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Upgrade onBack={() => navigate('/simulator')} /></div>)} />
          <Route path="/reviewer" element={requireAuth(<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><ReviewerDashboard onBack={() => navigate('/simulator')} /></div>)} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {report && <ReportViewer report={report} onClose={() => setReport(null)} />}

      {showSavePassword && (
        <SavePasswordDialog
          email={userEmail}
          password={userPassword}
          onSave={() => setShowSavePassword(false)}
          onNever={() => setShowSavePassword(false)}
          onDismiss={() => setShowSavePassword(false)}
        />
      )}

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
