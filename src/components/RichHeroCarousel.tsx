import React, { useState, useEffect, useRef } from 'react';
import { TMDBMediaItem } from '../services/tmdb';
import { Star, Calendar, Download, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface RichHeroCarouselProps {
  items: TMDBMediaItem[];
  onOpenDownload: () => void;
}

export const RichHeroCarousel: React.FC<RichHeroCarouselProps> = ({ items, onOpenDownload }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = items.length;

  // Auto-sliding carousel (crossfades every 4-5 seconds: 4500ms)
  useEffect(() => {
    if (isPaused || totalItems === 0) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalItems]);

  if (totalItems === 0) {
    return (
      <div className="w-full h-[460px] sm:h-[500px] bg-[#0B0D12] flex items-center justify-center">
        <div className="flex items-center gap-3 text-cyan-400">
          <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-medium">Loading TMDB recommendations...</span>
        </div>
      </div>
    );
  }

  const activeItem = items[currentIndex] || items[0];

  const getBackdropUrl = (path: string | null) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `https://image.tmdb.org/t/p/w1280${path}`;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0B0D12] h-[460px] sm:h-[500px] lg:h-[540px] flex items-end select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AsiaStream Curated Spotlight Carousel"
    >
      {/* 1. Crossfading TMDB Backdrop Images with Bottom 60% Gradient Overlay */}
      {items.map((item, idx) => {
        const isCurrent = idx === currentIndex;
        const backdropUrl = getBackdropUrl(item.backdrop_path || item.poster_path);

        return (
          <div
            key={`${item.id}-${idx}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
              isCurrent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {backdropUrl ? (
              <img
                src={backdropUrl}
                alt={item.title}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1b152b] via-[#0E1119] to-[#0B0D12]" />
            )}

            {/* Gradient Overlay ONLY to the bottom 60% of the image */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, #0B0D12 15%, rgba(11,13,18,0.7) 60%, transparent 100%)'
              }}
            />
          </div>
        );
      })}

      {/* Decorative Subtle Atmosphere */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-10" />

      {/* Carousel Navigation Chevrons */}
      <button
        onClick={handlePrev}
        aria-label="Previous series"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white/70 hover:text-white border border-white/10 backdrop-blur-md transition-all active:scale-95"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next series"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white/70 hover:text-white border border-white/10 backdrop-blur-md transition-all active:scale-95"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide Content Container Anchored to the BOTTOM */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-12 flex flex-col items-start text-left">
        
        {/* Top Badges: Tiny compact inline-flex pills (font-size: 11px, padding: 3px 8px) */}
        <div className="flex flex-wrap items-center gap-2 mb-2.5 animate-fadeIn">
          {/* Category Badge */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[30px] text-[11px] font-bold uppercase tracking-wider text-white bg-[#8B5CF6]">
            <Sparkles className="w-2.5 h-2.5 text-white" />
            {activeItem.categoryLabel}
          </span>

          {/* Rating (vote_average) Badge */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[30px] text-[11px] font-bold text-white bg-[#10B981]">
            <Star className="w-2.5 h-2.5 fill-white text-white" />
            <span>★ {activeItem.vote_average.toFixed(1)}</span>
          </span>

          {/* Release Year Badge */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[30px] text-[11px] font-semibold text-white/90 bg-white/10 backdrop-blur-md border border-white/10">
            <Calendar className="w-2.5 h-2.5 text-cyan-300" />
            <span>{activeItem.release_year}</span>
          </span>

          {/* Match Pill */}
          <span className="inline-flex items-center text-[11px] font-bold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/40 px-2 py-0.5 rounded-[30px]">
            {activeItem.matchScore}
          </span>
        </div>

        {/* Title: Reduced font-size to 1.3rem - 1.5rem (bold, crisp) */}
        <h1 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-white tracking-tight leading-snug drop-shadow-md">
          {activeItem.title}
        </h1>

        {/* Row of Genre Pills: small (font-size: 11px) */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {activeItem.genres.slice(0, 3).map((genre, gIdx) => (
            <span
              key={`${genre}-${gIdx}`}
              className="px-2 py-0.5 rounded-[30px] bg-[#161922]/90 border border-white/10 text-[11px] font-medium text-[#A0AEC0]"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Synopsis/Description: Exactly 2 lines maximum using line-clamp-2, font-size: 12px, light gray color */}
        <p className="mt-2 text-[12px] text-[#A0AEC0] max-w-2xl leading-relaxed line-clamp-2">
          {activeItem.overview}
        </p>

        {/* Compact CTA Button: Reading EXACTLY "Get AsiaStream (Android)" with linear-gradient(90deg, #8B5CF6, #06B6D4) */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-[30px] font-bold text-xs sm:text-sm text-white shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)'
            }}
            aria-label="Get AsiaStream (Android)"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Get AsiaStream (Android)</span>
          </button>
        </div>

      </div>

      {/* Navigation Dots at the Very Bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
        {items.map((it, dotIdx) => {
          const isDotActive = dotIdx === currentIndex;
          return (
            <button
              key={`dot-${it.id}-${dotIdx}`}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Slide ${dotIdx + 1}: ${it.title}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                isDotActive
                  ? 'w-6 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]'
                  : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
