import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ onStart, onReview }) => {
  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-center pt-4 pb-16 px-4 text-center min-h-[calc(100vh-64px)]">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="flex-grow flex flex-col items-center justify-center mb-6">
        {/* Version Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
          <span className="text-[10px] font-bold text-[#69D2E9] uppercase tracking-[0.2em]">
            Multi-Agent Persona Engine V3.1
          </span>
        </div>

        {/* Main Heading - Preserved font-bold for thinner look */}
        <h1 className="max-w-5xl text-6xl md:text-8xl font-bold text-slate-100 leading-[1.1] tracking-tight mb-4">
          Hear the <span className="italic bg-gradient-to-r from-[#49C5E0] to-[#1061CC] bg-clip-text text-transparent">Resonance</span><br />
          Before the Launch
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-6 mx-auto">
          RAAWA AI is a Digital Laboratory for stress-testing products, laws and policies against a synthetic global public. Prevent brand damage before it happens
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-auto mb-8">
        <button 
          onClick={onStart}
          className="group relative flex items-center bg-[#1a4f63] hover:bg-[#236a85] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-blue-900/20 transition-all hover:scale-105 active:scale-95"
        >
          Try your first simulation
          <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
        
        <button onClick={onReview} className="flex items-center space-x-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-100 text-lg font-bold transition-all backdrop-blur-md">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          <span>Touch to Review</span>
        </button>
      </div>

      {/* Scroll Hint */}
      <button
        onClick={scrollToFooter}
        className="flex flex-col items-center text-slate-600 hover:text-[#49C5E0] transition-colors group mt-4 animate-bounce"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
};

export default Hero;