import React, { useState } from 'react';
import { DramaItem } from '../data/shelves';
import { ShieldCheck, Compass } from 'lucide-react';

interface PosterCardProps {
  item: DramaItem;
}

export const PosterCard: React.FC<PosterCardProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="non-clickable-card group relative flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] aspect-[2/3] rounded-[12px] overflow-hidden bg-[#161922] border border-white/5 select-none shadow-md"
      aria-label={`${item.title} - ${item.match} match`}
    >
      {/* Background Poster Image or Stylized Fallback */}
      {!imgError ? (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center transform-gpu transition-transform duration-500 will-change-transform"
        />
      ) : (
        /* Fallback container adhering to Zero-Broken-Image Policy */
        <div className={`w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b ${item.gradientTheme}`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium tracking-wide text-white/70 uppercase">Guide Verified</span>
            <Compass className="w-4 h-4 text-cyan-400 opacity-60" />
          </div>
          <div className="my-auto py-2 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-cyan-300">{item.title.charAt(0)}</span>
            </div>
            <p className="text-sm font-semibold text-white/90 line-clamp-2 px-1">{item.title}</p>
            <p className="text-[11px] text-[#A0AEC0] mt-1">{item.year} · {item.genres.split('·')[0]}</p>
          </div>
        </div>
      )}

      {/* Top Badges: Solid Purple (#8B5CF6) or Teal (#10B981) */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
        <span 
          className={`text-[10px] sm:text-[11px] font-bold text-white px-2 py-0.5 rounded-[30px] shadow-sm uppercase tracking-wider ${
            item.badgeColor === 'teal' 
              ? 'bg-[#10B981]' 
              : 'bg-[#8B5CF6]'
          }`}
        >
          {item.badge}
        </span>
        <span className="text-[10px] font-semibold text-white/80 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-[30px]">
          {item.year}
        </span>
      </div>

      {/* Heavy Dark Gradient at Bottom Overlaying Title & Match Score */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/75 via-45% to-transparent pointer-events-none flex flex-col justify-end p-3.5 z-10">
        {/* Match Score Badge */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="inline-flex items-center text-[11px] font-bold text-[#06B6D4] bg-[#06B6D4]/15 px-2 py-0.5 rounded-[30px] border border-[#06B6D4]/30">
            {item.match} Match
          </span>
          <span className="text-[10px] text-[#A0AEC0] truncate">
            {item.whereToWatch[0]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white text-sm sm:text-base font-bold leading-tight line-clamp-2 drop-shadow-sm">
          {item.title}
        </h3>

        {/* Quiet Subtitle Genres */}
        <p className="text-[#A0AEC0] text-[11px] mt-1 line-clamp-1 truncate font-normal">
          {item.genres}
        </p>

        {/* Guide Notice Pill */}
        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#10B981]" />
            Guide Entry
          </span>
          <span className="text-[#A0AEC0]">{item.whereToWatch.length} legal sources</span>
        </div>
      </div>
    </div>
  );
};
