import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = ({ onBack, onSignUp, onSignInSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const scrollToContent = () => {
    window.scrollBy({ top: 300, behavior: 'smooth' });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    onSignInSuccess(email, password);
  };

  return (
    <div className="w-full text-slate-100 flex flex-col font-sans">
      <main className="flex-grow flex flex-col items-center relative px-6 pt-12 pb-32">

        {/* Scroll Hint */}
        <button
          onClick={scrollToContent}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 hover:text-[#49C5E0] transition-colors group z-20 animate-bounce"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Scroll for form</span>
          <ChevronDown size={24} />
        </button>

        <div className="w-full max-w-[480px] flex flex-col items-center mt-8">
          <h1 className="text-3xl font-medium mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-blue-500 text-sm mb-10 font-medium">Sign in to your account to continue</p>

          <form className="w-full space-y-5" onSubmit={handleSignIn}>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#050816] border border-slate-800 rounded-lg py-3 pl-12 pr-4 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Lock className="w-5 h-5" />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#050816] border border-slate-800 rounded-lg py-3 pl-12 pr-12 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
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

            <div className="text-center text-sm pt-2">
              <span className="text-slate-400">Don't have an account? </span>
              <button 
                type="button"
                onClick={onSignUp}
                className="text-blue-500 hover:underline font-medium cursor-pointer"
              >
                Sign up
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
