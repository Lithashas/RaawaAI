import React from 'react';
import { ChevronLeft } from 'lucide-react';

const reportItems = [
  {
    id: 1,
    persona: 'Student Activist',
    handle: '@synthetic_agent',
    text: '"Jasmine and strawberry sounds nice, but where is the jasmine being sourced from? Hope the local farmers are getting a fair price and it’s not just another corporate grab using our local flora. #EthicalEatsSL #FairTrade"',
    sentiment: 'Neutral',
    reactions: 0,
    comments: 0,
    tone: 'Skeptical',
  },
  {
    id: 2,
    persona: 'Tech Savvy Youth',
    handle: '@synthetic_agent',
    text: '"Jasmine and strawberry sounds nice, but where is the jasmine being sourced from? Hope the local farmers are getting a fair price and it’s not just another corporate grab using our local flora. #EthicalEatsSL #FairTrade"',
    sentiment: 'Positive',
    reactions: 1,
    comments: 30,
    tone: 'Enthusiastic',
  },
  {
    id: 3,
    persona: 'Student Activist',
    handle: '@synthetic_agent',
    text: '"Another luxury ice cream flavor while the average student struggles with canteen prices? It’s pretty, sure, but let’s talk about food security and inclusive pricing before we celebrate flowers in our dessert. #Priorities #SocialJusticeSL"',
    sentiment: 'Negative',
    reactions: 1,
    comments: 20,
    tone: 'Critical',
  },
];

const Reports = ({ onBack, onDetailedReport, onOptimizeConcept }) => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-2 text-white hover:text-slate-200 transition-colors group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Agency Dashboard</span>
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
                  <span className="text-5xl font-black text-white">12%</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-2">Stable</span>
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
                <span className="text-5xl font-black">58+</span>
                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">Aggregate Score</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Intelligence Report</p>
                <h2 className="text-2xl font-bold text-white">The Sri Lankan Gen-Z audience shows a generally positive reception to the jasmine strawberry ice cream concept, appreciating the aesthetic appeal and flavor innovation, though concerns regarding ethical sourcing and pricing persist.</h2>
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
              {reportItems.map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-300 font-bold">{item.persona.split(' ').map((w) => w[0]).join('')}</div>
                        <div>
                          <p className="font-semibold text-white">{item.persona}</p>
                          <p className="text-xs text-slate-500">{item.handle}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.3em] ${
                      item.sentiment === 'Positive' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20' :
                      item.sentiment === 'Negative' ? 'bg-red-500/15 text-red-300 border border-red-500/20' :
                      'bg-slate-700/70 text-slate-200 border border-slate-600/50'
                    }`}>
                      {item.sentiment}
                    </span>
                  </div>

                  <p className="mt-4 text-slate-300 leading-7">{item.text}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span>💬 {item.comments}</span>
                    <span>❤️ {item.reactions}</span>
                    <span>Tone: {item.tone}</span>
                  </div>
                </div>
              ))}
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
