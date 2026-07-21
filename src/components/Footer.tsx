import React from 'react';
import WebMatrixLogo from './WebMatrixLogo';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#E5E7EB] border-t border-gray-800 py-12 px-6 md:px-12 text-center text-sm">
      <div className="max-w-7xl mx-auto space-y-6 flex flex-col items-center">
        {/* Brand Logo in Footer */}
        <a href="#home" className="inline-block transition-transform hover:scale-105">
          <WebMatrixLogo size="sm" />
        </a>

        {/* Short value statement */}
        <p className="text-xs text-[#E5E7EB]/80 max-w-sm font-sans leading-relaxed">
          Smart Websites. Better Rankings. Real Results. High conversion custom web development & digital marketing strategies built for scale.
        </p>

        {/* Copyright notice */}
        <p className="leading-relaxed text-xs text-[#E5E7EB]">
          &copy; {new Date().getFullYear()} <span className="text-[#2563EB] font-bold">WebMatrix Solutions</span> &middot; Crafted by <span className="text-brand-orange font-bold">Asim Saleem</span> &middot; All Rights Reserved
        </p>

        {/* Contact details with links color #2563EB */}
        <p className="text-xs text-[#E5E7EB]/70 select-text leading-loose">
          📍 Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600 &middot; 📞 <a href="tel:03455161393" className="text-[#2563EB] hover:text-blue-400 font-semibold hover:underline transition-colors">0345 5161393</a>
        </p>
      </div>
    </footer>
  );
}
