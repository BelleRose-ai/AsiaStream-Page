import React from 'react';
import { Smartphone, Download } from 'lucide-react';

interface HeaderProps {
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDownload }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0D12]/85 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Logo Wordmark ("Asia" in white, "Stream" in Cyan #06B6D4) */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded-md"
            aria-label="AsiaStream Home"
          >
            <span className="text-white">Asia</span>
            <span className="text-[#06B6D4]">Stream</span>
          </a>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-white/40 border-l border-white/10 pl-3 uppercase tracking-wider">
            Directory & Guide
          </span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A0AEC0]">
          <a href="#shelves" className="hover:text-white transition-colors">
            Featured Shelves
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#legal" className="hover:text-white transition-colors">
            Legal & Sources
          </a>
        </nav>

        {/* Zone 3: Right-aligned Ghost button with cyan border */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/15 active:bg-[#06B6D4]/25 px-4 sm:px-5 py-2 rounded-[30px] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            aria-label="Get the AsiaStream App"
          >
            <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#06B6D4]" />
            <span>Get App</span>
          </button>
        </div>
      </div>
    </header>
  );
};
