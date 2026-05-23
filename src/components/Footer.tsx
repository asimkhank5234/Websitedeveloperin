import React from 'react';
import WebMatrixLogo from './WebMatrixLogo';

export default function Footer() {
  return (
    <footer className="bg-[#05070f] border-t border-white/5 py-12 px-6 md:px-12 text-center text-sm text-muted-text">
      <div className="max-w-7xl mx-auto space-y-6 flex flex-col items-center">
        {/* Brand Logo in Footer */}
        <a href="#home" className="inline-block">
          <WebMatrixLogo size="sm" />
        </a>

        {/* Short value statement */}
        <p className="text-xs text-muted-text max-w-sm font-sans leading-relaxed">
          Smart Websites. Better Rankings. Real Results. High conversion custom web development & digital marketing strategies built for scale.
        </p>

        {/* Copyright notice - must look exactly as specified */}
        <p className="leading-relaxed text-xs">
          &copy; {new Date().getFullYear()} <span className="text-brand-teal font-bold">WebMatrix Solutions</span> &middot; Crafted by <span className="text-brand-orange font-bold">Asim Saleem</span> &middot; All Rights Reserved
        </p>

        {/* Contact details */}
        <p className="text-xs text-muted-text/80 select-text leading-loose">
          📍 Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600 &middot; 📞 <a href="tel:03455161393" className="hover:text-brand-orange text-muted-text hover:underline transition-colors font-medium">0345 5161393</a>
        </p>
      </div>
    </footer>
  );
}
