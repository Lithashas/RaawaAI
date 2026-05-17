import React from 'react';

const Header = ({ onStart, onHome, onSignIn, onOrganizations, onReports, onUpgrade, onReviewer, onProfile, showNav = false }) => {
  return (
    <header className="w-full bg-[#050816] border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={onHome}
        >
          <div className="w-8 h-8 border-2 border-slate-400 rounded flex flex-col justify-center items-center p-1 space-y-1 group-hover:border-[#49C5E0] transition-colors">
            <div className="w-full h-[3px] bg-slate-400 group-hover:bg-[#49C5E0] transition-colors"></div>
            <div className="w-full h-[3px] bg-slate-400 group-hover:bg-[#49C5E0] transition-colors"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#49C5E0] to-[#1061CC] bg-clip-text text-transparent">
            RaawaAI
          </span>
        </div>
        
        <div className="flex items-center space-x-8">
          {showNav && (
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
              <button type="button" onClick={onHome} className="hover:text-white transition">Home</button>
              <button type="button" onClick={onOrganizations} className="hover:text-white transition">Organizations</button>
              <button type="button" onClick={onReports} className="hover:text-white transition">Reports</button>
              <button type="button" onClick={onProfile} className="hover:text-white transition">Profile</button>
              <button type="button" onClick={onUpgrade} className="hover:text-white transition">Upgrade</button>
              <button type="button" onClick={onReviewer} className="hover:text-white transition">Reviewer</button>
            </nav>
          )}
          
          <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
