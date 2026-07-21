import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import WebMatrixLogo from './WebMatrixLogo';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#F3F4F6] text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Background ambient accents */}
        <div className="glow-blob blob-teal -top-10 -left-10 opacity-10" />
        <div className="glow-blob blob-orange top-1/2 right-10 opacity-10" />

        {/* Info Column (Left) */}
        <div className="flex-1 space-y-8 z-10 scroll-reveal">
          {/* Animated project status badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-[#2563EB]/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[#1D4ED8] shadow-sm select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-badge-pulse absolute inline-flex h-full w-full rounded-full bg-[#1D4ED8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D4ED8]"></span>
            </span>
            <span>⚡ WebMatrix Solutions &middot; Live Agency</span>
          </div>

          {/* Dynamic Typography Header */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight max-w-2xl">
            Digital Solutions That <span className="text-[#2563EB]">Actually</span> Convert
          </h1>

          {/* Concise Subtext (Paragraph text color: #374151) */}
          <p className="text-lg text-[#374151] max-w-xl leading-relaxed">
            Get smart websites and premium SEO services by <span className="text-[#111827] font-bold">WebMatrix Solutions</span>, founded by <span className="text-[#111827] font-bold">Asim Saleem</span>. With <span className="text-[#111827] font-bold">4+ years of dedicated expertise</span>, we build ultra-fast, Google-ranked sites and custom campaigns that fuel business growth.
          </p>

          {/* Main buttons (Buttons background: #1D4ED8, color: #FFFFFF) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/923455161393"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:scale-[1.02] active:scale-95"
            >
              💬 Get Free Consultation
            </a>
            <a
              href="#services"
              className="border-2 border-[#1D4ED8] bg-white hover:bg-blue-50 text-[#1D4ED8] py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm"
            >
              Explore Services
            </a>
          </div>

          {/* Local Verification Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-300/80">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1D4ED8]">4+ Years</div>
              <p className="text-[10px] text-[#374151] uppercase tracking-widest font-bold">Industry Exp.</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2563EB] flex items-center gap-1 leading-none">
                5.0 <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 inline" />
              </div>
              <p className="text-[10px] text-[#374151] uppercase tracking-widest font-bold">Google Rating</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">24/7</div>
              <p className="text-[10px] text-[#374151] uppercase tracking-widest font-bold">Open Access</p>
            </div>
          </div>
        </div>

        {/* Floating Card Column (Right) */}
        <div className="flex-1 flex justify-center items-center z-10 w-full scroll-reveal">
          <div className="animate-float w-full max-w-md bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Inner ambient flare */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-100 rounded-full opacity-50 filter blur-xl"></div>
            
            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              {/* Real Logo Vector Instead of placeholder */}
              <div className="relative p-3 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                <WebMatrixLogo size="lg" showText={false} />
                {/* Verification badge */}
                <div 
                  className="absolute -bottom-1 -right-1 bg-[#25d366] text-[#FFFFFF] text-xs font-bold p-1 rounded-full border-2 border-white shadow-md"
                  title="Google Reviewed Expert"
                >
                  ✓
                </div>
              </div>

              {/* Profile context */}
              <div className="space-y-2">
                <WebMatrixLogo size="md" className="justify-center" />
                <p className="text-[#374151] text-sm">Led by <span className="text-[#111827] font-bold">Asim Saleem</span> &middot; Attock, PK</p>
              </div>

              {/* Verified standard badge */}
              <div className="flex flex-col items-center gap-1.5 py-2 px-6 bg-slate-900 text-white rounded-2xl border border-gray-800 shadow-md">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#FFFFFF] font-semibold tracking-wide">5.0 &middot; Google Business Verified</p>
              </div>

              {/* Specialized Skill Chips */}
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium text-[#1D4ED8] rounded-full border border-blue-200">🌐 Web Design</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium text-emerald-700 rounded-full border border-emerald-200">📈 SEO Strategy</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium text-amber-700 rounded-full border border-amber-200">🎯 Google Ads</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium text-cyan-700 rounded-full border border-cyan-200">🛒 E-Commerce</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium text-indigo-700 rounded-full border border-indigo-200">📣 SMM</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium text-[#2563EB] rounded-full border border-blue-200">💼 GBP Audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
