import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChangePlan() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Change Plan</h2>
      <p className="text-sm text-slate-400">Select a new plan that fits your needs.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Free</h3>
          <p className="text-sm text-slate-400">Basic access with limited usage.</p>
          <button className="mt-4 px-4 py-2 rounded bg-slate-800 text-white" onClick={() => alert('Switched to Free plan')}>Choose Free</button>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Pro</h3>
          <p className="text-sm text-slate-400">Higher quotas and priority support.</p>
          <button className="mt-4 px-4 py-2 rounded bg-emerald-400 text-black" onClick={() => alert('Switched to Pro plan')}>Choose Pro</button>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Enterprise</h3>
          <p className="text-sm text-slate-400">Custom plan for teams and organizations.</p>
          <button className="mt-4 px-4 py-2 rounded border" onClick={() => alert('Contact sales for Enterprise')}>Contact Sales</button>
        </div>
      </div>

      <div className="pt-6">
        <button className="text-sm text-slate-400" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
