import React, { useRef, useEffect, useState } from 'react';
import { TMDBMediaItem } from '../services/tmdb';
import { TMDBPosterCard } from './TMDBPosterCard';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';

interface CategoryShelfProps {
  title: string;
  categoryKey: string;
  badgeLabel: string;
  index: number;
  items: TMDBMediaItem[];
}

export const CategoryShelf: React.FC<CategoryShelfProps> = ({
  title,
  badgeLabel,
  index,
  items
}) => {
  const shelfRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Smooth scroll-triggered CSS fade-in animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (shelfRef.current) {
      observer.observe(shelfRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [items]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section
      ref={shelfRef}
      className={`shelf-fade-section mb-12 sm:mb-16 last:mb-0 transition-all duration-700 ${
        isVisible ? 'shelf-visible' : 'opacity-0 translate-y-8'
      }`}
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shelf Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 pb-2 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold tracking-wider text-[#06B6D4] uppercase">
                Shelf 0{index + 1}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[11px] font-medium text-[#A0AEC0] flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#8B5CF6]" />
                {items.length} TMDB Verified Titles
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>

          {/* Desktop Horizontal Shelf Scroll Controls */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label={`Scroll ${title} left`}
              className={`p-2 rounded-full border border-white/10 transition-colors ${
                canScrollLeft
                  ? 'bg-[#161922] text-white hover:border-[#06B6D4] hover:text-[#06B6D4] cursor-pointer'
                  : 'bg-[#161922]/40 text-white/20 cursor-not-allowed border-transparent'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label={`Scroll ${title} right`}
              className={`p-2 rounded-full border border-white/10 transition-colors ${
                canScrollRight
                  ? 'bg-[#161922] text-white hover:border-[#06B6D4] hover:text-[#06B6D4] cursor-pointer'
                  : 'bg-[#161922]/40 text-white/20 cursor-not-allowed border-transparent'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Shelf */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto py-3 px-1 shelf-scroll scroll-smooth focus:outline-none"
          tabIndex={0}
          role="region"
          aria-label={`Shelf of ${title}`}
        >
          {items.map((item) => (
            <TMDBPosterCard key={`${item.categoryKey}-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
