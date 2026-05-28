import React, { useState } from 'react';
import logoImg from '../assets/RaawaAI_logo.png';

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
  isAuthenticated = false,
  userRole = 'Agent', 
  currentPath = '' 
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const isDashboard = view === 'agency-dashboard';
  const isSettings = view === 'settings';
  const isAbout = view === 'about';
  const isSignUp = view === 'signup';
  const isLogIn = view === 'login';
  const showDashboardUI = isAuthenticated || isDashboard || isSettings;
  const showHomeButton = isAbout || isSignUp || isLogIn;
  const isOnSimulator = currentPath === '/simulator';

  return (
    <>
    <header className="w-full bg-[#050816] border-b border-white/5 py-4">
      <div className="w-full px-6 flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={onHome}
          >
            <img 
              src={logoImg} 
              alt="RaawaAI" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </div>
          {/* Removed desktop quick links to simplify header per user request */}
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
              {showHomeButton && (
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
              <button onClick={() => { setMobileOpen(false); onProfile && onProfile(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Profile</button>
              <button onClick={() => { setMobileOpen(false); onReviewer && onReviewer(); }} className="text-left px-3 py-2 rounded hover:bg-white/5">Reviewer</button>
            </>
          ) : (
            <>
              {showHomeButton && (
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
                <button onClick={() => { setMobileOpen(false); onSignIn && onSignIn(); }} className="px-3 py-2 rounded hover:bg-[#1a4f63] hover:text-white text-slate-300 font-medium w-full text-center py-2 transition-colors border border-white/10">Sign In</button>
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
