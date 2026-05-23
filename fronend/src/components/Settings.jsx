import React, { useState } from 'react';
import { User, Zap, Shield, Users, Smile, ChevronLeft, Info, ToggleLeft, ToggleRight, Check } from 'lucide-react';

const Settings = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('persona');
  const [simulationFidelity, setSimulationFidelity] = useState(50);
  const [focusGroup, setFocusGroup] = useState('local');
  const [toggles, setToggles] = useState({
    encryption: true,
    tfa: true,
    improveModel: false,
    autoBackup: true
  });

  const menuItems = [
    { id: 'identity', label: 'Identity & Profile', icon: User },
    { id: 'persona', label: 'Persona Engine', icon: Zap },
    { id: 'privacy', label: 'Data & Privacy', icon: Shield },
    { id: 'org', label: 'Manage Organization', icon: Users },
    { id: 'subs', label: 'Subscriptions', icon: Smile },
  ];

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 font-sans pb-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-500 hover:text-slate-300 transition-colors mb-8 group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </button>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">System Settings</h1>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Tune the RaawaAI Persona Engine and manage laboratory preferences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-[#1a4f63]/20 text-[#3CD3AD] border border-[#3CD3AD]/20' 
                      : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-[#3CD3AD]' : ''} />
                  <span className="font-bold text-sm tracking-wide">{item.label}</span>
                </button>
              );
            })}
          </aside>

          {/* Content area */}
          <main className="flex-grow space-y-8">
            {/* Identity & Profile Section */}
            <div className="bg-[#11162d]/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white mb-10">Identity & Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block">Display Name</label>
                  <div className="bg-[#050816] border border-white/5 rounded-xl px-6 py-4 text-slate-300 font-medium">
                    Lead Analyst
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block">Professional Name</label>
                  <div className="bg-[#050816] border border-white/5 rounded-xl px-6 py-4 text-slate-300 h-[58px]">
                    {/* Empty placeholder */}
                  </div>
                </div>
              </div>
            </div>

            {/* Persona Engine Tuning Section */}
            <div className="bg-[#11162d]/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white mb-8">Persona Engine Tuning</h2>
              
              <div className="space-y-10">
                <div className="space-y-6">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block">Simulation Fidelity</label>
                  <div className="relative pt-4">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={simulationFidelity}
                      onChange={(e) => setSimulationFidelity(e.target.value)}
                      className="w-full h-1.5 bg-[#050816] rounded-lg appearance-none cursor-pointer accent-[#3CD3AD]"
                    />
                    <div className="flex justify-between mt-4">
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Performance</span>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Balanced</span>
                    </div>
                    {/* Slider Thumb Circle */}
                    <div 
                      className="absolute top-[17px] w-3 h-3 bg-[#3CD3AD] rounded-full shadow-[0_0_10px_#3CD3AD] -translate-x-1/2 pointer-events-none"
                      style={{ left: `${simulationFidelity}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block">Regional Focus Groups</label>
                  <div className="flex flex-wrap gap-4">
                    {['Global', 'Local', 'Asia'].map((group) => (
                      <button
                        key={group}
                        onClick={() => setFocusGroup(group.toLowerCase())}
                        className={`px-10 py-3 rounded-full text-sm font-bold transition-all border ${
                          focusGroup === group.toLowerCase()
                            ? 'bg-[#3CD3AD] text-[#050816] border-[#3CD3AD] shadow-lg shadow-teal-500/10'
                            : 'bg-transparent text-slate-400 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Lab Data Section */}
            <div className="bg-[#11162d]/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl space-y-8">
              <h2 className="text-2xl font-bold text-white mb-2">Security & Lab Data</h2>
              
              {/* Alert card */}
              <div className="bg-[#1a162d] border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 -z-10"></div>
                <h4 className="text-red-400 font-bold mb-2">Automated Data Retention</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  To comply with enterprise privacy policies, simulation results older than 90 days are automatically archived to cold storage.
                </p>
                <button className="bg-[#050816]/60 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg border border-white/5 hover:text-white transition-colors">
                  Achieve after 90 days
                </button>
              </div>

              {/* Toggles */}
              <div className="space-y-4">
                {[
                  { id: 'encryption', label: 'Enhanced Encryption', desc: 'Enable AES-256 for all campaign concept drafts.' },
                  { id: 'tfa', label: 'Two Factor Authentication', desc: 'Enable 2FA to protect your account.' },
                  { id: 'improveModel', label: 'Improve the model for everyone', desc: 'Allow anonymized data usage for model training.' },
                  { id: 'autoBackup', label: 'Auto backup', desc: 'Regularly backup your simulation data.' },
                ].map((item) => (
                  <div key={item.id} className="bg-[#050816]/40 border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:bg-[#050816]/60 transition-all">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-1">{item.label}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => handleToggle(item.id)}
                      className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                        toggles[item.id] ? 'bg-[#3CD3AD]' : 'bg-slate-800'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm ${
                        toggles[item.id] ? 'translate-x-7' : 'translate-x-0'
                      }`}>
                        {toggles[item.id] ? (
                          <Check size={12} className="text-[#3CD3AD]" strokeWidth={4} />
                        ) : (
                          <div className="w-1.5 h-px bg-slate-400"></div>
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer rights */}
            <div className="text-center pt-8">
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] border-t border-white/5 pt-8">
                © 2024 RaawaAI Labs. All rights reserved.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
