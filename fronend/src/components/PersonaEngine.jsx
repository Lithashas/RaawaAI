import React, { useState } from 'react';

const PersonaEngine = () => {
  const [simulationFidelity, setSimulationFidelity] = useState(50);
  const [focusGroup, setFocusGroup] = useState('local');

  return (
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
            <div
              className="absolute top-[17px] w-3 h-3 bg-[#3CD3AD] rounded-full shadow-[0_0_10px_#3CD3AD] -translate-x-1/2 pointer-events-none"
              style={{ left: `${simulationFidelity}%` }}
            />
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
  );
};

export default PersonaEngine;
