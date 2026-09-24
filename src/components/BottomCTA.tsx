import React from 'react';
import { Download, Smartphone, Star, ShieldCheck, Sparkles, BellRing } from 'lucide-react';

interface BottomCTAProps {
  onOpenDownload: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenDownload }) => {
  return (
    <section className="relative overflow-hidden bg-[#161922] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 my-12">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#8B5CF6]/15 via-[#06B6D4]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[30px] bg-[#0B0D12] border border-white/10 text-xs text-[#06B6D4] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Smart Recommendation Engine</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl text-balance">
          Never spend 40 minutes looking for something to watch again.
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-base sm:text-lg text-[#A0AEC0] max-w-2xl text-balance">
          Get tailored recommendations, reviews, and drama alerts on your phone.
        </p>

        {/* Highlighted Feature Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left">
          <div className="p-4 rounded-[12px] bg-[#0B0D12]/60 border border-white/5">
            <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <h3>Taste Match Score</h3>
            </div>
            <p className="text-xs text-[#A0AEC0]">
              Custom algorithms match your favorite tropes, pacing, and emotional tone.
            </p>
          </div>

          <div className="p-4 rounded-[12px] bg-[#0B0D12]/60 border border-white/5">
            <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <h3>Legal Stream Finder</h3>
            </div>
            <p className="text-xs text-[#A0AEC0]">
              Direct deep-links to Netflix, Viki, Crunchyroll, iQIYI, and Disney+.
            </p>
          </div>

          <div className="p-4 rounded-[12px] bg-[#0B0D12]/60 border border-white/5">
            <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
              <BellRing className="w-4 h-4 text-[#06B6D4]" />
              <h3>Episode Alerts</h3>
            </div>
            <p className="text-xs text-[#A0AEC0]">
              Get notified the second new subtitled episodes drop in your region.
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-10">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-[30px] font-bold text-base sm:text-lg text-white shadow-xl shadow-purple-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all transform-gpu"
            style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)'
            }}
            aria-label="Download AsiaStream Recommendation App (Free)"
          >
            <Download className="w-5 h-5" />
            <span>Download AsiaStream Recommendation App (Free)</span>
          </button>
        </div>

        {/* Small metadata notice */}
        <p className="mt-4 text-xs text-[#A0AEC0]/80">
          Android 8.0+ · Version 2.4.2 · 28 MB · Zero Ads
        </p>
      </div>
    </section>
  );
};
