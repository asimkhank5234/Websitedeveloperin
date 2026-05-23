import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function WebMatrixLogo({ className = '', showText = true, size = 'md' }: LogoProps) {
  // Sizing mappings
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.1em]',
    md: 'text-[11px] tracking-[0.16em]',
    lg: 'text-[13px] tracking-[0.2em]',
    xl: 'text-[16px] tracking-[0.22em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Styled SVG Logo Icon */}
      <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(47,186,179,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Orbit Ring - Green gradient */}
          <path
            d="M245 423C151.7 423 75.3 348.6 72.2 255.8C69.1 161.7 141.4 82 235.5 77.2C318.5 73 392.2 127 413.4 205.8"
            stroke="url(#greenGradient)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          
          {/* Orbital path terminal dot */}
          <circle cx="413" cy="206" r="11" fill="#2fbab3" />

          {/* Browser Window mockup (code background) */}
          <rect
            x="180"
            y="130"
            width="170"
            height="130"
            rx="12"
            fill="#0b1329"
            stroke="#1d2d50"
            strokeWidth="5"
          />
          {/* Browser circles/dots */}
          <circle cx="205" cy="150" r="5" fill="#f98300" />
          <circle cx="220" cy="150" r="5" fill="#2fbab3" />
          <circle cx="235" cy="150" r="5" fill="#4ade80" />

          {/* Code tags </> inside browser preview */}
          <path
            d="M211 189L197 198L211 207M233 189L247 198L233 207M224 184L218 212"
            stroke="#2fbab3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Code lines */}
          <line x1="262" y1="192" x2="312" y2="192" stroke="#f98300" strokeWidth="5" strokeLinecap="round" />
          <line x1="262" y1="204" x2="297" y2="204" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <line x1="262" y1="216" x2="282" y2="216" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" />

          {/* Glowing pixel fragments floating out on top-right */}
          <rect x="362" y="105" width="20" height="20" rx="3" fill="#f98300" />
          <rect x="390" y="105" width="24" height="24" rx="4" fill="#4ade80" />
          <rect x="362" y="133" width="24" height="24" rx="4" fill="#4ade80" />
          <rect x="420" y="133" width="16" height="16" rx="3" fill="#4ade80" />

          {/* Big Stylized Forest Green/Teal 'W' centered in foreground */}
          <g filter="url(#dropShadow)">
            <path
              d="M125 190H170L210 325L245 200H280L315 325L355 190H400L350 375H305L265 245L225 375H180L125 190Z"
              fill="url(#gradientW)"
            />
          </g>

          {/* Growth arrow orange swoosh checkmark on right of the W */}
          <path
            d="M298 325L315 270L360 170L440 90M390 195L440 90L405 80"
            stroke="#f98300"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Definitions for Gradients */}
          <defs>
            <linearGradient id="greenGradient" x1="72" y1="250" x2="413" y2="250" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e8a84" />
              <stop offset="100%" stopColor="#2fbab3" />
            </linearGradient>
            <linearGradient id="gradientW" x1="125" y1="282.5" x2="400" y2="282.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0f5132" />
              <stop offset="50%" stopColor="#1b8a5a" />
              <stop offset="100%" stopColor="#2fbab3" />
            </linearGradient>
            <filter id="dropShadow" x="110" y="180" width="310" height="215" filterUnits="userSpaceOnUse">
              <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Typography: WebMatrix SOLUTIONS */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-sans font-bold flex items-center leading-tight">
            <span className={`text-white-text font-extrabold ${textSizes[size]}`}>Web</span>
            <span className={`text-[#2fbab3] font-extrabold ${textSizes[size]}`}>Matrix</span>
          </span>
          <span className="flex items-center gap-1.5 mt-0.5 select-none">
            <span className="h-[1px] w-4 bg-brand-orange/40 hidden sm:inline-block" />
            <span className={`font-mono font-bold text-brand-orange uppercase ${subtitleSizes[size]}`}>
              Solutions
            </span>
            <span className="h-[1px] w-4 bg-brand-orange/40 hidden sm:inline-block" />
          </span>
        </div>
      )}
    </div>
  );
}
