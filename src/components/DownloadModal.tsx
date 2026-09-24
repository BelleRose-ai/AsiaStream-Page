import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone, CheckCircle2, ShieldCheck, QrCode, Copy, Check, ExternalLink } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APK_URL = "https://www.mediafire.com/file/hs2t89oh215su01/AsiaStream.apk/file";

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    window.open(APK_URL, '_blank', 'noopener,noreferrer');
    setDownloadComplete(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(APK_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-[#161922] border border-white/10 rounded-[16px] shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#A0AEC0] hover:text-white hover:bg-white/5 rounded-full transition-colors"
          aria-label="Close download dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 id="download-modal-title" className="text-xl font-bold text-white tracking-tight">
                Get AsiaStream for Android
              </h3>
            </div>
            <p className="text-xs text-[#A0AEC0]">
              Version 2.4.2 · Verified Clean APK · MediaFire Hosting
            </p>
          </div>
        </div>

        {/* Informative explanation */}
        <div className="p-3.5 rounded-[12px] bg-[#0B0D12] border border-white/5 text-xs text-[#A0AEC0] mb-6 leading-relaxed">
          <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Official MediaFire APK Release</span>
          </div>
          Download the official AsiaStream Android application package directly from MediaFire.
        </div>

        {/* Download Action Area */}
        <div className="space-y-4">
          <button
            onClick={handleStartDownload}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-[30px] font-bold text-white shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)'
            }}
          >
            <Download className="w-5 h-5" />
            <span>Download APK from MediaFire</span>
            <ExternalLink className="w-4 h-4 opacity-70 ml-1" />
          </button>

          {downloadComplete && (
            <div className="p-3 rounded-[12px] bg-[#10B981]/15 border border-[#10B981]/30 text-center text-xs text-white">
              <CheckCircle2 className="w-5 h-5 text-[#10B981] mx-auto mb-1" />
              <span>MediaFire download page opened in a new tab!</span>
            </div>
          )}

          {/* QR Code / Share to Phone section */}
          <div className="p-4 rounded-[12px] bg-[#0B0D12]/70 border border-white/5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Direct MediaFire Link</p>
                <p className="text-[11px] text-[#A0AEC0] truncate max-w-[200px]">{APK_URL}</p>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-[30px] bg-white/5 hover:bg-white/10 text-xs font-medium text-white flex items-center gap-1.5 border border-white/10 transition-colors shrink-0 cursor-pointer"
              aria-label="Copy download link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A0AEC0]" />
                  <span>Copy APK Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Feature List */}
        <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-2.5 text-xs text-[#A0AEC0]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            100% Free & Legal
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            No Account Needed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            5 Asian Drama Regions
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            Official Platform Links
          </span>
        </div>
      </div>
    </div>
  );
};
