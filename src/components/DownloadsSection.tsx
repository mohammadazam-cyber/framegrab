import React from 'react';
import { DOWNLOAD_PLATFORMS } from '../data';
import { DownloadPlatform } from '../types';
import { Download, Check } from 'lucide-react';

interface DownloadsSectionProps {
  onSimulateDownload: (title: string, format: string, size: string) => void;
  onOpenWaitlist: (platform: string) => void;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({
  onSimulateDownload,
  onOpenWaitlist,
}) => {
  const handleDownloadClick = (platform: DownloadPlatform) => {
    if (platform.status === 'available') {
      if (platform.downloadUrl?.startsWith('/')) {
        const link = document.createElement('a');
        link.href = platform.downloadUrl;
        link.download = platform.downloadUrl.split('/').pop() || 'FrameGrab.dmg';
        document.body.appendChild(link);
        link.click();
        link.remove();
        return;
      }

      onSimulateDownload(
        `FrameGrab-${platform.version}-${platform.platformCategory}.dmg`,
        platform.fileFormat,
        platform.fileSize || '35 MB'
      );
    } else {
      onOpenWaitlist(platform.name);
    }
  };

  return (
    <section
      id="downloads"
      className="relative py-24 sm:py-32 bg-[#FFFFFF] dark:bg-[#0D0F10] border-t border-b border-[#E2E5E9] dark:border-[#303437]/60 overflow-hidden transition-colors duration-200"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#F0F2F5] dark:bg-[#141719] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#C9FF2E]/10 dark:bg-[#C9FF2E]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111315] dark:text-[#F1F0EA]">
            Download FrameGrab
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5E6670] dark:text-[#85898B] leading-relaxed">
            Lightweight, standalone video downloader binaries. Choose your operating system architecture below.
          </p>
        </div>

        {/* Downloads Grid: 4 Platforms */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DOWNLOAD_PLATFORMS.map((platform) => {
            const isAvailable = platform.status === 'available';
            return (
              <div
                key={platform.id}
                id={`download-card-${platform.id}`}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all flex flex-col justify-between border ${
                  isAvailable
                    ? 'bg-[#F7F8FA] dark:bg-[#141719] border-[#E2E5E9] dark:border-[#303437] hover:border-[#7BB300] dark:hover:border-[#C9FF2E]/70 shadow-md dark:shadow-xl'
                    : 'bg-[#F7F8FA]/70 dark:bg-[#141719]/70 border-[#E2E5E9] dark:border-[#303437]/70 hover:border-[#CDD1D6] dark:hover:border-[#303437]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Status Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                          isAvailable
                            ? 'bg-[#FFFFFF] dark:bg-[#181B1D] border-[#E2E5E9] dark:border-[#303437] text-[#0D0F10] dark:text-[#C9FF2E] group-hover:border-[#7BB300] dark:group-hover:border-[#C9FF2E]/50 shadow-sm'
                            : 'bg-[#FFFFFF]/60 dark:bg-[#181B1D]/60 border-[#E2E5E9] dark:border-[#303437]/50 text-[#5E6670] dark:text-[#85898B]'
                        }`}
                      >
                        {platform.iconType === 'apple' && (
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.1.65-2.77 1.44-.58.68-1.09 1.76-1.02 2.8 1.08.08 2.17-.59 2.78-1.37z" />
                          </svg>
                        )}
                        {platform.iconType === 'windows' && (
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.8" />
                          </svg>
                        )}
                        {platform.iconType === 'chrome' && (
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.847-2.632L1.931 5.47zM12 7.636a4.364 4.364 0 1 0 0 8.728 4.364 4.364 0 0 0 0-8.728zm9.368 4.364a5.45 5.45 0 0 1-1.363 4.215L16.052 23.06A11.968 11.968 0 0 0 24 12c0-.52-.035-1.032-.097-1.536H12.545a5.46 5.46 0 0 1 8.823 1.536z" />
                          </svg>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#111315] dark:text-[#F1F0EA]">
                          {platform.name}
                        </h3>
                        <p className="text-xs text-[#5E6670] dark:text-[#85898B] font-mono mt-0.5">
                          {platform.architecture}
                        </p>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div>
                      {isAvailable ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#181B1D] border border-[#E2E5E9] dark:border-[#303437] text-xs font-mono text-[#4A7000] dark:text-[#C9FF2E] shadow-sm dark:shadow-none">
                          <span className="w-2 h-2 rounded-full bg-[#7BB300] dark:bg-[#C9FF2E]" />
                          {platform.version} Stable
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#181B1D] border border-[#E2E5E9] dark:border-[#303437] text-xs font-mono text-[#5E6670] dark:text-[#85898B]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#85898B]" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Architecture & File Specs Table */}
                  <div className="bg-[#FFFFFF] dark:bg-[#181B1D] border border-[#E2E5E9] dark:border-[#303437] rounded-xl p-4 mb-5 text-xs font-mono shadow-sm dark:shadow-none">
                    <div className="grid grid-cols-2 gap-3 text-[#5E6670] dark:text-[#85898B]">
                      <div>
                        <span className="block text-[10px] uppercase text-[#5E6670]/80 dark:text-[#85898B]/80 mb-0.5">Package Format</span>
                        <span className="text-[#111315] dark:text-[#F1F0EA] font-semibold">{platform.fileFormat}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-[#5E6670]/80 dark:text-[#85898B]/80 mb-0.5">Payload Size</span>
                        <span className="text-[#111315] dark:text-[#F1F0EA] font-semibold">{platform.fileSize || 'TBD'}</span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-[#E2E5E9] dark:border-[#303437]/50">
                        <span className="block text-[10px] uppercase text-[#5E6670]/80 dark:text-[#85898B]/80 mb-0.5">System Requirement</span>
                        <span className="text-[#111315] dark:text-[#F1F0EA]">{platform.requirements}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features bullet points */}
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#5E6670] dark:text-[#85898B]">
                        <Check className="w-3.5 h-3.5 text-[#7BB300] dark:text-[#C9FF2E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div>
                  {isAvailable && (
                    <button
                      type="button"
                      id={`btn-download-${platform.id}`}
                      onClick={() => handleDownloadClick(platform)}
                      className="w-full flex items-center justify-center gap-2 bg-[#C9FF2E] hover:bg-[#D4FF35] text-[#0D0F10] font-bold text-sm py-3.5 px-5 rounded-xl transition-all transform active:scale-[0.98] shadow-md shadow-[#C9FF2E]/15 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download {platform.name}</span>
                      <span className="text-xs font-mono font-normal opacity-80">({platform.fileSize})</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
