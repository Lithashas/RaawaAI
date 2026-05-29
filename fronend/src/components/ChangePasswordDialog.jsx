import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ChangePasswordDialog = ({ onSave, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose && onClose(), 240);
  };

  const handleSave = () => {
    onSave && onSave(currentPassword, newPassword, confirmPassword);
  };

  return (
    <div className="fixed inset-0 z-[120] bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-6">
      <div className={`bg-[#0b1220] rounded-xl w-full max-w-md overflow-hidden border border-white/5 pointer-events-auto transition-transform duration-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 className="text-lg font-bold">Change Password</h3>
          <button onClick={handleClose} className="text-slate-400 hover:text-white p-1 rounded">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs text-slate-400 uppercase">Current Password</label>
            <div className="mt-2 flex items-center bg-[#06101a] border border-white/5 rounded px-3 py-2">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-transparent outline-none flex-grow text-sm text-white"
                placeholder="Enter current password"
              />
              <button type="button" onClick={() => setShowCurrent(s => !s)} className="text-slate-400 hover:text-white ml-2">{showCurrent ? 'Hide' : 'Show'}</button>
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-400 uppercase">New Password</label>
            <div className="mt-2 flex items-center bg-[#06101a] border border-white/5 rounded px-3 py-2">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-transparent outline-none flex-grow text-sm text-white"
                placeholder="Enter new password"
              />
              <button type="button" onClick={() => setShowNew(s => !s)} className="text-slate-400 hover:text-white ml-2">{showNew ? 'Hide' : 'Show'}</button>
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-400 uppercase">Confirm New Password</label>
            <div className="mt-2 flex items-center bg-[#06101a] border border-white/5 rounded px-3 py-2">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent outline-none flex-grow text-sm text-white"
                placeholder="Confirm new password"
              />
              <button type="button" onClick={() => setShowConfirm(s => !s)} className="text-slate-400 hover:text-white ml-2">{showConfirm ? 'Hide' : 'Show'}</button>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-2">
            <button onClick={handleClose} className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-sm">Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 rounded bg-[#1a4f63] hover:bg-[#236a85] text-white text-sm font-semibold">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordDialog;
