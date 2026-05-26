import React from 'react';
import { ChevronDown, Sparkles, Brain, ShieldCheck, Users, Activity, Globe2, Layers3, BarChart3, MessageSquareQuote, ArrowRight } from 'lucide-react';

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

const Hero = ({ onStart, onReview }) => {
  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative px-4 pb-20 pt-8 md:pt-12">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(73,197,224,0.16),_transparent_60%)] -z-10" />
      <div className="absolute left-1/2 top-24 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px] -z-10" />

      <section className="mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#69D2E9] backdrop-blur-sm">
          <Activity size={12} />
          Multi-agent persona engine v3.1
        </div>

        <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[1.02] tracking-tight text-slate-100 md:text-7xl lg:text-8xl">
          Hear the <span className="bg-gradient-to-r from-[#69D2E9] via-[#4bb7d9] to-[#1f7ef2] bg-clip-text text-transparent">resonance</span>
          <br />before the launch.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          RaawaAI is a web-based AI simulation platform that stress-tests products, laws, and policies inside a synthetic society so decision-makers can see backlash before real-world damage begins.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onStart}
            className="group inline-flex items-center rounded-xl bg-[#1a4f63] px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-900/20 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Try your first simulation
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={onReview}
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-slate-100 backdrop-blur-md transition hover:bg-white/10"
          >
            <Users className="h-5 w-5" />
            Review the platform
          </button>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md md:grid-cols-3">
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
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      <section id="overview" className="mx-auto mt-24 max-w-7xl rounded-[2rem] border border-white/10 bg-[#07101e]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <Layers3 size={12} />
              Project overview
            </div>
            <h2 className="mt-5 text-3xl font-black text-slate-100 md:text-4xl">A digital laboratory for public sentiment.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              RaawaAI simulates a virtual public so organizations can test laws, product concepts, or campaigns before launch. The platform helps teams identify where resistance starts, why it starts, and how the wording can be improved.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Input a concept, law, product feature, or campaign idea.',
                'Select regions and demographics such as Gen-Z, farmers, or legal experts.',
                'Run a 30-day simulation across a realistic social timeline.',
                'Inspect backlash risk, sentiment shifts, and refinement suggestions.',
              ].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
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

      <section className="mx-auto mt-24 max-w-7xl">
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

      <section className="mx-auto mt-24 max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0a1426] to-[#050816] p-8 md:p-10">
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

      <section className="mx-auto mt-24 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.26em] text-slate-500">Team Exyra</div>
            <h2 className="mt-3 text-3xl font-black text-slate-100">Built by the people behind the resonance concept.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Department of Computer Engineering, Faculty of Engineering, University of Sri Jayewardenepura.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="rounded-3xl border border-white/10 bg-[#09111f]/75 p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">{member.role}</div>
              <h3 className="mt-3 text-xl font-bold text-slate-100">{member.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{member.email}</p>
              <p className="text-sm leading-7 text-slate-400">{member.phone}</p>
            </article>
          ))}
        </div>
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