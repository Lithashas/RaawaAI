import React from 'react';

const Upgrade = ({ onBack }) => {
  return (
    <div className="space-y-10">
      <button
        type="button"
        onClick={onBack}
        className="text-slate-300 hover:text-white text-sm font-semibold"
      >
        &lt; Back to Systems
      </button>

      <div className="text-center">
        <h1 className="text-5xl font-black text-white tracking-tight">Upgrade Yourself with <span className="text-cyan-400">RaawaAI</span></h1>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-cyan-500/20 bg-slate-950/70 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 text-2xl">
              📊
            </div>
            <h2 className="text-xl font-bold text-white">Free Plan</h2>
            <ul className="space-y-3 text-slate-400 text-sm text-left">
              <li>✓ Up to 2 organizations</li>
              <li>✓ Up to 10 members per organization</li>
              <li>✓ Up to 3 simulations per day</li>
              <li>✓ Privacy data protection</li>
            </ul>
            <button className="mt-6 w-full rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition">
              Continue →
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/70 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-cyan-300 text-2xl">
              💎
            </div>
            <h2 className="text-xl font-bold text-white">10$ per month</h2>
            <ul className="space-y-3 text-slate-400 text-sm text-left">
              <li>✓ Unlimited Organizations</li>
              <li>✓ Up to 50 members per organization</li>
              <li>✓ Unlimited Simulations</li>
              <li>✓ Advanced privacy data protection</li>
            </ul>
            <button className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition border border-white/10">
              Buy →
            </button>
          </div>
        </div>
      </div>

      {/* Footer content removed — using global Footer component instead */}
    </div>
  );
};

export default Upgrade;
