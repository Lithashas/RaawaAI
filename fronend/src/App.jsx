import React, { useState } from 'react';
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
      <main className="flex-grow relative">
        {/* Simple route guard component */}
        {/** Usage: <RequireAuth><ProtectedComponent /></RequireAuth> */}

        {/** RequireAuth closes over `isAuthenticated` and `location` */}
        {/** eslint-disable-next-line react/prop-types */}
        {/* inline wrapper */}
        
        <Routes>
          <Route path="/" element={<div className="max-w-7xl mx-auto px-6"><Hero onStart={() => navigate('/simulator')} onReview={() => navigate('/reviewer')} /></div>} />

          <Route path="/login" element={<Login onBack={() => navigate('/')} onSignUp={() => navigate('/signup')} onSignInSuccess={(email, password) => { setUserEmail(email); setUserPassword(password); setIsAuthenticated(true); navigate('/agency-dashboard'); setShowSavePassword(true); }} />} />

          <Route path="/signup" element={<SignUp onBack={() => navigate('/')} onSignIn={() => navigate('/login')} onSignUpSuccess={(email, password) => { setUserEmail(email); setUserPassword(password); setIsAuthenticated(true); navigate('/agency-dashboard'); setShowSavePassword(true); }} />} />

          {/* Protected routes */}
          <Route path="/agency-dashboard" element={
            isAuthenticated ? (
              <AgencyDashboard onNewSimulation={() => navigate('/simulator')} onSettings={() => { setLastView('/agency-dashboard'); navigate('/settings'); }} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          } />

          <Route path="/settings" element={
            isAuthenticated ? (
              <Settings onBack={() => { navigate(lastView || '/'); }} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          } />

          <Route path="/profile" element={
            isAuthenticated ? (
              <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Profile /></div>
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          } />

          <Route path="/organizations" element={
            isAuthenticated ? (
              <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Organizations onBack={() => navigate('/simulator')} onCreateOrg={() => navigate('/organizations/new')} /></div>
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          } />

          <Route path="/organizations/new" element={
            isAuthenticated ? (
              <div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><NewOrganization onBack={() => navigate('/organizations')} /></div>
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          } />

          <Route path="/simulator" element={<div className="max-w-7xl mx-auto px-6 py-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-[calc(100vh-80px)]">
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
            </div>} />

          <Route path="/reports" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Reports onBack={() => navigate('/simulator')} onDetailedReport={() => navigate('/reports/strategic')} onOptimizeConcept={() => navigate('/reports/optimization')} /></div>} />

          <Route path="/reports/strategic" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><StrategicReport onBack={() => navigate('/reports')} /></div>} />

          <Route path="/reports/optimization" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><OptimizationReport onBack={() => navigate('/reports')} /></div>} />

          <Route path="/upgrade" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Upgrade onBack={() => navigate('/simulator')} /></div>} />

          <Route path="/reviewer" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><ReviewerDashboard onBack={() => navigate('/simulator')} /></div>} />

          <Route path="/profile" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Profile /></div>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          <Route path="/" element={<div className="max-w-7xl mx-auto px-6"><Hero onStart={() => navigate('/simulator')} onReview={() => navigate('/reviewer')} /></div>} />

          <Route path="/login" element={<Login onBack={() => navigate('/')} onSignUp={() => navigate('/signup')} onSignInSuccess={(email, password) => { setUserEmail(email); setUserPassword(password); setIsAuthenticated(true); navigate('/agency-dashboard'); setShowSavePassword(true); }} />} />

          <Route path="/signup" element={<SignUp onBack={() => navigate('/')} onSignIn={() => navigate('/login')} onSignUpSuccess={(email, password) => { setUserEmail(email); setUserPassword(password); setIsAuthenticated(true); navigate('/agency-dashboard'); setShowSavePassword(true); }} />} />

          <Route path="/settings" element={isAuthenticated ? <Settings onBack={() => { navigate(lastView || '/'); }} /> : navigate('/login')} />

          <Route path="/simulator" element={
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
          } />

          <Route path="/organizations" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Organizations onBack={() => navigate('/simulator')} onCreateOrg={() => navigate('/organizations/new')} /></div>} />

          <Route path="/organizations/new" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><NewOrganization onBack={() => navigate('/organizations')} /></div>} />

          <Route path="/reports" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Reports onBack={() => navigate('/simulator')} onDetailedReport={() => navigate('/reports/strategic')} onOptimizeConcept={() => navigate('/reports/optimization')} /></div>} />

          <Route path="/reports/strategic" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><StrategicReport onBack={() => navigate('/reports')} /></div>} />

          <Route path="/reports/optimization" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><OptimizationReport onBack={() => navigate('/reports')} /></div>} />

          <Route path="/upgrade" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Upgrade onBack={() => navigate('/simulator')} /></div>} />

          <Route path="/reviewer" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><ReviewerDashboard onBack={() => navigate('/simulator')} /></div>} />

          <Route path="/profile" element={<div className="max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]"><Profile /></div>} />

          <Route path="/" />
        </Routes>
        
        
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
