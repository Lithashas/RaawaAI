import React from 'react';
import { Layers3, Globe2, ShieldCheck } from 'lucide-react';

const audienceCards = [
  'Government bodies testing laws and tax policy',
  'Corporates and brands evaluating launches and campaigns',
  'NGOs measuring the likely effect of awareness programs',
  'PR agencies planning crisis communication strategies',
];

const safeguards = [
  'Synthetic datasets replace data scraping to protect real user privacy.',
  'Human supervision stays central to every simulation outcome.',
  'Explainable logs show where and why a backlash prediction appears.',
  'The system acts as a safe digital laboratory, not a replacement for human judgment.',
];

const teamMembers = [
  {
    role: 'Team Leader',
    name: 'A.K. Nethmi Tharsushika',
    email: 'gamagetharushy@gmail.com',
    phone: '+94762608628',
  },
  {
    role: 'Team Member',
    name: 'B. Janodi Chamodya',
    email: 'bethmagejc678@gmail.com',
    phone: '+94717776380',
  },
  {
    role: 'Team Member',
    name: 'Lithasha Abayarathne',
    email: 'lithashas@gmail.com',
    phone: '+94706696967',
  },
  {
    role: 'Team Member',
    name: 'Vinuji Perera',
    email: 'vinujipp821@gmail.com',
    phone: '+94706610470',
  },
];

const About = () => {
  return (
    <div className="space-y-24 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-[#69D2E9] to-[#3498DB] bg-clip-text text-transparent">
          About RaawaAI
        </h1>
        <p className="text-slate-500 font-medium text-lg uppercase tracking-widest max-w-3xl mx-auto leading-relaxed">
          The synthetic population laboratory for testing public resonance and ethical alignment.
        </p>
      </div>

      {/* Project Overview */}
      <section id="overview" className="w-full rounded-[2rem] border border-white/10 bg-[#07101e]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <Layers3 size={12} />
              Project overview
            </div>
            <h2 className="mt-5 text-3xl font-black text-slate-100 md:text-4xl">A digital laboratory for public sentiment.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
              RaawaAI simulates a virtual public so organizations can test laws, product concepts, or campaigns before launch. The platform helps teams identify where resistance starts, why it starts, and how the wording can be improved.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Input a concept, law, product feature, or campaign idea.',
                'Select regions and demographics such as Gen-Z, farmers, or legal experts.',
                'Run a 30-day simulation across a realistic social timeline.',
                'Inspect backlash risk, sentiment shifts, and refinement suggestions.',
              ].map((step, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1a4f63] text-xs font-bold text-white">{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#11243b] to-[#07101e] p-6">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Problem statement</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A misunderstood policy or product feature can damage brand trust, waste marketing spend, or trigger legal and social unrest. RaawaAI is designed to reduce the blind-launch risk.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#11243b] to-[#07101e] p-6">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Target audience</div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {audienceCards.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#69D2E9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works & safeguards */}
      <section className="w-full">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
              <Globe2 size={12} />
              How it works
            </div>
            <h2 className="mt-5 text-3xl font-black text-slate-100">Built on LLM reasoning, synthetic data, and cloud persistence.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The brain is a large language model configured for persona-based reasoning and sentiment classification. The body is a responsive web app. The data layer uses synthesized cultural trends and secure simulation logs.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: 'Frontend', value: 'React + Tailwind CSS' },
                { label: 'Backend', value: 'FastAPI (Python)' },
                { label: 'Database', value: 'DynamoDB' },
                { label: 'AI layer', value: 'OpenAI API or Hugging Face models' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#09111f]/80 px-4 py-4 text-sm">
                  <span className="text-slate-500">{row.label}</span>
                  <span className="font-semibold text-slate-100">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Architecture snapshot</div>
                  <h3 className="mt-3 text-2xl font-bold text-slate-100">Input, simulation engine, data presence, risk dashboard.</h3>
                </div>
                <div className="rounded-2xl bg-emerald-400/10 px-4 py-3 text-right">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-emerald-300">Example risk</div>
                  <div className="mt-1 text-3xl font-black text-emerald-300">78%</div>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                {[
                  'Organization input and target selection',
                  'Multi-agent persona engine with legal, rural, Gen-Z, and tech personas',
                  'LLM reasoning hive plus cultural value synthesizer',
                  'Simulated social feed, viral propagation, and timeline acceleration',
                  'Sentiment volatility heatmap and risk KPI dashboard',
                  'DynamoDB results logs for simulation history',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#09111f]/75 p-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:col-span-2">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Ethical safeguards</div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {safeguards.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#09111f]/80 p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Assessment */}
      <section className="w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0a1426] to-[#050816] p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
              <ShieldCheck size={12} />
              Impact assessment
            </div>
            <h2 className="mt-5 text-3xl font-black text-slate-100 md:text-4xl">A social safety net for innovation.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
              The short-term value is immediate identification of backlash risk and refinement opportunities. The long-term value is a society with less friction, stronger trust, and launches that are more likely to succeed.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Short-term</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Immediate identification of backlash risk and the specific policy or message areas that need refinement.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Long-term</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A practical framework for building products and policies that people trust, rather than merely tolerate.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
