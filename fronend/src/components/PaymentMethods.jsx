import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPaymentMethod, listPaymentMethods } from '../services/accountService';

export default function PaymentMethods() {
  const navigate = useNavigate();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [brand, setBrand] = useState('Visa');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const data = await listPaymentMethods();
        setPaymentMethods(data.payment_methods || []);
      } catch (err) {
        console.error(err);
        setErrorMessage(err.message || 'Failed to load payment methods.');
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const handleAddPaymentMethod = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMessage('');
    try {
      const result = await createPaymentMethod({ cardholderName, cardNumber, expiryMonth, expiryYear, brand });
      setPaymentMethods((cur) => [result.payment_method, ...cur]);
      setCardholderName(''); setCardNumber(''); setExpiryMonth(''); setExpiryYear(''); setBrand('Visa');
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to save payment method.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Payment Methods</h2>
      <p className="text-sm text-slate-400">Manage your saved cards and billing details.</p>

      {errorMessage && <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{errorMessage}</div>}

      <div className="grid gap-8 xl:grid-cols-[1fr_420px] mt-4">
        <div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-sm text-slate-400">
            {isLoading ? 'Loading payment methods...' : paymentMethods.length === 0 ? 'You have no saved payment methods.' : `${paymentMethods.length} saved payment method(s).`}
          </div>

          {paymentMethods.map((m) => (
            <div key={m.record_id} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold">{m.brand} ending {m.last4 || '—'}</div>
                  <div className="text-sm text-slate-400">{m.cardholder_name}</div>
                </div>
                <div className="text-sm text-slate-400">{m.expiry_month}/{m.expiry_year}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddPaymentMethod} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <h3 className="text-xl font-bold text-white mb-2">Add Payment Method</h3>
          <div className="mb-3">
            <input value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} required placeholder="Cardholder name" className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none" />
          </div>
          <div className="mb-3">
            <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required placeholder="4242 4242 4242 4242" className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none" />
          </div>
          <div className="grid gap-2 grid-cols-2 mb-3">
            <input value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} required placeholder="MM" className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none" />
            <input value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} required placeholder="YYYY" className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none" />
          </div>
          <div className="mb-3">
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none">
              <option>Visa</option>
              <option>Mastercard</option>
              <option>American Express</option>
            </select>
          </div>
          <button type="submit" disabled={isSaving} className="w-full rounded-2xl bg-[#3CD3AD] px-4 py-3 font-semibold text-[#050816] transition hover:bg-[#55dfba] disabled:opacity-60">{isSaving ? 'Saving...' : 'Save Payment Method'}</button>
        </form>
      </div>

      <div className="pt-6">
        <button className="text-sm text-slate-400" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
