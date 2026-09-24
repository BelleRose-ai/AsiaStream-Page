import React from 'react';
import { Sliders, Sparkles, ExternalLink } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  return (
    <section 
      id="how-it-works"
      className="w-full bg-[#161922] border-y border-white/5 py-5 sm:py-6 shadow-inner"
      aria-label="How AsiaStream Works"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop and Tablet Single Clean Row Display */}
        <div className="hidden sm:flex items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-semibold text-white tracking-wide">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs font-bold flex items-center justify-center border border-[#8B5CF6]/30">
              1
            </span>
            <span>Pick Your Vibe</span>
          </div>

          <span className="text-[#06B6D4] text-lg font-black select-none">•</span>

          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#8B5CF6]/30 to-[#06B6D4]/30 text-white text-xs font-bold flex items-center justify-center border border-white/20">
              2
            </span>
            <span>Get Instant Match</span>
          </div>

          <span className="text-[#06B6D4] text-lg font-black select-none">•</span>

          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] text-xs font-bold flex items-center justify-center border border-[#06B6D4]/30">
              3
            </span>
            <span>Find Where to Watch</span>
          </div>
        </div>

        {/* Mobile Stack / Condensed Layout */}
        <div className="sm:hidden flex flex-col gap-2.5 text-center text-xs font-medium text-white/90">
          <p className="text-white text-sm font-semibold tracking-wide">
            1. Pick Your Vibe <span className="text-[#06B6D4] font-bold mx-1">•</span> 2. Get Instant Match <span className="text-[#06B6D4] font-bold mx-1">•</span> 3. Find Where to Watch
          </p>
          <p className="text-[11px] text-[#A0AEC0]">
            Safe Asian entertainment discovery directory · Zero file hosting
          </p>
        </div>
      </div>
    </section>
  );
};
