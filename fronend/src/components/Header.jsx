import React, { useState } from 'react';
import logo from '../assets/RaawaAI_logo.png';

const Header = ({ 
  onStart, 
  onHome, 
  onSignIn, 
  onSignOut, 
  onSettings, 
  onReports, 
  onOrganizations, 
  onUpgrade, 
  onProfile, 
  onReviewer, 
  onAbout, 
  view, 
  userRole = 'Agent', 
  currentPath = '' 
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const isDashboard = view === 'agency-dashboard';
  const isSettings = view === 'settings';
  const isAbout = view === 'about';
  const showDashboardUI = isDashboard || isSettings;
  const isOnSimulator = currentPath === '/simulator';

  return (
    <>
    <header className="w-full bg-[#050816] border-b border-white/5 py-4">
      <div className="w-full px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onHome}
          >
            <div className="relative flex items-center justify-center">
              <img src={logo} alt="RaawaAI logo" className="h-10 md:h-14 w-auto max-w-[180px] object-contain" />
            </div>
          </div>
          {showDashboardUI && (
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={(e) => { e.stopPropagation(); onStart && onStart(); }}
                className="px-3 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200 flex-shrink-0"
              >
                Simulator
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onReports && onReports(); }}
                className="px-3 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200 flex-shrink-0"
              >
                Reports
              </button>
              {/* Removed Organizations and Upgrade to simplify header */}
              <button
                onClick={(e) => { e.stopPropagation(); onSettings && onSettings(); }}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isSettings 
                    ? 'bg-[#1a4f63] text-white border border-transparent' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-200'
                } flex-shrink-0`}
              >
                Settings
              </button>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4 min-w-0 justify-end">
          {showDashboardUI ? (
            <div className="hidden md:flex items-center space-x-4 shrink-0 relative">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-sm font-medium text-slate-300">Role: {userRole}</span>
              </div>

              <div className="relative">
                <button
                  onClick={() => setAccountOpen((s) => !s)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 hover:bg-white/10 text-slate-200"
                >
                  <span className="text-sm font-semibold">Account</span>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#050816] border border-white/5 rounded-md shadow-lg py-1 z-50">
                    <button onClick={() => { setAccountOpen(false); onProfile && onProfile(); }} className="w-full text-left px-3 py-2 text-sm hover:bg-white/5">Profile</button>
                    <button onClick={() => { setAccountOpen(false); onReviewer && onReviewer(); }} className="w-full text-left px-3 py-2 text-sm hover:bg-white/5">Reviewer</button>
                    <div className="border-t border-white/5 my-1" />
                    <button onClick={() => { setAccountOpen(false); onSignOut && onSignOut(); }} className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-white/5">Sign Out</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8 shrink-0">
              {isAbout && (
                <button 
                  onClick={onHome}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Home
                </button>
              )}
              <button 
                onClick={onAbout}
                className={`text-slate-300 hover:text-white text-sm font-medium transition-colors ${
                  isAbout ? 'text-[#69D2E9]' : ''
                }`}
              >
                About
              </button>
              <button 
                onClick={onSignIn}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={onStart}
                className="bg-[#1a4f63] hover:bg-[#236a85] text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/5"
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
        <div className="w-full px-6 py-4 flex flex-col gap-2 transition-all duration-200 ease-out">
          {showDashboardUI ? (
            <>
              <button onClick={() => { setMobileOpen(false); onStart && onStart(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Simulator</button>
              <button onClick={() => { setMobileOpen(false); onReports && onReports(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Reports</button>
              <button onClick={() => { setMobileOpen(false); onProfile && onProfile(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Profile</button>
              <button onClick={() => { setMobileOpen(false); onReviewer && onReviewer(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Reviewer</button>
              <button onClick={() => { setMobileOpen(false); onSettings && onSettings(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Settings</button>
            </>
          ) : (
            <>
              {isAbout && (
                <button onClick={() => { setMobileOpen(false); onHome && onHome(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Home</button>
              )}
              <button onClick={() => { setMobileOpen(false); onAbout && onAbout(); }} className={`text-left px-3 py-2 rounded hover:bg-white/5 ${isAbout ? 'text-[#69D2E9]' : ''}`}>About</button>
            </>
          )}
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
    </>
  );
};

export default Header;
