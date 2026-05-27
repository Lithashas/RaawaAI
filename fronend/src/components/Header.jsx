import React, { useState } from 'react';

const Header = ({ onStart, onHome, onSignIn, onSignOut, onSettings, onReports, onOrganizations, onUpgrade, onProfile, onReviewer, view, userRole = 'Agent' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDashboard = view === 'agency-dashboard';
  const isSettings = view === 'settings';
  const showDashboardUI = isDashboard || isSettings;

  return (
    <header className="w-full bg-[#050816] border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onHome}
          >
            <div className="w-10 h-10 relative flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#49C5E0]" />
                <path d="M12 28V12H20C24 12 26 14 26 18C26 21 24 23 20 24L26 30V32H23L17 25H15V32H12Z" fill="url(#grad2-header)" />
                <defs>
                  <linearGradient id="grad2-header" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#49C5E0', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1061CC', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#69D2E9] to-[#3498DB] bg-clip-text text-transparent">
              RaawaAI
            </span>
          </div>
          {showDashboardUI && (
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={(e) => { e.stopPropagation(); onStart && onStart(); }}
                className="px-4 py-2 rounded-md text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200"
              >
                Simulator
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onReports && onReports(); }}
                className="px-4 py-2 rounded-md text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200"
              >
                Reports
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onOrganizations && onOrganizations(); }}
                className="px-4 py-2 rounded-md text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200"
              >
                Organizations
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onUpgrade && onUpgrade(); }}
                className="px-4 py-2 rounded-md text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200"
              >
                Upgrade
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onSettings && onSettings(); }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isSettings 
                    ? 'bg-[#1a4f63]/40 text-[#69D2E9] border border-[#69D2E9]/20' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-200'
                }`}
              >
                Settings
              </button>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {showDashboardUI ? (
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-sm font-medium text-slate-300">Role : {userRole}</span>
              </div>
              <button 
                onClick={onProfile}
                className="text-slate-400 hover:text-white text-sm font-semibold transition"
              >
                Profile
              </button>
              <button 
                onClick={onReviewer}
                className="text-slate-400 hover:text-white text-sm font-semibold transition"
              >
                Reviewer
              </button>
              <button 
                onClick={onSignOut}
                className="bg-[#1e1b4b] hover:bg-[#2e2b5b] text-slate-200 px-6 py-2.5 rounded-md text-sm font-medium transition-all"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={onSignIn}
                className="text-slate-400 hover:text-white text-sm font-semibold transition"
              >
                Sign In
              </button>
              <button 
                onClick={onStart}
                className="bg-[#1a4f63] hover:bg-[#236a85] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/10 transition-all active:scale-95"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-200"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    {mobileOpen && (
      <div className="md:hidden absolute left-0 right-0 top-full bg-[#050816] border-t border-white/5 z-40 animate-in slide-in-from-top-3 duration-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2 transition-all duration-200 ease-out">
          <button onClick={() => { setMobileOpen(false); onStart && onStart(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Simulator</button>
          <button onClick={() => { setMobileOpen(false); onReports && onReports(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Reports</button>
          <button onClick={() => { setMobileOpen(false); onOrganizations && onOrganizations(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Organizations</button>
          <button onClick={() => { setMobileOpen(false); onUpgrade && onUpgrade(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Upgrade</button>
          <button onClick={() => { setMobileOpen(false); onProfile && onProfile(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Profile</button>
          <button onClick={() => { setMobileOpen(false); onReviewer && onReviewer(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Reviewer</button>
          <button onClick={() => { setMobileOpen(false); onSettings && onSettings(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Settings</button>
          <div className="border-t border-white/5 mt-2 pt-2">
            {showDashboardUI ? (
              <button onClick={() => { setMobileOpen(false); onSignOut && onSignOut(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Sign Out</button>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => { setMobileOpen(false); onSignIn && onSignIn(); }} className="px-3 py-2 rounded hover:bg-white/5">Sign In</button>
                <button onClick={() => { setMobileOpen(false); onStart && onStart(); }} className="px-3 py-2 rounded bg-[#1a4f63] text-white">Get Started</button>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  );
};

export default Header;