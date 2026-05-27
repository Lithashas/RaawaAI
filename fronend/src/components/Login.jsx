import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, X, ChevronDown } from 'lucide-react';

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
      <header className="w-full border-b border-white/5 py-6 px-12 flex justify-between items-center bg-[#050816]">
        <button className="flex items-center space-x-3 cursor-pointer group" onClick={onBack}>
          <div className="w-10 h-10 relative flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#49C5E0]" />
              <path d="M12 28V12H20C24 12 26 14 26 18C26 21 24 23 20 24L26 30V32H23L17 25H15V32H12Z" fill="url(#gradLogin)" />
              <defs>
                <linearGradient id="gradLogin" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#49C5E0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1061CC', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#49C5E0] to-[#1061CC] bg-clip-text text-transparent">
            RAAWA AI
          </span>
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center relative px-6 pt-12 pb-32">
        <button
          onClick={onBack}
          className="absolute top-4 right-12 text-slate-500 hover:text-white transition-colors p-2 z-20"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        <button
          onClick={scrollToContent}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 hover:text-[#49C5E0] transition-colors group z-20 animate-bounce"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
            Scroll for form
          </span>
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
                  type={showPassword ? 'text' : 'password'}
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
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-[#0a0f1d]" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1061CC] to-[#49C5E0] hover:scale-[1.01] active:scale-[0.99] text-white font-bold py-3.5 rounded-lg shadow-lg transition-all"
            >
              Sign In
            </button>

            <div className="text-center text-sm pt-1">
              <span className="text-slate-400">Don't have an account? </span>
              <button
                type="button"
                onClick={onSignUp}
                className="text-blue-500 hover:underline font-medium"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
