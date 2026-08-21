import React from 'react';
import { UPCOMING_FEATURES } from '../data';

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-24 sm:py-32 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-200"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#F0F2F5] dark:bg-[#141719] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111315] dark:text-[#F1F0EA]">
            More Features Coming Soon
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5E6670] dark:text-[#85898B] leading-relaxed">
            Expanding the FrameGrab engine across social platforms, web protocols, and high-fidelity video media formats.
          </p>
        </div>

        {/* Universal Web Core Feature Banner (Highlight Card) */}
        <div className="mt-12 bg-gradient-to-br from-[#FFFFFF] to-[#F7F8FA] dark:from-[#181B1D] dark:to-[#141719] border border-[#E2E5E9] dark:border-[#303437] hover:border-[#7BB300] dark:hover:border-[#C9FF2E]/60 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden transition-all group">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9FF2E]/15 dark:bg-[#C9FF2E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C9FF2E]/20 dark:bg-[#C9FF2E]/15 text-[#375400] dark:text-[#C9FF2E] border border-[#C9FF2E]/40 dark:border-[#C9FF2E]/30 text-xs font-mono font-semibold">
                  Universal Engine &middot; Any Web Player
                </span>
                <span className="text-xs text-[#5E6670] dark:text-[#85898B] font-mono">Alpha Testing</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111315] dark:text-[#F1F0EA] tracking-tight">
                Download Any Video from Any Website
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#5E6670] dark:text-[#85898B] leading-relaxed max-w-3xl">
                Tired of site-specific restrictions? FrameGrab automatically hooks into the underlying HTML5 media elements, WebSocket streams, and HLS manifest chunks (`.m3u8`, `.ts`, `.mpd`) to reconstruct pristine videos from virtually any public webpage.
              </p>

              {/* Supported format tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Direct MP4', 'HLS m3u8 Playlists', 'Blob URLs', 'DASH MPD', 'WebM Streams', 'Embedded Players'].map((fmt, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 bg-[#FFFFFF] dark:bg-[#0D0F10] border border-[#E2E5E9] dark:border-[#303437] text-[#111315] dark:text-[#F1F0EA] rounded-lg shadow-sm dark:shadow-none"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_FEATURES
            .filter((f) => f.id !== 'feat-any-site')
            .map((feature) => (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="bg-[#FFFFFF] dark:bg-[#141719] border border-[#E2E5E9] dark:border-[#303437] hover:border-[#CDD1D6] dark:hover:border-[#85898B] rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-sm dark:shadow-none"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#111315] dark:text-[#F1F0EA] group-hover:text-[#0D0F10] dark:group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#5E6670] dark:text-[#85898B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

