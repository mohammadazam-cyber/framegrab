import React from 'react';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onSimulateDownload: (title: string, format: string, size: string) => void;
  onOpenWaitlist: (platform: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="intro"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Subtle background glow spots */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C9FF2E]/10 dark:bg-[#C9FF2E]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-[#F0F2F5] dark:bg-[#181B1D] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111315] dark:text-[#F1F0EA] max-w-4xl leading-[1.1] sm:leading-[1.08]">
            Download any video.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#97D700] via-[#A8E600] to-[#111315] dark:from-[#C9FF2E] dark:via-[#D4FF35] dark:to-[#F1F0EA]">
              Zero quality loss.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5E6670] dark:text-[#85898B] max-w-2xl font-normal leading-relaxed">
            <strong className="text-[#111315] dark:text-[#F1F0EA] font-semibold">FrameGrab</strong> extracts high-definition video streams directly from the YouTube with pure bitstream passthrough. No bloat, no watermarks, and no background subscriptions.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#downloads"
              id="hero-primary-download-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C9FF2E] hover:bg-[#D4FF35] text-[#0D0F10] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#C9FF2E]/20 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Download for macOS</span>
              <span className="text-[11px] font-mono font-medium px-1.5 py-0.5 bg-[#0D0F10]/15 rounded">
                M-Series &amp; Intel
              </span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] dark:bg-[#141719] hover:bg-[#F0F2F5] dark:hover:bg-[#181B1D] text-[#111315] dark:text-[#F1F0EA] hover:text-[#0D0F10] dark:hover:text-[#C9FF2E] border border-[#E2E5E9] dark:border-[#303437] hover:border-[#CDD1D6] dark:hover:border-[#85898B] font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-sm dark:shadow-none"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges / key pill metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#5E6670] dark:text-[#85898B] font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB300] dark:text-[#C9FF2E]" />
              <span>4K / 8K HDR Passthrough</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB300] dark:text-[#C9FF2E]" />
              <span>No Cloud Proxies / 100% Local</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7BB300] dark:text-[#C9FF2E]" />
              <span>Instant Demuxing</span>
            </div>
          </div>

          <div className="mt-7 flex items-baseline justify-center gap-2 text-[#5E6670] dark:text-[#85898B]">
            <span className="text-xs font-mono uppercase tracking-[0.18em]">Build by</span>
            <span
              className="text-2xl sm:text-3xl text-[#111315] dark:text-[#F1F0EA] -rotate-2"
              style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
            >
              Azam Khan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
