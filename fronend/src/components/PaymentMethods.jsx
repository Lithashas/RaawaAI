import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethods() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Payment Methods</h2>
      <p className="text-sm text-slate-400">Manage your saved cards and billing details.</p>

      <div className="space-y-4 mt-4">
        <div className="p-4 border rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-300">Visa •••• 4242</p>
            <p className="text-xs text-slate-500">Expires 06/27</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border text-sm" onClick={() => alert('Set as default')}>Set Default</button>
            <button className="px-3 py-1 rounded bg-red-600 text-white text-sm" onClick={() => alert('Removed card')}>Remove</button>
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <button className="px-4 py-2 rounded bg-[#3CD3AD] text-black" onClick={() => alert('Open add card modal')}>Add Payment Method</button>
        </div>
      </div>

      <div className="pt-6">
        <button className="text-sm text-slate-400" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
