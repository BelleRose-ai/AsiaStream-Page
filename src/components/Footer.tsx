import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="legal" className="bg-[#0B0D12] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Descriptor */}
          <div>
            <div className="flex items-center gap-1.5 text-xl font-bold tracking-tight">
              <span className="text-white">Asia</span>
              <span className="text-[#06B6D4]">Stream</span>
            </div>
            <p className="text-xs text-[#A0AEC0] mt-1 max-w-md">
              Curated taste-based directory and legal stream index for Asian drama and anime lovers worldwide.
            </p>
          </div>

          {/* Quick Informational Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#A0AEC0]">
            <a href="#shelves" className="hover:text-white transition-colors">
              Browse Categories
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Algorithm & Matching
            </a>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1 text-[#10B981]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Legal Directory
            </span>
          </div>
        </div>

        {/* Legal Text Strictly Matching Specification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A0AEC0] text-center sm:text-left leading-relaxed max-w-3xl">
            AsiaStream is an independent entertainment directory and recommendation guide. We do not host, store, or transmit media files. Metadata and artwork provided by TMDB.
          </p>
          <p className="text-xs text-white/30 shrink-0 font-mono">
            © {new Date().getFullYear()} AsiaStream
          </p>
        </div>
      </div>
    </footer>
  );
};
