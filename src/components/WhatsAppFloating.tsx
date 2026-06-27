import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip text label */}
      <div 
        className={`bg-slate-900/95 text-white-text text-xs font-semibold px-3.5 py-2 rounded-xl border border-white/10 shadow-xl transition-all duration-300 whitespace-nowrap select-none ${
          isHovered 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        Chat on WhatsApp
      </div>

      {/* Floating Circle Button */}
      <a
        href="https://wa.me/923455161393"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center p-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white-text rounded-full transition-all duration-300 shadow-lg shadow-green-600/20 hover:scale-110 active:scale-95 group-hover:rotate-[10deg] cursor-pointer"
        aria-label="Chat with WebMatrix Solutions on WhatsApp"
      >
        {/* Pulsing ring animation behind the icon button */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping opacity-75 group-hover:scale-110" />
        
        {/* Chat icon */}
        <MessageCircle className="w-6 h-6 stroke-[2.2] relative z-10 fill-current" />
      </a>
    </div>
  );
}
