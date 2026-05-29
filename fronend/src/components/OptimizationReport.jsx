import React from 'react';
import { ChevronLeft } from 'lucide-react';

const OptimizationReport = ({ onBack }) => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-2 text-white hover:text-slate-200 transition-colors group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Reports</span>
        </button>

        <div>
          <h1 className="text-4xl font-bold text-white">Neural Optimization Report</h1>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-cyan-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 mb-6">
            Optimized Logic Vector
          </div>
          <p className="text-slate-300 leading-8 text-sm">
            The 'Ethical Bloom' Jasmine-Strawberry Ice Cream: A premium floral-fruity fusion crafted with 100% fair-trade certified jasmine and locally-sourced organic strawberries, featuring a transparent supply chain and a 'Student-Friendly' accessibility discount tier.
          </p>
        </div>

        <div className="rounded-[2rem] border border-cyan-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 mb-6">
            Delta Reasoning
          </div>
          <p className="text-slate-300 leading-8 text-sm">
            The original concept was enhanced by explicitly committing to fair-trade and local sourcing to satisfy student activists' ethical concerns. A tiered pricing model was introduced to improve economic accessibility, while the descriptive 'Ethical Bloom' branding maintains the aesthetic and innovative appeal that resonated with the tech-oriented youth demographic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptimizationReport;
