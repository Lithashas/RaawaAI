import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = ({ result, onRefine, onGenerateReport, isRefining, isGeneratingReport }) => {
  const backlashData = [
    { name: 'Backlash Risk', value: result.backlashProbability },
    { name: 'Safe', value: 100 - result.backlashProbability },
  ];

  const sentimentData = [
    { name: 'Sentiment', score: result.sentimentScore }
  ];

  const COLORS = [result.backlashProbability > 60 ? '#ef4444' : '#3b82f6', 'rgba(255,255,255,0.05)'];

  return (
    <div className="space-y-10 pb-20 no-print">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Stats */}
        <div className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md">
          <h3 className="text-slate-500 text-[10px] font-black uppercase mb-6 tracking-[0.3em]">Neural Backlash Prob.</h3>
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={backlashData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={8}
                  dataKey="value"
                  startAngle={220}
                  endAngle={-40}
                  stroke="none"
                >
                  {backlashData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-black ${result.backlashProbability > 60 ? 'text-red-500' : 'text-slate-100'}`}>
                {result.backlashProbability}%
              </span>
            </div>
          </div>
          <p className="text-center text-[10px] font-black tracking-[0.2em] text-slate-400 mt-2 uppercase">
            Status: {result.backlashProbability > 70 ? 'CRITICAL RISK' : 
             result.backlashProbability > 40 ? 'MODERATE RISK' : 'STABLE'}
          </p>
        </div>

        <div className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md">
          <h3 className="text-slate-500 text-[10px] font-black uppercase mb-6 tracking-[0.3em]">Sentiment Alignment</h3>
          <div className="h-48 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="40%">
              <BarChart data={sentimentData} layout="vertical">
                <XAxis type="number" domain={[-100, 100]} hide />
                <YAxis type="category" dataKey="name" hide />
                <Bar 
                  dataKey="score" 
                  fill={result.sentimentScore < 0 ? '#ef4444' : '#10b981'} 
                  radius={[0, 8, 8, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-6">
              <span className={`text-5xl font-black ${result.sentimentScore < 0 ? 'text-red-500' : 'text-emerald-400'}`}>
                {result.sentimentScore > 0 ? '+' : ''}{result.sentimentScore}
              </span>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-3">Synthesized Score</p>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="text-slate-500 text-[10px] font-black uppercase mb-5 tracking-[0.3em]">Intelligence Summary</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium italic opacity-80">
              "{result.summary}"
            </p>
          </div>
          <div className="space-y-3 mt-8">
            <button
              onClick={onRefine}
              disabled={isRefining || isGeneratingReport}
              className="w-full bg-white text-slate-950 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-3 text-xs disabled:opacity-50"
            >
              {isRefining ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-slate-900" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Optimizing...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.606a1 1 0 10-1.415-1.414l.707-.707a1 1 0 001.415 1.414l-.707.707zm11.314 2.122a1 1 0 00-1.415-1.415l-.707.708a1 1 0 001.415 1.414l.707-.707zm-4.502 6.374a1 1 0 10-1.414-1.415l-.707.707a1 1 0 001.414 1.415l.707-.707zm-7.072 0a1 1 0 101.415-1.415l-.708-.707a1 1 0 00-1.414 1.414l.707.708zm0-11.314a1 1 0 101.414 1.415l.707-.707a1 1 0 00-1.414-1.415l-.707.707zm11.314 0a1 1 0 10-1.415 1.414l.707.707a1 1 0 001.415-1.414l-.707-.707zM9 11a1 1 0 102 0c0-1.103.897-2 2-2a1 1 0 100-2c-2.206 0-4 1.794-4 4z"></path></svg>
                  <span>Heuristic Fix</span>
                </>
              )}
            </button>
            <button
              onClick={onGenerateReport}
              disabled={isGeneratingReport || isRefining}
              className="w-full border border-white/20 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-3 text-xs disabled:opacity-50"
            >
              {isGeneratingReport ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Drafting Report...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <span>Intelligence Report</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Social Feed */}
      <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/5 p-12 shadow-2xl backdrop-blur-md">
        <h3 className="text-2xl font-bold text-slate-100 mb-10 flex items-center">
          <span className="bg-gradient-to-t from-pink-600 to-rose-400 w-2.5 h-8 rounded-full mr-5 shadow-[0_0_15px_rgba(244,63,94,0.3)]"></span>
          Simulated Pulse Feed: {result.audienceType}
        </h3>
        <div className="space-y-12">
          {result.reactions.map((reaction) => (
            <div key={reaction.id} className="flex space-x-8 border-b border-white/5 pb-12 last:border-0 last:pb-0 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-[1.25rem] overflow-hidden border-2 border-white/10 ring-8 ring-white/[0.02] group-hover:border-blue-500/50 transition-colors">
                  <img src={`https://picsum.photos/seed/${reaction.personaName}/100/100`} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-slate-100 text-xl tracking-tight">{reaction.personaName}</span>
                    <span className="text-slate-600 text-xs font-black uppercase tracking-widest">#SNTHT-AGN-{(Math.random()*1000).toFixed(0)}</span>
                  </div>
                  <span className={`text-[10px] px-3.5 py-1.5 rounded-full font-black uppercase tracking-[0.2em] border-2 ${
                    reaction.sentiment === 'positive' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    reaction.sentiment === 'negative' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-slate-500/10 text-slate-400 border-white/5'
                  }`}>
                    {reaction.sentiment}
                  </span>
                </div>
                <p className="text-slate-300 text-xl leading-relaxed mb-6 font-medium italic opacity-90 group-hover:opacity-100 transition-opacity">
                  "{reaction.postContent}"
                </p>
                <div className="flex items-center space-x-10 text-slate-500">
                  <span className="flex items-center space-x-2.5 text-xs font-black tracking-widest uppercase hover:text-slate-300 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    <span>{Math.floor(Math.random() * 20)} Resonance</span>
                  </span>
                  <span className="flex items-center space-x-2.5 text-xs font-black tracking-widest uppercase hover:text-rose-400 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span>{Math.floor(Math.random() * 800)} Reach</span>
                  </span>
                  <div className="h-5 w-[1px] bg-white/5"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Cognitive Bias: {reaction.tone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
