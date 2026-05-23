import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import WebMatrixLogo from './WebMatrixLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-brand-dark-bg/85 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="transition-transform hover:scale-[1.02] duration-300">
          <WebMatrixLogo size="sm" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-muted-text hover:text-brand-orange transition-colors font-medium text-sm">Home</a>
          <a href="#services" className="text-muted-text hover:text-brand-teal transition-colors font-medium text-sm">Services</a>
          <a href="#about" className="text-muted-text hover:text-brand-teal transition-colors font-medium text-sm">About</a>
          <a href="#contact" className="text-muted-text hover:text-brand-teal transition-colors font-medium text-sm">Contact</a>
        </div>

        {/* Desktop CTA actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/923455161393"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white-text px-5 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 text-sm shadow-md shadow-brand-orange/15 hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>💬 WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white-text hover:text-brand-orange focus:outline-none p-1.5 rounded-lg border border-white/5 bg-slate-900/40"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5 pointer-events-none" /> : <Menu className="w-5 h-5 pointer-events-none" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer drop menu */}
      {isOpen && (
        <div className="md:hidden border-b border-brand-teal/20 bg-brand-dark-bg/95 backdrop-blur-lg py-5 px-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-medium text-sm">
            <a
              onClick={() => setIsOpen(false)}
              href="#home"
              className="text-white-text hover:text-brand-orange py-2 block border-b border-white/5"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#services"
              className="text-white-text hover:text-brand-teal py-2 block border-b border-white/5"
            >
              Services
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#about"
              className="text-white-text hover:text-brand-teal py-2 block border-b border-white/5"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="text-white-text hover:text-brand-teal py-2 block"
            >
              Contact
            </a>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/923455161393"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange w-full hover:bg-brand-orange/90 text-white-text py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>💬 WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
