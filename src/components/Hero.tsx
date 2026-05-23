import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import WebMatrixLogo from './WebMatrixLogo';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
      {/* Background radial blobs strictly supporting orange + teal */}
      <div className="glow-blob blob-orange -top-10 -left-10" />
      <div className="glow-blob blob-teal top-1/2 right-10" />

      {/* Info Column (Left) */}
      <div className="flex-1 space-y-8 z-10 scroll-reveal">
        {/* Animated project status badge */}
        <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-brand-teal/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-brand-teal select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-badge-pulse absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
          </span>
          <span>⚡ WebMatrix Solutions &middot; Live Agency</span>
        </div>

        {/* Dynamic Typography Header */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white-text leading-tight max-w-2xl">
          Digital Solutions That <span className="text-brand-orange">Actually</span> Convert
        </h1>

        {/* Concise Subtext */}
        <p className="text-lg text-muted-text max-w-xl leading-relaxed">
          Get smart websites and premium SEO services by <span className="text-white-text font-bold">WebMatrix Solutions</span>, founded by <span className="text-white-text font-bold">Asim Saleem</span>. With <span className="text-white-text font-bold">8+ years of dedicated expertise</span>, we build ultra-fast, Google-ranked sites and custom campaigns that fuel business growth.
        </p>

        {/* Main buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="https://wa.me/923455161393"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orange/95 text-white-text py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 hover:scale-[1.02] active:scale-95"
          >
            💬 Get Free Consultation
          </a>
          <a
            href="#services"
            className="border border-brand-teal hover:bg-brand-teal/10 text-brand-teal py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Explore Services
          </a>
        </div>

        {/* Local Verification Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-brand-orange">8+ Years</div>
            <p className="text-[10px] text-muted-text uppercase tracking-widest font-bold">Industry Exp.</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-brand-teal flex items-center gap-1 leading-none">
              5.0 <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 inline" />
            </div>
            <p className="text-[10px] text-muted-text uppercase tracking-widest font-bold">Google Rating</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white-text">24/7</div>
            <p className="text-[10px] text-muted-text uppercase tracking-widest font-bold">Open Access</p>
          </div>
        </div>
      </div>

      {/* Floating Card Column (Right) */}
      <div className="flex-1 flex justify-center items-center z-10 w-full scroll-reveal">
        <div className="animate-float w-full max-w-md bg-card-bg border border-brand-orange/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Inner ambient flare */}
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-brand-orange to-brand-teal rounded-full opacity-10 filter blur-xl"></div>
          
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Real Logo Vector Instead of placeholder */}
            <div className="relative p-2.5 bg-brand-dark-bg/40 rounded-2xl border border-white/10 shadow-inner">
              <WebMatrixLogo size="lg" showText={false} />
              {/* Verification badge */}
              <div 
                className="absolute -bottom-1 -right-1 bg-[#25d366] text-white-text text-xs font-bold p-1 rounded-full border-2 border-card-bg shadow-md"
                title="Google Reviewed Expert"
              >
                ✓
              </div>
            </div>

            {/* Profile context */}
            <div className="space-y-2">
              <WebMatrixLogo size="md" className="justify-center" />
              <p className="text-muted-text text-sm">Led by <span className="text-white-text font-semibold">Asim Saleem</span> &middot; Attock, PK</p>
            </div>

            {/* Verified standard badge */}
            <div className="flex flex-col items-center gap-1.5 py-2 px-6 bg-black/40 rounded-2xl border border-white/5 shadow-inner">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-white-text font-semibold tracking-wide">5.0 &middot; Google Business Verified</p>
            </div>

            {/* Specialized Skill Chips */}
            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <span className="px-3 py-1 bg-slate-950 text-xs font-medium text-pink-400 rounded-full border border-pink-500/10">🌐 Web Design</span>
              <span className="px-3 py-1 bg-slate-950 text-xs font-medium text-blue-400 rounded-full border border-blue-500/10">📈 SEO Strategy</span>
              <span className="px-3 py-1 bg-slate-950 text-xs font-medium text-yellow-400 rounded-full border border-yellow-500/10">🎯 Google Ads</span>
              <span className="px-3 py-1 bg-slate-950 text-xs font-medium text-cyan-400 rounded-full border border-cyan-500/10">🛒 E-Commerce</span>
              <span className="px-3 py-1 bg-slate-950 text-xs font-medium text-orange-400 rounded-full border border-orange-500/10">📣 SMM</span>
              <span className="px-3 py-1 bg-slate-950 text-xs font-medium text-[#2fbab3] rounded-full border border-[#2fbab3]/10">💼 GBP Audit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
