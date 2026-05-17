import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = ({ onSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full text-slate-100 flex flex-col font-sans">
      <main className="flex-grow flex flex-col items-center relative px-6 pt-12 pb-32">

        <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#49C5E0]/40 to-transparent"></div>

          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center space-x-2 px-4 py-1 rounded-full bg-[#69D2E9]/10 border border-[#69D2E9]/20 mb-4 font-medium text-[#69D2E9] text-[9px] uppercase tracking-widest">
              <span>Returning Agent</span>
            </div>

            <h2 className="text-xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-xs text-center">Sign in to your account to continue</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#69D2E9] transition-colors" size={18} />
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-[#0a0f1d] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#69D2E9]/50 focus:border-[#69D2E9]/50 transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#69D2E9] transition-colors" size={18} />
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Enter your password" 
                    className="w-full bg-[#0a0f1d] border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-[#69D2E9]/50 focus:border-[#69D2E9]/50 transition-all placeholder:text-slate-700"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-[#0a0f1d] text-[#69D2E9] focus:ring-offset-0 focus:ring-0" />
                <p className="text-[11px] text-slate-400">Remember me</p>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]">
                Sign In
              </button>

              <div className="text-center mt-2">
                <p className="text-xs text-slate-500">
                  Don't have an account?{' '}
                  <span 
                    onClick={onSignUp}
                    className="text-[#69D2E9] font-bold cursor-pointer hover:underline ml-1"
                  >
                    Sign up
                  </span>
                </p>
              </div>

              <div className="relative py-4 flex items-center justify-center">
                <div className="absolute inset-x-0 h-[1px] bg-white/5"></div>
                <span className="relative z-10 bg-[#0a0f1d] px-4 text-xs font-medium text-slate-500">Or continue with</span>
              </div>

              <button 
                type="button" 
                className="w-full bg-[#1A365D]/30 border border-white/10 hover:bg-[#1A365D]/50 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.273 0 3.19 2.427.604 6.136l4.662 3.629z" />
                  <path fill="#FBBC05" d="M.604 6.136L5.266 9.765A7.066 7.066 0 0 1 12 19.091c.21 0 .415-.013.62-.036l.001.001c.254-.027.503-.073.745-.136L18.028 23.55a12.001 12.001 0 0 0-5.419 1.141c.227 0 .45-.008.672-.023a12.02 12.02 0 0 0 6.62-2.126l-4.662-3.629c-.205.023-.41.036-.62.036a7.066 7.066 0 0 1-6.666-4.91L.604 6.136z" />
                  <path fill="#4285F4" d="M23.491 12.273c0-.818-.073-1.609-.21-2.364H12v4.477h6.49c-.282 1.495-1.127 2.764-2.395 3.614l4.662 3.629c2.727-2.518 4.734-6.227 4.734-10.356z" />
                  <path fill="#34A853" d="M12 24c3.245 0 5.973-1.077 7.964-2.918l-4.662-3.629c-1.118.75-2.545 1.191-3.964 1.191-3.055 0-5.636-2.064-6.564-4.845L.112 17.436C2.112 21.318 6.136 24 12 24z" />
                </svg>
                <div className="flex items-center border-l border-white/10 pl-3">
                  <span className="text-slate-200">Sign in with Google</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;