import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const Organizations = ({ onBack, onCreateOrg }) => {
  const [activeTab, setActiveTab] = useState('Corporates');

  const categories = ['Government', 'Corporates', 'NGOs', 'PR Agencies'];

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-500 hover:text-slate-300 transition-colors group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </button>

        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl font-bold text-white">Your Organizations</h1>
          <button
            type="button"
            onClick={onCreateOrg}
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            <span className="text-xl">+</span>
            New Organization
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[280px_1fr]">
        <aside className="space-y-3 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`flex w-full items-center justify-between rounded-3xl px-5 py-4 text-left text-sm font-semibold transition ${
                activeTab === cat
                  ? 'bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20'
                  : 'bg-transparent text-slate-400 hover:bg-slate-900/70 hover:text-white'
              }`}
            >
              <span>{cat}</span>
              {activeTab === cat && <span className="text-cyan-300">◀</span>}
            </button>
          ))}
        </aside>

        <main className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          {activeTab === 'Corporates' ? (
            <div className="space-y-8 rounded-[2rem] bg-slate-900/80 p-8 shadow-inner shadow-slate-950/20">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white tracking-tight">No organizations yet</h2>
                  <p className="max-w-3xl text-sm leading-7 text-slate-300">You don't have any organizations registered under this category. Create a new organization to get started.</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* placeholder tags removed */}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                <span className="font-semibold uppercase tracking-[0.2em] text-slate-200">SIMULATIONS: —</span>
                <span className="font-semibold uppercase tracking-[0.2em] text-slate-200">MEMBERS: —</span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="button" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400">
                  Add Members
                </button>
                <div className="flex items-center gap-3">
                  <button type="button" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition hover:bg-white/10">
                    🗑️
                  </button>
                  <span className="rounded-full bg-white/5 px-4 py-3 text-xl text-slate-300">❯</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-white/10 bg-slate-900/70 p-16 text-center text-slate-400">
              No organizations registered under <span className="font-semibold text-white">{activeTab}</span> yet.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Organizations;