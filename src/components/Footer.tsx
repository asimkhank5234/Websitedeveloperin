import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark-bg border-t border-white/5 py-12 px-6 md:px-12 text-center text-sm text-muted-text">
      <div className="max-w-7xl mx-auto space-y-5">
        <p className="font-serif text-2xl font-black tracking-wide text-white-text select-none">
          Asim<span className="text-brand-orange">.</span>
        </p>

        {/* Copyright notice - must look exactly as specified */}
        <p className="leading-relaxed">
          &copy; 2025 <span className="text-brand-orange font-bold">Asim Saleem</span> &middot; Website Designer in Attock &middot; All Rights Reserved
        </p>

        {/* Contact details */}
        <p className="text-xs text-muted-text/80 select-text leading-loose">
          📍 Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600 &middot; 📞 <a href="tel:03455161393" className="hover:text-brand-orange text-muted-text hover:underline transition-colors font-medium">0345 5161393</a>
        </p>
      </div>
    </footer>
  );
}
