import React from 'react';
import { ChevronLeft } from 'lucide-react';

const reportItems = [];

const Reports = ({ onBack, onDetailedReport, onOptimizeConcept }) => {
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

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Reports</h1>
          <p className="text-slate-400">See your public feedbacks.</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-6">Backlash Probability</p>
            <div className="flex items-center gap-6">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/5">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-xl" />
                <div className="relative flex flex-col items-center justify-center text-center">
                  <span className="text-5xl font-black text-white">—</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-2">Status</span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="h-4 rounded-full bg-slate-900/80 overflow-hidden">
                  <div className="h-full w-[12%] rounded-full bg-cyan-400" />
                </div>
                <p className="text-slate-400 text-sm leading-6">
                  Current feedback suggests the concept is resonating with the audience, with low backlash probability and steady positive reaction across sentiment groups.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-6">Public Sentiment</p>
            <div className="rounded-[2rem] bg-slate-900/80 p-6">
              <div className="mb-6 flex items-end gap-4">
                <div className="h-32 w-24 rounded-3xl bg-slate-900/80" />
                <div className="h-48 w-24 rounded-3xl bg-cyan-500" />
                <div className="h-28 w-24 rounded-3xl bg-slate-800" />
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-5xl font-black">—</span>
                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">Aggregate Score</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Intelligence Report</p>
                <p className="text-2xl font-bold text-white">AI intelligence summary is not available yet. Run a simulation to generate an intelligence report.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onOptimizeConcept}
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition"
              >
                Optimize Concept
              </button>
              <button
                type="button"
                onClick={onDetailedReport}
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400 transition"
              >
                Detailed Report
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Real-time Simulation Feed</h3>
                <p className="text-sm text-slate-500">Sri Lankan Gen-Z</p>
              </div>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                Live
              </span>
            </div>

            <div className="space-y-5">
              {reportItems.length === 0 ? (
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center text-slate-400">
                  No reports available yet. Run a simulation or add public feedback to populate this feed.
                </div>
              ) : (
                reportItems.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                    {/* kept rendering logic in case items are provided */}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-dashed border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Feedbacks of Reviewers</p>
                <p className="mt-2 text-slate-500 text-sm">Add your reviewers and get collaborative feedback from the team.</p>
              </div>
              <button className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white hover:border-cyan-400 transition">
                Add Reviewers...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
