import React from 'react';
import {
  Globe,
  TrendingUp,
  Target,
  MapPin,
  Megaphone,
  ShoppingCart,
  Search,
  Mail
} from 'lucide-react';
import { ServiceItem } from '../types';

export default function Services() {
  const serviceItems: ServiceItem[] = [
    {
      id: 's1',
      iconName: 'Globe',
      title: '🌐 Website Design & Development',
      description: 'Modern, fast and converting websites for your business.',
      bullets: ['UX/UI Design', 'Responsive Development', 'Page Speed Optimization']
    },
    {
      id: 's2',
      iconName: 'TrendingUp',
      title: '📈 SEO Services',
      description: 'Get to the top of Google and permanently increase organic traffic.',
      bullets: ['Technical SEO Audit', 'Keyword Research', 'Content Optimization']
    },
    {
      id: 's3',
      iconName: 'Target',
      title: '🎯 Google Ads',
      description: 'Effective keyword advertising that brings immediate results.',
      bullets: ['Keyword Advertising', 'Display Advertising', 'Remarketing']
    },
    {
      id: 's4',
      iconName: 'MapPin',
      title: '📍 Google Business Profile',
      description: 'Local visibility fixed on Google Maps.',
      bullets: ['Profile Optimization', 'Review Management', 'Local SEO']
    },
    {
      id: 's5',
      iconName: 'Megaphone',
      title: '📣 Social Media Marketing',
      description: 'Build your brand and engage your audience on social media.',
      bullets: ['Content Production', 'Paid Social Advertising', 'Community Management']
    },
    {
      id: 's6',
      iconName: 'ShoppingCart',
      title: '🛒 E-Commerce Building',
      description: 'We build online stores to support sales and growth.',
      bullets: ['Custom E-Commerce Dev', 'Product Introduction', 'Payment System Integration']
    },
    {
      id: 's7',
      iconName: 'Search',
      title: '🔍 E-Commerce SEO',
      description: 'SEO solutions for online stores to increase visibility and sales.',
      bullets: ['Product SEO Optimization', 'Category Optimization', 'Technical SEO']
    },
    {
      id: 's8',
      iconName: 'Mail',
      title: '📧 Full Digital Marketing',
      description: 'Comprehensive digital marketing with a strategic approach.',
      bullets: ['Social Media Marketing', 'Content Strategy', 'Email Marketing']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'Mail': return <Mail className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" class="py-24 bg-[#070b16] relative scroll-reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-20 scroll-reveal">
          <span className="text-sm font-semibold tracking-widest text-[#2fbab3] uppercase bg-[#2fbab3]/10 px-4 py-1.5 rounded-full">
            Expert Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white-text">
            High-Converting <span className="text-brand-orange">Professional</span> Services
          </h2>
          <p className="text-base text-muted-text max-w-xl mx-auto">
            Leveraging 8+ years of expertise to design interfaces and marketing funnels that turn searchers into lifetime customers.
          </p>
        </div>

        {/* CSS grid match layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 select-none">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="bg-card-bg p-8 rounded-2xl flex flex-col justify-between hover-underline-anim card-glow-hover h-full"
            >
              <div className="space-y-5">
                {/* Custom rounded box header with brand-orange/12 background */}
                <div className="w-12 h-12 rounded-xl bg-[#f98300]/12 flex items-center justify-center text-brand-orange">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-serif text-lg font-bold text-white-text select-text">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed select-text">{item.description}</p>
              </div>

              {/* Bullet list specifications with orange indicators */}
              <ul className="mt-8 pt-6 border-t border-white/5 space-y-2.5 text-xs text-muted-text uppercase font-semibold tracking-wider">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-brand-teal text-lg leading-none">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
