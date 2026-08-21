import React from 'react';
import { Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#FFFFFF] dark:bg-[#0D0F10] border-t border-[#E2E5E9] dark:border-[#303437] pt-12 pb-10 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C9FF2E]/10 dark:bg-[#C9FF2E]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E2E5E9] dark:border-[#303437]/70">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <span className="text-lg font-bold text-[#111315] dark:text-[#F1F0EA] flex items-center gap-1.5">
              FrameGrab
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9FF2E]" />
            </span>
            <p className="text-xs text-[#5E6670] dark:text-[#85898B] max-w-md">
              Minimalist, high-performance video downloader engine engineered for lossless media capture.
            </p>
          </div>
        </div>

        {/* Prominent Signature Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[#5E6670] dark:text-[#85898B]">
            &copy; {new Date().getFullYear()} FrameGrab &middot; All rights reserved.
          </div>

          {/* REQUIRED PROMINENT SIGNATURE: Built by Azam Khan */}
          <div
            id="author-signature"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F7F8FA] dark:bg-[#141719] border border-[#E2E5E9] dark:border-[#303437] shadow-sm hover:border-[#7BB300] dark:hover:border-[#C9FF2E]/60 transition-all group"
          >
            <Code className="w-3.5 h-3.5 text-[#4A7000] dark:text-[#C9FF2E] group-hover:rotate-12 transition-transform" />
            <span className="text-[#5E6670] dark:text-[#85898B]">Built by</span>
            <span className="font-semibold text-[#111315] dark:text-[#F1F0EA] group-hover:text-[#0D0F10] dark:group-hover:text-[#C9FF2E] transition-colors tracking-wide">
              Azam Khan
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9FF2E]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

