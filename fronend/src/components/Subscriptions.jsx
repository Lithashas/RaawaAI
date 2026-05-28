import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#11162d]/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Subscriptions</h2>
      <p className="text-slate-400 mb-6">Manage your billing plan and subscription preferences.</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#07101d] p-6">
          <p className="text-sm text-slate-300">Current Plan</p>
          <h3 className="text-xl font-bold text-white">Pro — Team</h3>
          <p className="text-sm text-slate-500">Seats: 12 • Next billing: 2026-06-01</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#07101d] p-6">
          <p className="text-sm text-slate-300">Payment Method</p>
          <h3 className="text-lg font-semibold text-white">Visa •••• 4242</h3>
          <p className="text-sm text-slate-500">Expires: 06/27</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          className="px-6 py-3 rounded-lg bg-[#3CD3AD] text-[#050816] font-semibold"
          onClick={() => navigate('/settings/subs/change-plan')}
        >
          Change Plan
        </button>
        <button
          className="px-6 py-3 rounded-lg border border-white/10 text-slate-200"
          onClick={() => navigate('/settings/subs/payment-methods')}
        >
          Manage Payment Methods
        </button>
      </div>
    </div>
  );
};

export default Subscriptions;
