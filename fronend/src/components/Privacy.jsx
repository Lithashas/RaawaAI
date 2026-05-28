import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Privacy = () => {
  const [toggles, setToggles] = useState({
    encryption: true,
    tfa: true,
    improveModel: false,
    autoBackup: true
  });

  const handleToggle = (key) => setToggles(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-[#11162d]/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl space-y-8">
      <h2 className="text-2xl font-bold text-white mb-2">Security & Lab Data</h2>

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
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ${toggles[item.id] ? 'bg-[#3CD3AD]' : 'bg-slate-800'}`}>
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm ${toggles[item.id] ? 'translate-x-7' : 'translate-x-0'}`}>
                {toggles[item.id] ? (<Check size={12} className="text-[#3CD3AD]" strokeWidth={4} />) : (<div className="w-1.5 h-px bg-slate-400"></div>)}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
