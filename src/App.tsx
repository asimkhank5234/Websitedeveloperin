/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));

    // Instantly trigger top section since it renders above the fold
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.classList.add('active');

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg text-white-text font-sans antialiased overflow-x-hidden relative min-h-screen selection:bg-brand-orange/40 selection:text-white-text">
      {/* Noise Texture Overlay for added visual design flavor */}
      <div className="noise-overlay" />

      {/* Absolute background visual blobs strictly using Orange and Teal themes */}
      <div className="glow-blob blob-orange top-1/4 left-0" />
      <div className="glow-blob blob-teal top-3/4 right-0" />

      {/* Sticky Header System */}
      <Navbar />

      {/* Primary Hero presentation */}
      <Hero />

      {/* Professional services collection breakdown */}
      <Services />

      {/* Biographies, skills and timelines */}
      <About />

      {/* Form inquiries and support channels */}
      <Contact />

      {/* Legal & address layouts */}
      <Footer />

      {/* Quick top back-navigation and persistent WhatsApp support */}
      <WhatsAppFloating />
      <ScrollToTop />
    </div>
  );
}
