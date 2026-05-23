import React from 'react';

const Header = ({ onStart, onHome, onSignIn, onSignOut, onSettings, view, userRole = 'Agent' }) => {
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
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onSettings();
              }}
              className={`ml-4 px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                isSettings 
                  ? 'bg-[#1a4f63]/40 text-[#69D2E9] border border-[#69D2E9]/20' 
                  : 'bg-white/5 hover:bg-white/10 text-slate-200'
              }`}
            >
              Settings
            </button>
          )}
        </div>
        
        <div className="flex items-center space-x-8">
          {showDashboardUI ? (
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-sm font-medium text-slate-300">Role : {userRole}</span>
              </div>
              <button 
                onClick={onSignOut}
                className="bg-[#1e1b4b] hover:bg-[#2e2b5b] text-slate-200 px-8 py-2.5 rounded-md text-sm font-medium transition-all"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </header>
  );
};

export default Header;