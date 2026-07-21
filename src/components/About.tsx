import React from 'react';
import { Star, GraduationCap, TrendingUp, Award } from 'lucide-react';
import { MilestoneItem } from '../types';

export default function About() {
  const milestones: MilestoneItem[] = [
    {
      year: '2022 · START',
      title: 'Freelance Design Genesis',
      description: 'Began freelance web design career, engineering responsive and engaging digital experiences for worldwide businesses.',
      iconType: 'college'
    },
    {
      year: '2023 · GROWTH',
      title: 'SEO & Performance Expansion',
      description: 'Strengthened capabilities by incorporating comprehensive search-ranking mechanisms and advanced direct promotion campaigns.',
      iconType: 'growth'
    },
    {
      year: '2024 · MILESTONE',
      title: 'Full-Scale Service Launch in Attock',
      description: 'Established full-scale, conversion-driven digital agency based out of Sheen Bagh, Attock directly backing regional merchants.',
      iconType: 'milestone'
    },
    {
      year: '2026 · TODAY',
      title: '5.0 Google Reviewed Authority',
      description: 'Cemented status as top resource for localized enterprises, boasting 4+ years experience and 24/7 client operations.',
      iconType: 'star'
    }
  ];

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'college':
        return <span className="text-sm">🎓</span>;
      case 'growth':
        return <span className="text-sm">🚀</span>;
      case 'milestone':
        return <span className="text-sm">🏆</span>;
      case 'star':
        return <span className="text-sm">⭐</span>;
      default:
        return <span className="text-sm">✓</span>;
    }
  };

  const skillTags = [
    'WordPress',
    'Shopify',
    'Google Analytics',
    'Meta Ads',
    'Figma',
    'WooCommerce',
    'PHP',
    'JavaScript',
    'Google Search Console',
    'Ahrefs'
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden scroll-reveal text-[#111827]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Biography Column (Left) */}
        <div className="space-y-8">
          <span className="text-xs font-semibold tracking-widest text-[#1D4ED8] uppercase bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full select-none">
            The Strategist
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
            4+ Years of <span className="text-[#2563EB]">Refining</span> The Digital Craft in Attock
          </h2>
          <div className="space-y-4 text-sm text-[#374151] leading-relaxed font-medium">
            <p>
              I am Asim Saleem, a custom website architect and experienced marketer based in Sheen Bagh, Attock. For nearly half a decade, I have worked hand-in-hand with regional business owners and global organizations to build elegant, high-impact brands.
            </p>
            <p>
              My philosophy rejects templates and cookie-cutter systems. True digital success is rooted in high-speed, secure web infrastructure coupled with tailored SEO schemes and highly optimized Google Ads. Let's modernize your operations and drive higher value today.
            </p>
          </div>

          {/* Skill tags wrapper */}
          <div className="space-y-4 pt-4">
            <h3 className="text-[#111827] font-bold text-lg font-serif">Core Specializations & Platforms:</h3>
            <div className="flex flex-wrap gap-2.5">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-2 bg-blue-50 text-xs font-bold text-[#1D4ED8] rounded-lg transition-all border border-blue-200 hover:border-blue-400 hover:bg-blue-100 select-none shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Column (Right) */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl relative">
          <h3 className="font-serif text-2xl font-bold text-[#111827] mb-8 pb-4 border-b border-gray-200 uppercase tracking-wide">
            Milestone Journey
          </h3>
          
          <div className="relative pl-8 space-y-12">
            {/* Elegant vertical progress divider */}
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-blue-500/30" />

            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Fixed dot item in Blue */}
                <div className="absolute -left-8 top-1.5 h-7 w-7 rounded-full bg-[#1D4ED8] border-4 border-white flex items-center justify-center text-white shadow-md shadow-blue-600/20 transition-transform group-hover:scale-110 select-none z-10">
                  {getTimelineIcon(milestone.iconType)}
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    {milestone.year}
                  </span>
                  <h4 className="text-[#111827] font-bold text-lg font-serif">{milestone.title}</h4>
                  <p className="text-sm text-[#374151] leading-relaxed pr-2 font-normal">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
