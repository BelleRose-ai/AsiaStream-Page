import React, { useState } from 'react';
import { TMDBMediaItem } from '../services/tmdb';
import { Star, ShieldCheck, Film } from 'lucide-react';

interface TMDBPosterCardProps {
  item: TMDBMediaItem;
}

export const TMDBPosterCard: React.FC<TMDBPosterCardProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  const getPosterUrl = (path: string | null) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const posterUrl = getPosterUrl(item.poster_path || item.backdrop_path);

  return (
    <div 
      className="non-clickable-card relative flex-shrink-0 w-[190px] sm:w-[210px] md:w-[230px] aspect-[2/3] rounded-[12px] overflow-hidden bg-[#161922] border border-white/5 select-none shadow-lg cursor-default"
      aria-label={`${item.title} - ${item.matchScore}`}
    >
      {/* TMDB Poster Image with fallback */}
      {!imgError && posterUrl ? (
        <img
          src={posterUrl}
          alt={item.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      ) : (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-[#1c142e] via-[#161922] to-[#0B0D12]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{item.categoryLabel}</span>
            <Film className="w-4 h-4 text-cyan-400 opacity-60" />
          </div>
          <div className="my-auto text-center px-1">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-cyan-300">{item.title.charAt(0)}</span>
            </div>
            <p className="text-sm font-bold text-white line-clamp-2">{item.title}</p>
            <p className="text-[11px] text-[#A0AEC0] mt-1">{item.release_year}</p>
          </div>
        </div>
      )}

      {/* Top Tag Badges (Solid purple #8B5CF6 or teal #10B981) */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
        <span 
          className={`text-[10px] sm:text-[11px] font-bold text-white px-2 py-0.5 rounded-[30px] shadow-sm uppercase tracking-wider ${
            item.categoryKey === 'anime' || item.categoryKey === 'filipino'
              ? 'bg-[#10B981]'
              : 'bg-[#8B5CF6]'
          }`}
        >
          {item.categoryLabel}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/95 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-[30px]">
          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          {item.vote_average.toFixed(1)}
        </span>
      </div>

      {/* Heavy Dark Gradient at Bottom Overlaying Title & Static 98% Match Badge */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/80 via-40% to-transparent pointer-events-none flex flex-col justify-end p-3.5 z-10">
        {/* Static "98% Match" badge as specified */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="inline-flex items-center text-[11px] font-bold text-[#06B6D4] bg-[#06B6D4]/15 px-2.5 py-0.5 rounded-[30px] border border-[#06B6D4]/30">
            {item.matchScore || "98% Match"}
          </span>
          <span className="text-[11px] text-[#A0AEC0] font-medium">
            {item.release_year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white text-sm sm:text-base font-bold leading-tight line-clamp-2 drop-shadow-sm">
          {item.title}
        </h3>

        {/* Quiet Genre or Subtext */}
        <p className="text-[#A0AEC0] text-[11px] mt-1 line-clamp-1 truncate font-normal">
          {item.genres.slice(0, 2).join(' · ')}
        </p>

        {/* Non-clickable directory badge */}
        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#10B981]" />
            Guide Verified
          </span>
          <span className="text-cyan-400/80 font-mono text-[9px] uppercase">TMDB #{item.id}</span>
        </div>
      </div>
    </div>
  );
};
