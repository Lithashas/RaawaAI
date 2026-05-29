import React, { useEffect, useState } from 'react';

const ConfirmDialog = ({ title, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', onConfirm, onCancel, danger = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onCancel && onCancel(), 180);
  };

  const handleConfirm = () => {
    setIsVisible(false);
    setTimeout(() => onConfirm && onConfirm(), 180);
  };

  return (
    <div className="fixed inset-0 z-[120] bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-6">
      <div className={`bg-[#0b1220] rounded-xl w-full max-w-md overflow-hidden border border-white/5 pointer-events-auto transition-transform duration-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
        <div className="px-6 py-4 border-b border-white/5">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>

        <div className="p-6 space-y-4">
          {description && <p className="text-sm text-slate-300">{description}</p>}

          <div className="flex items-center justify-end space-x-3 pt-2">
            <button onClick={handleClose} className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-sm">{cancelLabel}</button>
            <button onClick={handleConfirm} className={`px-4 py-2 rounded text-sm font-semibold ${danger ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[#1a4f63] hover:bg-[#236a85] text-white'}`}>{confirmLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
