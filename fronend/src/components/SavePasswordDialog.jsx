import React, { useEffect, useState } from 'react';
import { X, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const SavePasswordDialog = ({ email, password, onSave, onNever, onDismiss }) => {
  const hostname = window.location.hostname;
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onDismiss, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8 pointer-events-none">
      <div 
        className={`bg-white rounded-3xl w-[480px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-200 pointer-events-auto font-sans transition-all duration-300 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        {/* Header Illustration area */}
        <div className="relative h-40 bg-white flex items-center justify-center pt-6">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-6 text-slate-400 hover:bg-slate-100 p-1 rounded-full transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          
          <div className="relative w-80 h-32 flex items-center justify-center scale-110">
             <svg viewBox="0 0 240 100" className="w-full h-full">
               <defs>
                 <filter id="dropshadow" height="130%">
                   <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> 
                   <feOffset dx="0" dy="2" result="offsetblur"/>
                   <feComponentTransfer>
                     <feFuncA type="linear" slope="0.1"/>
                   </feComponentTransfer>
                   <feMerge> 
                     <feMergeNode/>
                     <feMergeNode in="SourceGraphic"/> 
                   </feMerge>
                 </filter>
               </defs>
               
               {/* Illustration Background */}
               <path d="M40 70 Q70 30 120 50 T200 40" fill="none" stroke="#f8f9fa" strokeWidth="50" strokeLinecap="round" opacity="0.6" />
               <circle cx="120" cy="50" r="35" fill="#f1f3f4" />
               <circle cx="180" cy="40" r="18" fill="#f8f9fa" />
               <circle cx="60" cy="60" r="15" fill="#f8f9fa" />
               
               {/* Accents */}
               <circle cx="95" cy="35" r="8" fill="#e6ffed" />
               <rect x="195" y="45" width="8" height="8" rx="2" fill="#fce8e6" transform="rotate(20 199 49)" />
               <circle cx="160" cy="25" r="5" fill="#e8f0fe" />
               
               {/* Center Badge */}
               <rect x="100" y="42" width="45" height="15" rx="7.5" fill="#d2e3fc" />
               <circle cx="145" cy="49.5" r="7.5" fill="#34a853" />
               <rect x="108" y="47.5" width="15" height="4" rx="2" fill="white" opacity="0.8" />
               
               {/* Protective Shield */}
               <g transform="translate(130, 20)" filter="url(#dropshadow)">
                 <circle cx="20" cy="20" r="18" fill="#4285f4" />
                 <path d="M14 20 L18 24 L27 15" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
               </g>
             </svg>
          </div>
        </div>

        <div className="px-10 pb-10 pt-4">
          {/* Header Title with Google Logo Colors */}
          <div className="flex items-center space-x-4 mb-10">
            <div className="flex rounded-md overflow-hidden h-3 bg-[#4285f4]">
               <div className="w-10 h-full bg-[#4285f4]"></div>
               <div className="w-5 h-full bg-[#34a853]"></div>
               <div className="w-5 h-full bg-[#fabb05]"></div>
            </div>
            <h2 className="text-[22px] font-bold text-slate-900 tracking-tight">
              Save password for {hostname}?
            </h2>
          </div>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center">
              <label className="w-28 text-[15px] font-medium text-slate-500">Email</label>
              <div className="flex-grow bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-[16px] text-slate-800 shadow-sm">
                {email || ''}
              </div>
            </div>
            <div className="flex items-center">
              <label className="w-28 text-[15px] font-medium text-slate-500">Password</label>
              <div className="flex-grow bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-[16px] text-slate-800 flex items-center justify-between shadow-sm">
                <span className={`${showPassword ? '' : 'tracking-[0.4em]'} font-medium text-slate-900`}>
                  {showPassword ? password : '•'.repeat(password?.length || 8)}
                </span>
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button 
              onClick={() => {
                setIsVisible(false);
                setTimeout(onNever, 300);
              }}
              className="px-10 py-3.5 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#1967d2] text-[15px] font-bold rounded-full transition-all active:scale-95"
            >
              Never
            </button>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(onSave, 300);
                }}
                className="px-14 py-3.5 bg-[#1a73e8] hover:bg-[#1967d2] text-white text-[15px] font-bold rounded-full transition-all shadow-md shadow-blue-500/20 active:scale-95"
              >
                Save
              </button>
              <button 
                onClick={handleClose}
                className="px-10 py-3.5 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#1967d2] text-[15px] font-bold rounded-full transition-all active:scale-95"
              >
                No thanks
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f9fa] px-10 py-6 border-t border-slate-100">
          <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
            You can use saved passwords on any device. They're saved to <a href="#" className="text-[#1a73e8] hover:underline font-bold">Google Password Manager</a> for {email}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavePasswordDialog;
