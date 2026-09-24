import React, { useState, useEffect, useRef } from 'react';
import { heroCarouselData } from '../data/shelves';
import { Download, Sparkles, CheckCircle2, Play, ChevronRight, Pause } from 'lucide-react';

interface HeroCarouselProps {
  onOpenDownload: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenDownload }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-sliding carousel interval
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarouselData.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const activeShow = heroCarouselData[currentSlide];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0B0D12] min-h-[580px] lg:min-h-[660px] flex items-center justify-center pt-8 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AsiaStream Hero Recommendation Spotlight"
    >
      {/* Background Slides with Heavy Dark Gradient Overlay */}
      {heroCarouselData.map((item, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Atmospheric color gradient backdrop */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.backdropColor}`} />

            {/* Glowing radial accent light */}
            <div 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
              style={{ background: item.accentGlow }}
            />

            {/* Subtle cinematic pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
        );
      })}

      {/* Heavy Dark Gradient Overlay to bottom ensuring 100% text contrast & readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D12]/60 via-[#0B0D12]/80 to-[#0B0D12] pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Curated Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[30px] bg-[#161922] border border-white/10 text-xs text-[#A0AEC0] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-white font-medium">Safe Discovery Guide</span>
          <span className="text-white/20">·</span>
          <span className="text-[#06B6D4] font-semibold">100% Free · No Media Streaming</span>
        </div>

        {/* BOLD COPY strictly matching user specification */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl text-balance">
          Tired of searching for your next series but don't know what's worth watching?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#a855f7] to-[#06B6D4]">
            AsiaStream analyzes your tastes
          </span>{' '}
          to recommend top-tier Asian dramas and anime—and shows you exactly where to find them.
        </h1>

        {/* Dynamic Spotlight Banner for the active carousel item */}
        <div className="mt-7 p-3.5 sm:p-4 rounded-[12px] bg-[#161922]/90 border border-white/10 backdrop-blur-md max-w-xl w-full text-left flex items-center justify-between gap-3 shadow-xl">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B5CF6] bg-[#8B5CF6]/15 px-2 py-0.5 rounded-[30px]">
                {activeShow.category}
              </span>
              <span className="text-xs font-bold text-[#10B981]">
                {activeShow.match}
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white truncate">
              {activeShow.title}
            </div>
            <div className="text-[11px] text-[#A0AEC0] truncate">
              {activeShow.whereToFind}
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-[10px] text-white/50 block font-mono">CURATED</span>
            <span className="text-xs font-semibold text-[#06B6D4]">{activeShow.country}</span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[30px] font-bold text-base text-white shadow-xl shadow-purple-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu"
            style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)'
            }}
            aria-label="Get AsiaStream Guide (Android)"
          >
            <Download className="w-5 h-5 text-white" />
            <span>Get AsiaStream Guide (Android)</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#A0AEC0]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            Free Android APK & Direct Install
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            Verified Streaming Provider Links
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            No Ads · No Registration Required
          </span>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="mt-8 flex items-center gap-2">
          {heroCarouselData.map((item, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Jump to spotlight ${item.title}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  isActive
                    ? 'w-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
