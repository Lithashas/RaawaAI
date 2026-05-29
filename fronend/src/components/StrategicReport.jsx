import React from 'react';
import { ChevronLeft } from 'lucide-react';

const StrategicReport = ({ onBack }) => {
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

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Strategic Intelligence Report</h1>
          <p className="text-slate-400">Jasmine-Strawberry Market Feasibility for Sri Lankan Gen-Z</p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <div className="space-y-6">
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/90 p-6">
            <h2 className="text-lg font-bold text-white">Strategic Intelligence Report: Jasmine-Strawberry Market Feasibility for Sri Lankan Gen-Z</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">Generated: January 16, 2026 • Confidential Strategic Report</p>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="w-4 h-[2px] bg-cyan-400" />
              01 EXECUTIVE SUMMARY
            </div>
            <p className="text-slate-300 leading-8 text-sm">
              "This report analyzes the pilot reception of the new jasmine-strawberry flavor profile among the Sri Lankan Gen-Z demographic. With a sentiment score of 45 and a backlash risk of 15 percent, the product exhibits high aesthetic appeal but faces significant scrutiny regarding socio-economic inclusivity and supply chain transparency. Success depends on balancing premium positioning with localized ethical commitments."
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="w-4 h-[2px] bg-cyan-400" />
              02 RISK ANALYSIS
            </div>
            <p className="text-slate-300 leading-8 text-sm">
              The 15 percent backlash risk is primarily driven by perceptions of economic elitism and potential "greenwashing" or 'local-washing.' Student activists have identified the product as a symbol of the Colombo elite, potentially alienating the wider, price-sensitive youth population. There is a specific reputational threat regarding the sourcing of jasmine, where a failure to verify local florist partnerships could lead to organized 'buy local' boycotts.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="w-4 h-[2px] bg-cyan-400" />
              03 DEMOGRAPHIC IMPACT
            </div>
            <p className="text-slate-300 leading-8 text-sm">
              The Sri Lankan Gen-Z audience is currently bifurcated. The 'Tech-Savvy' segment prioritizes convenience, digital integration, and innovative flavor profiles, responding positively to the product’s 15-minute delivery and Instagram-centric packaging. Conversely, the 'Socially Conscious' segment focuses on economic equity and ethical sourcing. This divide suggests the product currently resonates as a luxury item rather than a mass-market youth staple.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="w-4 h-[2px] bg-cyan-400" />
              04 STRATEGIC RECOMMENDATIONS
            </div>
            <ul className="list-disc space-y-3 pl-6 text-slate-300 leading-8 text-sm">
              <li>Launch a 'Local Florist Partnership' campaign to provide transparent sourcing data for jasmine ingredients.</li>
              <li>Introduce a tiered pricing strategy or a 'Student Value' SKU to mitigate accusations of economic exclusion.</li>
              <li>Capitalize on the positive aesthetic reception by intensifying influencer marketing within the Colombo tech and lifestyle hubs.</li>
              <li>Enhance sustainability messaging by highlighting the recyclable nature of the packaging to align with global Gen-Z values.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="w-4 h-[2px] bg-cyan-400" />
              05 CONCLUSION
            </div>
            <p className="text-slate-300 leading-8 text-sm">
              The jasmine-strawberry concept is a high-potential innovation that successfully captures the aesthetic and digital preferences of urban youth. However, to achieve long-term market penetration in Sri Lanka, the brand must pivot from an 'elite-exclusive' image to one of 'locally-rooted' luxury. Addressing the transparency of the supply chain is critical to neutralizing activist-led opposition.
            </p>
          </section>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 flex flex-col gap-2 sm:flex-row sm:justify-between">
            <span>© 2024 RaawaAI Intelligence</span>
            <span>SystemsRef: AHSLVQ9TW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicReport;
