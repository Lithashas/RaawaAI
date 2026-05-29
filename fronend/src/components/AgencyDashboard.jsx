import React from 'react';
import { Plus, Trash2, ChevronRight } from 'lucide-react';

const Dashboard = ({ onNewSimulation, onSettings }) => {
  const simulations = [];

  return (
    <div className="w-full px-6 py-12 text-slate-100 font-sans">
      <div className="flex justify-between items-start mb-16">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Agency Dashboard</h1>
          <p className="text-slate-500 text-sm font-medium">Manage your RaawaAI digital laboratory experiments.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onSettings}
            className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 rounded-xl text-sm font-bold transition-all border border-white/10"
          >
            Settings
          </button>
          <button 
            onClick={onNewSimulation}
            className="flex items-center space-x-2 bg-[#4cc3df] hover:bg-[#3bb1cc] text-[#050816] px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/10 active:scale-95"
          >
            <Plus size={20} className="stroke-[3]" />
            <span>New Simulation</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {simulations.length === 0 ? (
          <div className="rounded-[2.5rem] border border-white/10 p-12 text-center text-slate-400 bg-[#0b1220]/40">
            <h3 className="text-xl font-bold text-white mb-2">No simulations yet</h3>
            <p>Create a new simulation to see it listed here.</p>
          </div>
        ) : (
          simulations.map((sim) => (
            <div key={sim.id} className="group relative flex items-center">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-28 bg-[#ffffff]/20 rounded-full blur-[1px]"></div>
              <div className="ml-8 w-full bg-[#11162d]/50 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl hover:bg-[#151b36]/80 transition-all flex flex-col md:flex-row items-center md:items-start justify-between">
                <div className="flex-grow pr-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{sim.title}</h3>
                    <div className="flex space-x-2">
                      {sim.tags.map(tag => (
                        <span key={tag} className="px-5 py-1.5 rounded-full bg-white/10 text-[10px] font-bold text-slate-400 tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
                    {sim.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs font-bold text-slate-500 tracking-widest uppercase">
                    <span>{sim.date}</span>
                    <span className="w-px h-3 bg-white/10"></span>
                    <span>{sim.time}</span>
                    <span className="w-px h-3 bg-white/10"></span>
                    <span>Reviewers:{sim.reviewers}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between self-stretch mt-8 md:mt-0">
                  <button className="text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={28} />
                  </button>
                  <button className="text-slate-600 hover:text-red-500 transition-colors p-2 mt-4">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
