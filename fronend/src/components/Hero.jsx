import React from 'react';
import { ChevronDown, Sparkles, Brain, BarChart3, MessageSquareQuote } from 'lucide-react';

const featureCards = [
  {
    title: 'Multi-agent persona engine',
    description: 'A hive of synthetic citizens representing different regions, demographics, and professional viewpoints.',
    icon: Brain,
  },
  {
    title: 'Simulated social feed',
    description: 'Realistic fake posts, comments, hashtags, and viral reactions triggered by each concept.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Sentiment volatility heatmap',
    description: 'A visual dashboard that exposes acceptance hotspots, friction points, and emerging backlash.',
    icon: BarChart3,
  },
  {
    title: 'Policy refinement AI',
    description: 'Clear suggestions for rewriting language so teams can improve resonance before launch.',
    icon: Sparkles,
  },
];

const Hero = ({ onStart }) => {
  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-4 text-center min-h-[calc(100vh-64px)] pb-12">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="flex flex-col items-center justify-center">
        {/* Version Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
          <span className="text-[10px] font-bold text-[#69D2E9] uppercase tracking-[0.2em]">
            MULTI-AGENT PERSONA ENGINE V3.1
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-[-0.04em] mb-4">
          Hear the <span className="italic bg-gradient-to-r from-[#5EEAD4] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent">Resonance</span>
          <br />
          Before the Launch
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10 mx-auto">
          RaawaAI is a Digital Laboratory for stress-testing products, laws and policies against a synthetic global public. Prevent brand damage before it happens
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button 
            onClick={onStart}
            className="group relative flex items-center bg-[#1a4f63] hover:bg-[#236a85] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-blue-900/20 transition-all hover:scale-105 active:scale-95"
          >
            Try your first simulation
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
          
          <button 
            onClick={scrollToFooter}
            className="flex items-center space-x-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-100 text-lg font-bold transition-all backdrop-blur-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span>Touch to Review</span>
          </button>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md md:grid-cols-3">
        {[
          { label: 'Simulation horizon', value: '30 days' },
          { label: 'Core output', value: 'Backlash probability' },
          { label: 'Primary lens', value: 'Public resonance' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/5 bg-[#09111f]/70 px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.28em] text-slate-500">{item.label}</div>
            <div className="mt-2 text-lg font-bold text-slate-100">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Feature Cards Grid */}
      <section className="w-full mt-24 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((card) => {
          const Icon = card.icon;

          return (
            <article key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl shadow-black/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-[#69D2E9]">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
            </article>
          );
        })}
      </section>

      <div className="mt-16 flex justify-center">
        <button
          onClick={scrollToFooter}
          className="flex flex-col items-center gap-1 text-slate-500 transition-colors hover:text-[#69D2E9]"
        >
          <span className="text-xs uppercase tracking-[0.28em]">Continue to footer</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
