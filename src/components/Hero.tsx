import React from 'react';
import { Star, MessageSquare, ChevronRight, Zap } from 'lucide-react';

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
          <span>⚡ Available for Projects</span>
        </div>

        {/* Dynamic Typography Header */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white-text leading-tight max-w-2xl">
          Digital Solutions That <span className="text-brand-orange">Actually</span> Convert
        </h1>

        {/* Concise Subtext */}
        <p className="text-lg text-muted-text max-w-xl leading-relaxed">
          I'm <span className="text-white-text font-bold">Asim Saleem</span>, a Website Designer and Digital Marketing Expert with <span className="text-white-text font-bold">8+ years of dedicated experience</span>. I craft ultra-fast, search-engine-optimized websites and run ad campaigns designed to maximize local and global engagement.
        </p>

        {/* Main buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="https://wa.me/923455161393"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orange/95 text-white-text py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 active:scale-95"
          >
            💬 Get Free Consultation
          </a>
          <a
            href="#services"
            className="border border-brand-teal hover:bg-brand-teal/10 text-brand-teal py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 active:scale-95"
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
        <div className="animate-float w-full max-w-sm bg-card-bg border border-brand-orange/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Inner ambient flare */}
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-brand-orange to-brand-teal rounded-full opacity-10 filter blur-xl"></div>
          
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Gradient Ring Profile Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-brand-orange to-brand-teal p-1 shadow-lg">
                <div className="w-full h-full bg-card-bg rounded-full flex items-center justify-center font-serif text-5xl font-extrabold text-white-text">
                  A
                </div>
              </div>
              {/* Verification badge */}
              <div 
                className="absolute bottom-1 right-1 bg-[#25d366] text-white-text text-xs font-bold p-1 rounded-full border-2 border-card-bg shadow-md"
                title="Google Reviewed Expert"
              >
                ✓
              </div>
            </div>

            {/* Profile context */}
            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl font-bold text-white-text">Asim Saleem</h2>
              <p className="text-brand-teal font-semibold text-xs tracking-wider uppercase">Website Designer & Digital Marketer</p>
            </div>

            {/* Verified standard badge */}
            <div className="flex flex-col items-center gap-1.5 py-1.5 px-5 bg-black/40 rounded-full border border-white/5 shadow-inner">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-white-text font-semibold tracking-wide">5.0 &middot; Google Review</p>
            </div>

            {/* Specialized Skill Chips */}
            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <span className="px-3 py-1 bg-slate-900 text-[11px] font-medium text-pink-400 rounded-full border border-pink-500/10">Web Design</span>
              <span className="px-3 py-1 bg-slate-900 text-[11px] font-medium text-blue-400 rounded-full border border-blue-500/10">SEO Optimization</span>
              <span className="px-3 py-1 bg-slate-900 text-[11px] font-medium text-yellow-400 rounded-full border border-yellow-500/10">Google Ads</span>
              <span className="px-3 py-1 bg-slate-900 text-[11px] font-medium text-cyan-400 rounded-full border border-cyan-500/10">E-Commerce</span>
              <span className="px-3 py-1 bg-slate-900 text-[11px] font-medium text-orange-400 rounded-full border border-orange-500/10">Social Media</span>
              <span className="px-3 py-1 bg-slate-900 text-[11px] font-medium text-red-400 rounded-full border border-red-500/10">Attock PK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
