import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { RichHeroCarousel } from './components/RichHeroCarousel';
import { ValueProposition } from './components/ValueProposition';
import { CategoryShelf } from './components/CategoryShelf';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import {
  TMDB_CONFIG,
  CATEGORY_DEFINITIONS,
  TMDBMediaItem,
  fetchAllCategoriesAndBuildHero
} from './services/tmdb';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [apiKey] = useState<string>(() => {
    return localStorage.getItem('as_tmdb_api_key') || TMDB_CONFIG.apiKey || '';
  });
  const [categoriesData, setCategoriesData] = useState<Record<string, TMDBMediaItem[]>>({
    kdrama: [],
    anime: [],
    jdrama: [],
    filipino: [],
    cdrama: []
  });
  const [heroItems, setHeroItems] = useState<TMDBMediaItem[]>([]);

  // Async data fetching logic matching CRITICAL REQUIREMENT:
  // Fetches detailed data for all category arrays, extracts exactly the first 2 items
  // from each fetched category array, merges them into a 10-item array, and populates the hero slider.
  const loadTMDBData = useCallback(async (keyToUse: string) => {
    try {
      const { categoriesRecord, heroItems: mergedHero } = await fetchAllCategoriesAndBuildHero(keyToUse);
      setCategoriesData(categoriesRecord);
      setHeroItems(mergedHero);
    } catch (err) {
      console.error('Failed to load TMDB data:', err);
    }
  }, []);

  useEffect(() => {
    loadTMDBData(apiKey);
  }, [loadTMDBData, apiKey]);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-white flex flex-col selection:bg-[#8B5CF6]/30 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header with Logo & Ghost Button */}
      <Header onOpenDownload={handleOpenDownload} />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. RICH HERO CAROUSEL (Top Section)
            Auto-sliding crossfade with TMDB backdrop_path, overlays, exact CTA text, and 10 merged items */}
        <RichHeroCarousel
          items={heroItems}
          onOpenDownload={handleOpenDownload}
        />

        {/* 2. VALUE PROPOSITION SECTION (Below Hero)
            Padded, dark navy section with centered, large bold copy */}
        <ValueProposition />

        {/* 3. CATEGORY SHELVES (Below Text)
            5 horizontal scrolling shelves with TMDB poster_path, Title, static 98% Match badge, strictly non-clickable */}
        <section id="shelves" className="py-12 sm:py-16 space-y-2">
          {CATEGORY_DEFINITIONS.map((catDef, index) => {
            const items = categoriesData[catDef.key] || [];
            return (
              <CategoryShelf
                key={catDef.key}
                title={catDef.title}
                categoryKey={catDef.key}
                badgeLabel={catDef.badgeLabel}
                index={index}
                items={items}
              />
            );
          })}
        </section>

        {/* Bottom CTA Section */}
        <BottomCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Footer with exact legal attribution copy */}
      <Footer />

      {/* Download Action Modal for Android APK */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={handleCloseDownload}
      />
    </div>
  );
}
