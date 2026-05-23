import React from 'react';
import { Download } from 'lucide-react';

export default function ExportButton() {
  const triggerDownload = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asim Saleem - Website Designer & Digital Marketing Expert</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
  
  <!-- Tailwind Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['"DM Sans"', 'sans-serif'],
          },
          colors: {
            brand: {
              orange: '#f98300',
              teal: '#2fbab3',
              darkBg: '#0a0f1e',
              cardBg: '#111827',
              whiteText: '#f8f9ff',
              mutedText: '#94a3b8',
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0a0f1e;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e293b;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #f98300;
    }

    /* Floating Animation */
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(1deg);
      }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    /* Pulsing Badge Dot Animation */
    @keyframes badge-pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.4);
        opacity: 0.4;
      }
    }
    .animate-badge-pulse {
      animation: badge-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    /* Radial Gradient Glow Blobs */
    .glow-blob {
      position: absolute;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.12;
      pointer-events: none;
      z-index: 0;
    }
    .blob-orange {
      background-color: #f98300;
    }
    .blob-teal {
      background-color: #2fbab3;
    }

    /* Noise Texture Overlay */
    .noise-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      content: "";
      opacity: 0.02;
      pointer-events: none;
      z-index: 9999;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    /* Scroll reveal transitions */
    .scroll-reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .scroll-reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Card Glow Hover */
    .card-glow-hover {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid rgba(148, 163, 184, 0.08);
    }
    .card-glow-hover:hover {
      transform: translateY(-8px);
      border-color: rgba(249, 131, 0, 0.4);
      box-shadow: 0 10px 30px -10px rgba(249, 131, 0, 0.2);
    }

    /* Service card hover underline animation */
    .hover-underline-anim {
      position: relative;
      overflow: hidden;
    }
    .hover-underline-anim::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #f98300, #2fbab3);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .hover-underline-anim:hover::after {
      transform: scaleX(1);
    }
  </style>
</head>
<body class="bg-[#0a0f1e] text-[#f8f9ff] font-sans antialiased overflow-x-hidden relative">

  <!-- Noise Overlay -->
  <div class="noise-overlay"></div>

  <!-- Background Glow Blobs -->
  <div class="glow-blob blob-orange top-20 left-10"></div>
  <div class="glow-blob blob-teal top-80 right-10"></div>
  <div class="glow-blob blob-orange bottom-40 right-1/4"></div>

  <!-- 1. NAVBAR -->
  <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-[#0a0f1e]/80 border-b border-[#111827] transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="font-serif text-3xl font-bold tracking-tight text-[#f8f9ff] hover:text-[#f98300] transition-colors">
        Asim<span class="text-[#f98300]">.</span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-[#94a3b8] hover:text-[#f98300] transition-colors font-medium">Home</a>
        <a href="#services" class="text-[#94a3b8] hover:text-[#f2fbba] hover:text-[#2fbab3] transition-colors font-medium">Services</a>
        <a href="#about" class="text-[#94a3b8] hover:text-[#2fbab3] transition-colors font-medium">About</a>
        <a href="#contact" class="text-[#94a3b8] hover:text-[#2fbab3] transition-colors font-medium">Contact</a>
      </div>

      <!-- CTA -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="https://wa.me/923455161393" target="_blank" rel="noopener noreferrer" class="bg-[#f98300] hover:bg-[#e07500] text-white px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm shadow-lg shadow-orange-500/10">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.861-1.863-4.337-2.887-6.971-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.773.465 3.5 1.343 5.011l-.986 3.6 3.69-.968zm14.15-5.904c-.302-.152-1.791-.883-2.069-.984-.277-.101-.48-.152-.68.152-.2.304-.776.984-.95 1.185-.175.203-.35.228-.652.076-.301-.151-1.272-.469-2.422-1.496-.895-.798-1.5-1.783-1.675-2.086-.175-.304-.019-.468.132-.619.136-.135.302-.35.453-.524.151-.174.202-.298.302-.5.101-.203.05-.38-.025-.53-.075-.152-.68-1.636-.931-2.24-.244-.587-.492-.508-.68-.517-.175-.01-.376-.01-.577-.01-.201 0-.528.076-.804.38-.277.303-1.057 1.033-1.057 2.52 0 1.488 1.082 2.922 1.233 3.125.151.202 2.128 3.25 5.156 4.557.72.31 1.282.497 1.72.636.723.23 1.381.19 1.902.112.58-.087 1.793-.733 2.044-1.439.251-.706.251-1.313.176-1.439-.075-.126-.277-.202-.579-.354z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>

      <!-- Hamburger Button (Mobile) -->
      <button id="menu-btn" class="md:hidden text-[#f8f9ff] hover:text-[#f98300] focus:outline-none" aria-label="Open navigation menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-[#0d1326] border-b border-[#2fbab3]/20 py-4 px-6 md:px-12 flex flex-col space-y-4">
      <a href="#home" class="text-[#f8f9ff] hover:text-[#f98300] transition-colors py-2 block font-medium">Home</a>
      <a href="#services" class="text-[#f8f9ff] hover:text-[#2fbab3] transition-colors py-2 block font-medium">Services</a>
      <a href="#about" class="text-[#f8f9ff] hover:text-[#2fbab3] transition-colors py-2 block font-medium">About</a>
      <a href="#contact" class="text-[#f8f9ff] hover:text-[#2fbab3] transition-colors py-2 block font-medium">Contact</a>
      <a href="https://wa.me/923455161393" target="_blank" rel="noopener noreferrer" class="bg-[#f98300] text-center hover:bg-[#e07500] text-white py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.861-1.863-4.337-2.887-6.971-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.773.465 3.5 1.343 5.011l-.986 3.6 3.69-.968zm14.15-5.904c-.302-.152-1.791-.883-2.069-.984-.277-.101-.48-.152-.68.152-.2.304-.776.984-.95 1.185-.175.203-.35.228-.652.076-.301-.151-1.272-.469-2.422-1.496-.895-.798-1.5-1.783-1.675-2.086-.175-.304-.019-.468.132-.619.136-.135.302-.35.453-.524.151-.174.202-.298.302-.5.101-.203.05-.38-.025-.53-.075-.152-.68-1.636-.931-2.24-.244-.587-.492-.508-.68-.517-.175-.01-.376-.01-.577-.01-.201 0-.528.076-.804.38-.277.303-1.057 1.033-1.057 2.52 0 1.488 1.082 2.922 1.233 3.125.151.202 2.128 3.25 5.156 4.557.72.31 1.282.497 1.72.636.723.23 1.381.19 1.902.112.58-.087 1.793-.733 2.044-1.439.251-.706.251-1.313.176-1.439-.075-.126-.277-.202-.579-.354z"/>
        </svg>
        💬 WhatsApp
      </a>
    </div>
  </nav>

  <!-- 2. HERO SECTION -->
  <section id="home" class="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
    <!-- Left Hero Info -->
    <div class="flex-1 space-y-8 z-10">
      <!-- Available Badge -->
      <div class="inline-flex items-center gap-2 bg-[#111827] border border-[#2fbab3]/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[#2fbab3]">
        <span class="relative flex h-2 w-2">
          <span class="animate-badge-pulse absolute inline-flex h-full w-full rounded-full bg-[#2fbab3] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#2fbab3]"></span>
        </span>
        ⚡ Available for Projects
      </div>

      <!-- Headline -->
      <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f8f9ff] leading-tight max-w-2xl">
        Digital Solutions That <span class="text-[#f98300]">Actually</span> Convert
      </h1>

      <!-- Intro Subtext -->
      <p class="text-lg text-[#94a3b8] max-w-xl leading-relaxed">
        With over <span class="text-[#f8f9ff] font-semibold">8+ Years of Professional Experience</span>, I engineer lightning-fast websites and high-impact digital marketing campaigns. Proudly empowering local businesses in Attock and expanding brands globally.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <a href="https://wa.me/923455161393" target="_blank" rel="noopener noreferrer" class="bg-[#f98300]/95 hover:bg-[#f98300] text-[#f8f9ff] py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95">
          💬 Get Free Consultation
        </a>
        <a href="#services" class="border border-[#2fbab3] hover:bg-[#2fbab3]/10 text-[#2fbab3] py-4 px-8 rounded-full font-bold text-center tracking-wide transition-all duration-300">
          Explore Services
        </a>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-3 gap-4 pt-6 border-t border-[#111827]">
        <div class="space-y-1">
          <div class="text-2xl sm:text-3xl font-serif font-bold text-[#f98300]">8+</div>
          <p class="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold">Years Exp.</p>
        </div>
        <div class="space-y-1">
          <div class="text-2xl sm:text-3xl font-serif font-bold text-[#2fbab3] flex items-center gap-1">
            5.0 <span class="text-yellow-400 text-sm">★</span>
          </div>
          <p class="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold">Google Rating</p>
        </div>
        <div class="space-y-1">
          <div class="text-2xl sm:text-3xl font-serif font-bold text-[#f8f9ff]">24/7</div>
          <p class="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold">Available</p>
        </div>
      </div>
    </div>

    <!-- Right Hero: Floating Profile Card -->
    <div class="flex-1 flex justify-center items-center z-10 w-full">
      <div class="animate-float w-full max-w-sm bg-[#111827] border border-orange-500/10 p-8 rounded-3xl relative shadow-2xl overflow-hidden shadow-orange-500/5">
        <!-- Absolute decorative gradient background inside card -->
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#f98300] to-[#2fbab3] rounded-full opacity-10 filter blur-xl"></div>
        
        <div class="flex flex-col items-center text-center space-y-6 relative z-10">
          <!-- Avatar Icon -->
          <div class="relative">
            <div class="w-28 h-28 rounded-full bg-gradient-to-tr from-[#f98300] to-[#2fbab3] p-1 shadow-xl">
              <div class="w-full h-full bg-[#111827] rounded-full flex items-center justify-center font-serif text-5xl font-extrabold text-[#f8f9ff]">
                A
              </div>
            </div>
            <!-- Absolute small check badge -->
            <div class="absolute bottom-1 right-1 bg-green-500 hover:bg-green-600 transition-colors h-6 w-6 rounded-full flex items-center justify-center border-2 border-[#111827] text-white text-[10px]" title="Verified Expert">
              ✓
            </div>
          </div>

          <!-- Titles -->
          <div class="space-y-2">
            <h2 class="font-serif text-2xl font-bold text-[#f8f9ff]">Asim Saleem</h2>
            <p class="text-[#2fbab3] font-semibold text-xs tracking-wide uppercase">Website Designer & Digital Marketer</p>
          </div>

          <!-- Stars / Rating -->
          <div class="flex flex-col items-center space-y-1 py-1 px-4 bg-[#0a0f1e]/60 rounded-full border border-slate-800/80">
            <div class="flex text-yellow-400 text-sm gap-1">
              ★★★★★
            </div>
            <p class="text-xs text-[#f8f9ff] font-medium">5.0 · Google Review</p>
          </div>

          <!-- Chips Grid -->
          <div class="flex flex-wrap gap-2 justify-center pt-2">
            <span class="px-3 py-1.5 bg-[#0a0f1e] text-xs font-medium text-[#c084fc] hover:text-[#f8f9ff] rounded-full border border-purple-500/10 transition-all">Web Design</span>
            <span class="px-3 py-1.5 bg-[#0a0f1e] text-xs font-medium text-[#38bdf8] hover:text-[#f8f9ff] rounded-full border border-sky-500/10 transition-all">SEO</span>
            <span class="px-3 py-1.5 bg-[#0a0f1e] text-xs font-medium text-[#f43f5e] hover:text-[#f8f9ff] rounded-full border border-rose-500/10 transition-all">Google Ads</span>
            <span class="px-3 py-1.5 bg-[#0a0f1e] text-xs font-medium text-[#2fbab3] hover:text-[#f8f9ff] rounded-full border border-[#2fbab3]/10 transition-all">E-Commerce</span>
            <span class="px-3 py-1.5 bg-[#0a0f1e] text-xs font-medium text-[#f59e0b] hover:text-[#f8f9ff] rounded-full border border-amber-500/10 transition-all">Social Media</span>
            <span class="px-3 py-1.5 bg-[#0a0f1e] text-xs font-medium text-[#ef4444] hover:text-[#f8f9ff] rounded-full border border-red-500/10 transition-all">Attock PK</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. SERVICES SECTION -->
  <section id="services" class="py-24 bg-[#070b16] relative">
    <div class="max-w-7xl mx-auto px-6 md:px-12 scroll-reveal">
      <!-- Section Header -->
      <div class="text-center space-y-4 mb-16">
        <span class="text-sm font-semibold tracking-widest text-[#2fbab3] uppercase bg-[#2fbab3]/10 px-4 py-1.5 rounded-full">
          My Expertise
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f9ff]">
          High-Converting <span class="text-[#f98300]">Services</span>
        </h2>
        <p class="text-base text-[#94a3b8] max-w-xl mx-auto">
          Tailored client-first digital solutions designed to accelerate growth, drive visibility, and secure continuous leads.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        <!-- Card 1 -->
        <div class="bg-[#111827] p-8 rounded-2xl.card-glow-hover flex flex-col justify-between hover-underline-anim card-glow-hover rounded-2xl h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">🌐 Website Design & Development</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">Modern, fast and converting websites for your business.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> UX/UI Design</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Responsive Development</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Page Speed Optimization</li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">📈 SEO Services</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">Get to the top of Google and permanently increase organic traffic.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Technical SEO Audit</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Keyword Research</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Content Optimization</li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">🎯 Google Ads</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">Effective keyword advertising that brings immediate results.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Keyword Advertising</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Display Advertising</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Remarketing</li>
          </ul>
        </div>

        <!-- Card 4 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">📍 Google Business Profile</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">Local visibility fixed on Google Maps.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Profile Optimization</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Review Management</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Local SEO</li>
          </ul>
        </div>

        <!-- Card 5 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12.24 10.285V4.4a2.2 2.2 0 0 1 2.2-2.2H21.6a2.2 2.2 0 0 1 2.2 2.2v5.885M2 17h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Z"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">📣 Social Media Marketing</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">Build your brand and engage your audience on social media.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Content Production</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Paid Social Advertising</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Community Management</li>
          </ul>
        </div>

        <!-- Card 6 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">🛒 E-Commerce Building</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">We build online stores to support sales and growth.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Custom E-Commerce Dev</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Product Introduction</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Payment System Integration</li>
          </ul>
        </div>

        <!-- Card 7 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">🔍 E-Commerce SEO</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">SEO solutions for online stores to increase visibility and sales.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Product SEO Optimization</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Category Optimization</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Technical SEO</li>
          </ul>
        </div>

        <!-- Card 8 -->
        <div class="bg-[#111827] p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full">
          <div class="space-y-5">
            <div class="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-[#f98300]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#f8f9ff]">📧 Full Digital Marketing</h3>
            <p class="text-sm text-[#94a3b8] leading-relaxed">Comprehensive digital marketing with a strategic approach.</p>
          </div>
          <ul class="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-[#94a3b8] uppercase font-semibold">
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Social Media Marketing</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Content Strategy</li>
            <li class="flex items-center gap-2"><span class="text-[#2fbab3]">•</span> Email Marketing</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. ABOUT SECTION -->
  <section id="about" class="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start scroll-reveal">
      <!-- Left: Journey Bio -->
      <div class="space-y-8">
        <span class="text-sm font-semibold tracking-widest text-[#2fbab3] uppercase bg-[#2fbab3]/10 px-4 py-1.5 rounded-full">
          My Journey
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f9ff]">
          8+ Years of <span class="text-[#f98300]">Refining</span> the Digital Craft
        </h2>
        <p class="text-[#94a3b8] leading-relaxed text-base">
          I am Asim Saleem, a dedicated Website Designer and Digital Marketing Expert based in Sheen Bagh, Attock. For nearly a decade, I have leveraged data-driven design standards, high-converting copy, SEO strategies, and custom development methodologies to amplify brand authority and double direct business revenues. My client philosophy is rooted in total transparency, unyielding performance levels, and continuous local and global optimization.
        </p>

        <!-- Skill tags (teal background style) -->
        <div class="space-y-4">
          <h3 class="text-[#f8f9ff] font-bold text-lg font-serif">A Few of My Core Technologies:</h3>
          <div class="flex flex-wrap gap-2.5">
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">WordPress</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">Shopify</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">Google Analytics</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">Meta Ads</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">Figma</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">WooCommerce</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">PHP</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">JavaScript</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">Google Search Console</span>
            <span class="px-3.5 py-2 bg-[#2fbab3]/10 text-xs font-semibold text-[#2fbab3] rounded-lg transition-all border border-[#2fbab3]/15 hover:border-[#2fbab3]/40">Ahrefs</span>
          </div>
        </div>
      </div>

      <!-- Right: Journey Timeline Card -->
      <div class="bg-[#111827] p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-xl relative">
        <h3 class="font-serif text-2xl font-bold text-white mb-8 pb-4 border-b border-slate-800/85">Milestone Timeline</h3>
        
        <!-- Timeline wrapper -->
        <div class="relative pl-8 space-y-12">
          <!-- Left timeline vertical border (gradient) -->
          <div class="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#f98300] to-[#2fbab3]"></div>

          <!-- Timeline item 1 -->
          <div class="relative">
            <!-- Timeline dot -->
            <div class="absolute -left-8 top-1.5 h-6.5 w-6.5 rounded-full bg-[#f98300] border-4 border-[#111827] flex items-center justify-center text-[10px] text-white">
              🎓
            </div>
            <div class="space-y-1.5">
              <span class="text-[#f98300] text-xs font-bold uppercase tracking-wider">2016 · START</span>
              <h4 class="text-white font-bold text-lg font-serif">Freelance Launch</h4>
              <p class="text-sm text-[#94a3b8]">Began freelance web design career, building pixel-perfect digital properties for global clients.</p>
            </div>
          </div>

          <!-- Timeline item 2 -->
          <div class="relative">
            <div class="absolute -left-8 top-1.5 h-6.5 w-6.5 rounded-full bg-[#f98300] border-4 border-[#111827] flex items-center justify-center text-[10px] text-white">
              🚀
            </div>
            <div class="space-y-1.5">
              <span class="text-[#2fbab3] text-xs font-bold uppercase tracking-wider">2018 · GROWTH</span>
              <h4 class="text-white font-bold text-lg font-serif">Service Expansion</h4>
              <p class="text-sm text-[#94a3b8]">Expanded services into advanced SEO schemes, and targeted digital marketing campaigns.</p>
            </div>
          </div>

          <!-- Timeline item 3 -->
          <div class="relative">
            <div class="absolute -left-8 top-1.5 h-6.5 w-6.5 rounded-full bg-[#f98300] border-4 border-[#111827] flex items-center justify-center text-[10px] text-white">
              🏆
            </div>
            <div class="space-y-1.5">
              <span class="text-[#f98300] text-xs font-bold uppercase tracking-wider">2020 · MILESTONE</span>
              <h4 class="text-white font-bold text-lg font-serif">Attock Agency Launch</h4>
              <p class="text-sm text-[#94a3b8]">Established high-performance, full-service localized digital solutions headquartered in Attock.</p>
            </div>
          </div>

          <!-- Timeline item 4 -->
          <div class="relative">
            <div class="absolute -left-8 top-1.5 h-6.5 w-6.5 rounded-full bg-[#f98300] border-4 border-[#111827] flex items-center justify-center text-[10px] text-white">
              ⭐
            </div>
            <div class="space-y-1.5">
              <span class="text-[#2fbab3] text-xs font-bold uppercase tracking-wider">2024 · TODAY</span>
              <h4 class="text-white font-bold text-lg font-serif">Unrivaled Authority</h4>
              <p class="text-sm text-[#94a3b8]">Leading status with active 5.0 Google review ratings, 8+ rich years in business, and round-the-clock availability.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- 5. CONTACT SECTION -->
  <section id="contact" class="py-24 bg-[#070b16] relative">
    <div class="max-w-7xl mx-auto px-6 md:px-12 scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      <!-- Left Side details -->
      <div class="space-y-10">
        <div class="space-y-4">
          <span class="text-sm font-semibold tracking-widest text-[#2fbab3] uppercase bg-[#2fbab3]/10 px-4 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f9ff]">
            Let's Build Something <span class="text-[#f98300]">Incredible</span> Together
          </h2>
          <p class="text-[#94a3b8] max-w-lg">
            Have questions or interested in working on a project? Send your details or chat directly on WhatsApp right now.
          </p>
        </div>

        <!-- Contact Items List -->
        <div class="space-y-6">
          <!-- Map Location -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
              <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif font-bold text-white text-lg">Official Office</h4>
              <p class="text-sm text-[#94a3b8] leading-relaxed">Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600, Pakistan</p>
            </div>
          </div>

          <!-- Phone (click-to-call) -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif font-bold text-white text-lg">Direct Phone Call</h4>
              <p class="text-sm font-semibold">
                <a href="tel:03455161393" class="text-[#f98300] hover:underline hover:text-orange-400 transition-colors">0345 5161393</a>
              </p>
            </div>
          </div>

          <!-- Schedule -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif font-bold text-white text-lg">Service Hours</h4>
              <p class="text-sm text-[#94a3b8]">Open 24 Hours · 7 Days a week</p>
            </div>
          </div>
        </div>

        <!-- WhatsApp Big CTA -->
        <div>
          <a href="https://wa.me/923455161393" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-4.5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-green-500/10">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.861-1.863-4.337-2.887-6.971-2.888-5.442 0-9.866 4.42-9.87 9.86-.001 1.773.465 3.5 1.343 5.011l-.986 3.6 3.69-.968zm14.15-5.904c-.302-.152-1.791-.883-2.069-.984-.277-.101-.48-.152-.68.152-.2.304-.776.984-.95 1.185-.175.203-.35.228-.652.076-.301-.151-1.272-.469-2.422-1.496-.895-.798-1.5-1.783-1.675-2.086-.175-.304-.019-.468.132-.619.136-.135.302-.35.453-.524.151-.174.202-.298.302-.5.101-.203.05-.38-.025-.53-.075-.152-.68-1.636-.931-2.24-.244-.587-.492-.508-.68-.517-.175-.01-.376-.01-.577-.01-.201 0-.528.076-.804.38-.277.303-1.057 1.033-1.057 2.52 0 1.488 1.082 2.922 1.233 3.125.151.202 2.128 3.25 5.156 4.557.72.31 1.282.497 1.72.636.723.23 1.381.19 1.902.112.58-.087 1.793-.733 2.044-1.439.251-.706.251-1.313.176-1.439-.075-.126-.277-.202-.579-.354z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <!-- Social Links Pill Row -->
        <div class="space-y-3">
          <h4 class="font-serif font-bold text-white text-sm tracking-wider uppercase">Social Channels</h4>
          <div class="flex flex-wrap gap-3">
            <a href="https://x.com/asimkhank520" target="_blank" rel="noopener noreferrer" class="bg-[#111827] border border-slate-800 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-[#94a3b8] transition-all flex items-center gap-2">
              🐦 X (Twitter)
            </a>
            <a href="https://www.facebook.com/WebmatrixSolution1" target="_blank" rel="noopener noreferrer" class="bg-[#111827] border border-slate-800 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-[#94a3b8] transition-all flex items-center gap-2">
              📘 Facebook
            </a>
            <a href="https://www.instagram.com/asimkhank5234/" target="_blank" rel="noopener noreferrer" class="bg-[#111827] border border-slate-800 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-[#94a3b8] transition-all flex items-center gap-2">
              📸 Instagram
            </a>
            <a href="https://www.linkedin.com/in/asim-saleem-1a55062a8/" target="_blank" rel="noopener noreferrer" class="bg-[#111827] border border-slate-800 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-[#94a3b8] transition-all flex items-center gap-2">
              💼 LinkedIn
            </a>
            <a href="https://www.pinterest.com/asimkhank520/" target="_blank" rel="noopener noreferrer" class="bg-[#111827] border border-slate-800 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-[#94a3b8] transition-all flex items-center gap-2">
              📌 Pinterest
            </a>
          </div>
        </div>
      </div>

      <!-- Right Side Contact Form -->
      <div class="bg-[#111827] p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl relative">
        <form id="contact-form" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="text-xs uppercase font-bold tracking-wider text-[#94a3b8]">Full Name</label>
              <input type="text" id="name" required class="w-full bg-[#0a0f1e] border border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f98300]/60 focus:ring-1 focus:ring-[#f98300]/60 transition-all">
            </div>
            <div class="space-y-2">
              <label for="phone" class="text-xs uppercase font-bold tracking-wider text-[#94a3b8]">Phone Number</label>
              <input type="tel" id="phone" required class="w-full bg-[#0a0f1e] border border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f98300]/60 focus:ring-1 focus:ring-[#f98300]/60 transition-all">
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-xs uppercase font-bold tracking-wider text-[#94a3b8]">Email Address</label>
            <input type="email" id="email" required class="w-full bg-[#0a0f1e] border border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f98300]/60 focus:ring-1 focus:ring-[#f98300]/60 transition-all">
          </div>

          <div class="space-y-2">
            <label for="service" class="text-xs uppercase font-bold tracking-wider text-[#94a3b8]">Target Service Needed</label>
            <select id="service" required class="w-full bg-[#0a0f1e] border border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f98300]/60 focus:ring-1 focus:ring-[#f98300]/60 transition-all">
              <option value="" disabled selected>Choose a service...</option>
              <option value="Website Design & Development">🌐 Website Design & Development</option>
              <option value="SEO Services">📈 SEO Services</option>
              <option value="Google Ads Campaign">🎯 Google Ads</option>
              <option value="Google Business Profile Optimization">📍 Google Business Profile</option>
              <option value="Social Media Marketing">📣 Social Media Marketing</option>
              <option value="E-Commerce Store Building">🛒 E-Commerce Building</option>
              <option value="E-Commerce SEO">🔍 E-Commerce SEO</option>
              <option value="Full Digital Marketing Management">📧 Full Digital Marketing</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="message" class="text-xs uppercase font-bold tracking-wider text-[#94a3b8]">Service Brief / Details</label>
            <textarea id="message" rows="5" required class="w-full bg-[#0a0f1e] border border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f98300]/60 focus:ring-1 focus:ring-[#f98300]/60 transition-all resize-none"></textarea>
          </div>

          <button type="submit" class="w-full bg-[#f98300] hover:bg-[#e07500] text-white font-bold py-4 rounded-xl tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-98">
            Send Message Securely
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- 6. FOOTER -->
  <footer class="bg-[#0a0f1e] border-t border-slate-900 py-12 px-6 md:px-12 text-center text-sm text-[#94a3b8]">
    <div class="max-w-7xl mx-auto space-y-6">
      <p class="font-serif text-xl font-bold tracking-wide text-white">
        Asim<span class="text-[#f98300]">.</span>
      </p>
      
      <p class="leading-relaxed">
        &copy; 2025 <span class="text-[#f98300] font-semibold">Asim Saleem</span> &middot; Website Designer in Attock &middot; All Rights Reserved
      </p>

      <p class="text-xs">
        📍 Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600 &middot; 📞 <a href="tel:03455161393" class="hover:text-[#f98300] transition-colors hover:underline">0345 5161393</a>
      </p>
    </div>
  </footer>

  <!-- Scroll To Top Button -->
  <button id="scroll-to-top" class="fixed bottom-6 right-6 p-3.5 bg-[#f98300] hover:bg-[#e07500] text-white rounded-full opacity-0 translate-y-10 transition-all duration-300 z-50 cursor-pointer shadow-lg shadow-orange-500/20 active:scale-90" aria-label="Scroll to top of the page">
    <svg class="w-5 h-5 fill-none stroke-current" stroke-width="2.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  </button>

  <!-- Vanilla Javascript handlers mimicking behavior -->
  <script>
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // 2. Scroll reveal handler using IntersectionObserver
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: once anim triggers, we can opt-out monitoring
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // Force trigger immediate scrollreveal on first load elements
    setTimeout(() => {
      document.querySelectorAll('#home').forEach(el => el.classList.add('active'));
    }, 100);

    // 3. Scroll to top button visibility
    const scrollTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove('opacity-0', 'translate-y-10');
        scrollTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'translate-y-10');
        scrollTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // 4. Submit contact form and popup alert directing to WhatsApp
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const n = document.getElementById('name').value;
      const s = document.getElementById('service').value;
      const ph = document.getElementById('phone').value;
      const msg = document.getElementById('message').value;

      // Make a beautiful prompt alerting redirection
      alert('Thank you for reaching out, ' + n + '! We are now redirecting you directly to Asim Saleem on WhatsApp with your selected inquiry: "' + s + '". Feel free to send the pre-filled text in the chat!');
      
      const whatsappText = encodeURIComponent(
        'Hello Asim,\\n\\n' +
        'My Name: ' + n + '\\n' +
        'My Phone: ' + ph + '\\n' +
        'Service Requested: ' + s + '\\n\\n' +
        'Inquiry Details:\\n' + msg
      );
      
      window.open('https://wa.me/923455161393?text=' + whatsappText, '_blank');
      contactForm.reset();
    });
  </script>
</body>
</html>`;

    // Download triggered as blob
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'asim-saleem-portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      id="export-btn-ui"
      onClick={triggerDownload}
      className="inline-flex items-center gap-2 bg-[#f98300]/90 hover:bg-[#f98300] hover:scale-105 active:scale-95 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm shadow-md"
      title="Download as a single-file raw HTML/CSS portfolio to host anywhere!"
    >
      <Download className="w-4 h-4" />
      <span>Download Single HTML</span>
    </button>
  );
}
