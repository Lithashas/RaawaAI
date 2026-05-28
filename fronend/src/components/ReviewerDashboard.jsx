import React from 'react';

const ReviewerDashboard = ({ onBack }) => {
  return (
    <div className="w-full px-6 py-10">
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Reviewer Dashboard</p>
          <h1 className="mt-3 text-4xl font-bold text-white">Available Simulations</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-slate-950/20 shadow-xl">
            <div className="mb-8 px-2">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Navigation</p>
            </div>
            <div className="space-y-3">
              <button className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-left text-sm font-semibold text-white shadow-inner shadow-slate-950/10">
                Organizations
              </button>
              <button className="w-full rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 text-left text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10">
                Simulations
              </button>
            </div>
          </aside>

          <main className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-inner shadow-slate-950/20">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full bg-slate-700/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                    Pending
                  </span>
                  <h2 className="text-2xl font-bold text-white">Aura Luxury : "The EverGreen watch"</h2>
                  <p className="text-slate-400 max-w-3xl">A campaign for a 24K gold watch claiming to be “100% climate positive” through carbon credits, despite the product’s luxury positioning and mixed public trust.</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-5 text-center">
                    <span className="block text-5xl font-black text-emerald-400">72%</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Friction Index</span>
                  </div>
                  <button type="button" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition">
                    Review →
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ReviewerDashboard;
