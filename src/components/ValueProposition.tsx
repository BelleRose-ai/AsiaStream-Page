import React from 'react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section 
      className="w-full bg-[#11141E] border-y border-white/5 py-14 sm:py-18 px-4 sm:px-6 lg:px-8 shadow-inner"
      aria-label="AsiaStream Value Proposition"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle accent badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[30px] bg-[#161922] border border-white/10 text-xs font-semibold text-[#06B6D4] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Curated Discovery & Recommendation Guide</span>
        </div>

        {/* Centered large copy strictly matching specification */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-relaxed text-balance">
          Tired of searching for your next series but don't know what's worth watching?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#a855f7] to-[#06B6D4]">
            AsiaStream analyzes your tastes
          </span>{' '}
          to recommend top-tier Asian dramas and anime—and shows you exactly where to find them.
        </h2>

        {/* 3-step value pill strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-[#A0AEC0]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-[11px] font-bold flex items-center justify-center">1</span>
            <span className="text-white">Pick Your Vibe</span>
          </div>
          <span className="text-[#06B6D4] font-bold">•</span>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#8B5CF6]/30 to-[#06B6D4]/30 text-white text-[11px] font-bold flex items-center justify-center">2</span>
            <span className="text-white">Get Instant Match</span>
          </div>
          <span className="text-[#06B6D4] font-bold">•</span>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] text-[11px] font-bold flex items-center justify-center">3</span>
            <span className="text-white">Find Where to Watch</span>
          </div>
        </div>
      </div>
    </section>
  );
};
