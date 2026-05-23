import React from 'react';
import { Star, GraduationCap, TrendingUp, Award } from 'lucide-react';
import { MilestoneItem } from '../types';

export default function About() {
  const milestones: MilestoneItem[] = [
    {
      year: '2016 · START',
      title: 'Freelance Design Genesis',
      description: 'Began freelance web design career, engineering responsive and engaging digital experiences for worldwide businesses.',
      iconType: 'college'
    },
    {
      year: '2018 · GROWTH',
      title: 'SEO & Performance Expansion',
      description: 'Strengthened capabilities by incorporating comprehensive search-ranking mechanisms and advanced direct promotion campaigns.',
      iconType: 'growth'
    },
    {
      year: '2020 · MILESTONE',
      title: 'Full-Scale Service Launch in Attock',
      description: 'Established full-scale, conversion-driven digital agency based out of Sheen Bagh, Attock directly backing regional merchants.',
      iconType: 'milestone'
    },
    {
      year: '2024 · TODAY',
      title: '5.0 Google Reviewed Authority',
      description: 'Cemented status as top resource for localized enterprises, boasting 8+ years experience and 24/7 client operations.',
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
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Biography Column (Left) */}
        <div className="space-y-8">
          <span className="text-sm font-semibold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full">
            The Strategist
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white-text leading-tight">
            8+ Years of <span className="text-brand-orange">Refining</span> The Digital Craft in Attock
          </h2>
          <div className="space-y-4 text-sm text-muted-text leading-relaxed">
            <p>
              I am Asim Saleem, a custom website architect and experienced marketer based in Sheen Bagh, Attock. For nearly a decade, I have worked hand-in-hand with regional business owners and global organizations to build elegant, high-impact brands.
            </p>
            <p>
              My philosophy rejects templates and cookie-cutter systems. True digital success is rooted in high-speed, secure web infrastructure coupled with tailored SEO schemes and highly optimized Google Ads. Let's modernize your operations and drive higher value today.
            </p>
          </div>

          {/* Skill tags wrapper */}
          <div className="space-y-4 pt-4">
            <h3 className="text-white-text font-bold text-lg font-serif">Core Specializations & Platforms:</h3>
            <div className="flex flex-wrap gap-2.5">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-2 bg-brand-teal/10 text-xs font-bold text-brand-teal rounded-lg transition-all border border-brand-teal/15 hover:border-brand-teal/40 hover:bg-brand-teal/15 select-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Column (Right) */}
        <div className="bg-card-bg p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
          <h3 className="font-serif text-2xl font-bold text-white-text mb-8 pb-4 border-b border-white/5 uppercase tracking-wide">
            Milestone Journey
          </h3>
          
          <div className="relative pl-8 space-y-12">
            {/* Elegant vertical progress divider (orange to teal gradient) */}
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-orange to-brand-teal opacity-65" />

            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Fixed dot item in Orange */}
                <div className="absolute -left-8 top-1.5 h-7 w-7 rounded-full bg-brand-orange border-4 border-card-bg flex items-center justify-center text-white-text shadow-md shadow-brand-orange/20 transition-transform group-hover:scale-110 select-none z-10">
                  {getTimelineIcon(milestone.iconType)}
                </div>

                <div className="space-y-1.5">
                  <span className={`text-xs font-bold uppercase tracking-wider ${idx % 2 === 0 ? 'text-brand-orange' : 'text-brand-teal'}`}>
                    {milestone.year}
                  </span>
                  <h4 className="text-white-text font-bold text-lg font-serif">{milestone.title}</h4>
                  <p className="text-sm text-muted-text leading-relaxed pr-2">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
